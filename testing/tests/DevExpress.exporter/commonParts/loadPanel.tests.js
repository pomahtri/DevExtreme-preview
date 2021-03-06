import browser from 'core/utils/browser';
import localization from 'localization';
import ja from 'localization/messages/ja.json!';
import messageLocalization from 'localization/message';
import { extend } from 'core/utils/extend';

const LoadPanelTests = {
    runTests(moduleConfig, exportFunc, getComponent, document) {
        QUnit.module('LoadPanel', moduleConfig, () => {
            [undefined, { enabled: true, text: 'Export to .Extention...' }].forEach((loadPanelConfig) => {
                QUnit.test(`LoadPanel - loadPanel: ${JSON.stringify(loadPanelConfig)}`, function(assert) {
                    const done = assert.async();
                    const component = getComponent();

                    let actualLoadPanelSettingsOnExporting;
                    let loadPanelOnShownHandlerCallCount = 0;

                    const getLoadPanelOptions = () => {
                        const instance = component._getInternalInstance ? component._getInternalInstance() : component;
                        return instance.option('loadPanel');
                    };

                    const loadPanelOnShownHandler = () => {
                        loadPanelOnShownHandlerCallCount++;
                        actualLoadPanelSettingsOnExporting = extend({}, getLoadPanelOptions());
                    };

                    component.option('loadPanel.onShown', loadPanelOnShownHandler);

                    const initialLoadPanelSettings = extend({}, getLoadPanelOptions());
                    const expectedLoadPanelSettingsOnExporting = extend({}, initialLoadPanelSettings, loadPanelConfig || { enabled: true, text: 'Exporting...' }, { onShown: loadPanelOnShownHandler });

                    if(component.NAME === 'dxDataGrid' && browser.webkit) {
                        extend(expectedLoadPanelSettingsOnExporting, { animation: null });
                    }

                    exportFunc({ component: component, [document]: this[document], loadPanel: loadPanelConfig }).then(() => {
                        assert.strictEqual(loadPanelOnShownHandlerCallCount, 1, 'loadPanel should be shown on Exporting');
                        assert.deepEqual(actualLoadPanelSettingsOnExporting, expectedLoadPanelSettingsOnExporting, 'loadPanel settings on exporting');
                        assert.deepEqual(getLoadPanelOptions(), initialLoadPanelSettings, 'loadPanel settings restored after exporting');
                        done();
                    });
                });
            });

            QUnit.test('LoadPanel - loadPanel: { enabled: false }', function(assert) {
                assert.expect();
                const done = assert.async();
                const component = getComponent();

                let loadPanelOnShownHandlerCallCount = 0;

                const loadPanelOnShownHandler = (e) => {
                    loadPanelOnShownHandlerCallCount++;
                };

                component.option('loadPanel.onShown', loadPanelOnShownHandler);
                const initialLoadPanelSettings = component.option('loadPanel');

                exportFunc({ component: component, [document]: this[document], loadPanel: { enabled: false } }).then(() => {
                    assert.strictEqual(loadPanelOnShownHandlerCallCount, 0, 'loadPanel should not be shown on Exporting');
                    assert.deepEqual(component.option('loadPanel'), initialLoadPanelSettings, 'loadPanel settings');
                    done();
                });
            });

            [{ type: 'default', expected: '??????????????????...' }, { type: 'custom', expected: '!CUSTOM TEXT!' }].forEach((localizationText) => {
                QUnit.test(`LoadPanel - ${localizationText.type} localization text, locale('ja')`, function(assert) {
                    const done = assert.async();
                    const locale = localization.locale();

                    try {
                        if(localizationText.type === 'default') {
                            localization.loadMessages(ja);
                        } else {
                            messageLocalization.load({
                                'ja': {
                                    'dxDataGrid-exporting': '!CUSTOM TEXT!'
                                }
                            });
                        }

                        localization.locale('ja');

                        const component = getComponent();
                        const internalComponent = component._getInternalInstance ? component._getInternalInstance() : component;


                        let actualLoadPanelText;

                        const loadPanelOnShownHandler = () => {
                            actualLoadPanelText = internalComponent.option('loadPanel').text;
                        };

                        component.option('loadPanel.onShown', loadPanelOnShownHandler);

                        exportFunc({ component: component, [document]: this[document] }).then(() => {
                            assert.strictEqual(actualLoadPanelText, localizationText.expected, 'loadPanel.text');
                            done();
                        });
                    } finally {
                        localization.locale(locale);
                    }
                });
            });
        });
    }
};

export { LoadPanelTests };
