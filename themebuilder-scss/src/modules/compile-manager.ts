import Compiler from './compiler';
import WidgetsHandler from './widgets-handler';
import { createSassForSwatch } from './pre-compiler';
import resolveBundle from './bundle-resolver';
import {
  fixSwatchCss, addBasePath, autoPrefix, cleanCss, removeExternalResources, addInfoHeader,
} from './post-compiler';
import BootstrapExtractor from './bootstrap-extractor';
// eslint-disable-next-line import/extensions
import { version, dependencies } from '../data/metadata/dx-theme-builder-metadata';

export default class CompileManager {
  compiler = new Compiler();

  async compile(config: ConfigSettings): Promise<PackageResult> {
    const bundleOptions = resolveBundle(config.themeName, config.colorScheme);
    const {
      items, widgets, isBootstrap, bootstrapVersion, data,
    } = config;

    const widgetsHandler = new WidgetsHandler(widgets, bundleOptions.file, dependencies);
    const widgetsLists = await widgetsHandler.getIndexContent();
    this.compiler.indexFileContent = widgetsLists.indexContent;

    let modifiedVariables = items;

    try {
      if (isBootstrap) {
        const bootstrapExtractor = new BootstrapExtractor(data, bootstrapVersion);
        modifiedVariables = await bootstrapExtractor.extract();
      }

      const compileData = await this.compiler.compile(modifiedVariables, bundleOptions);
      let css = compileData.result.css.toString();
      let swatchSelector: string = null;

      if (config.makeSwatch) {
        const swatchSass = createSassForSwatch(config.outColorScheme, css);
        const swatchResult = await this.compiler.compile([], {
          data: swatchSass.sass,
          ...bundleOptions,
        });

        css = fixSwatchCss(
          swatchResult.result.css,
          swatchSass.selector,
          config.colorScheme,
        );
        swatchSelector = swatchSass.selector;
      }

      if (config.assetsBasePath) {
        css = addBasePath(css, config.assetsBasePath);
      }

      css = await autoPrefix(css);

      if (!config.noClean) {
        css = await cleanCss(css);
      }

      if (config.removeExternalResources) {
        css = removeExternalResources(css);
      }

      css = addInfoHeader(css, version, compileData.result.stats === null);

      return {
        compiledMetadata: compileData.changedVariables,
        css,
        widgets: widgetsLists.widgets,
        unusedWidgets: widgetsLists.unusedWidgets,
        swatchSelector,
        version,
      };
    } catch (e) {
      throw new Error(`Compilation failed. bundle: ${bundleOptions}, file: ${e.file} line: ${e.line} ${e.message}`);
    }
  }
}
