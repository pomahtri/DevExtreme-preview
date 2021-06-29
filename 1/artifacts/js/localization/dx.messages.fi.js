/*!
* DevExtreme (dx.messages.fi.js)
* Version: 21.2.0
* Build date: Tue Jun 29 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

(function(root, factory) {
    if(typeof define === 'function' && define.amd) {
        define(function(require) {
            factory(require("devextreme/localization"));
        });
    } else if(typeof module === "object" && module.exports) {
        factory(require("devextreme/localization"));
    } else {
        factory(DevExpress.localization);
    }
}(this, function(localization) {
    localization.loadMessages({
        "fi": {
            "Yes": "Kyllä",
            "No": "Ei",
            "Cancel": "Peruuta",
            "Clear": "Tyhjennä",
            "Done": "Valmis",
            "Loading": "Ladataan...",
            "Select": "Valitse...",
            "Search": "Haku",
            "Back": "Takaisin",
            "OK": "OK",
            "dxCollectionWidget-noDataText": "Ei näytettäviä tietoja",
            "dxDropDownEditor-selectLabel": "Valitse",
            "validation-required": "Pakollinen",
            "validation-required-formatted": "{0} on pakollinen",
            "validation-numeric": "Arvon on oltava luku",
            "validation-numeric-formatted": "{0} on oltava luku",
            "validation-range": "Arvo on alueen ulkopuolella",
            "validation-range-formatted": "{0} on alueen ulkopuolella",
            "validation-stringLength": "Arvon pituus ei ole oikein",
            "validation-stringLength-formatted": "Arvolla {0} on väärä pituus",
            "validation-custom": "Arvo on virheellinen",
            "validation-custom-formatted": "{0} on virheellinen",
            "validation-async": "Arvo on virheellinen",
            "validation-async-formatted": "{0} on virheellinen",
            "validation-compare": "Arvot eivät täsmää",
            "validation-compare-formatted": "{0} eivät täsmää",
            "validation-pattern": "Arvo ei vastaa mallia",
            "validation-pattern-formatted": "{0} ei vastaa mallia",
            "validation-email": "Sähköpostiosoite on virheellinen",
            "validation-email-formatted": "{0} on virheellinen",
            "validation-mask": "Arvo on virheellinen",
            "dxLookup-searchPlaceholder": "Merkkien vähimmäismäärä: {0}",
            "dxList-pullingDownText": "Päivitä vetämällä alas...",
            "dxList-pulledDownText": "Päivitä vapauttamalla...",
            "dxList-refreshingText": "Päivitetään...",
            "dxList-pageLoadingText": "Ladataan...",
            "dxList-nextButtonText": "Lisää",
            "dxList-selectAll": "Valitse kaikki",
            "dxListEditDecorator-delete": "Poista",
            "dxListEditDecorator-more": "Lisää",
            "dxScrollView-pullingDownText": "Päivitä vetämällä alas...",
            "dxScrollView-pulledDownText": "Päivitä vapauttamalla...",
            "dxScrollView-refreshingText": "Päivitetään...",
            "dxScrollView-reachBottomText": "Ladataan...",
            "dxDateBox-simulatedDataPickerTitleTime": "Valitse kellonaika",
            "dxDateBox-simulatedDataPickerTitleDate": "Valitse päivämäärä",
            "dxDateBox-simulatedDataPickerTitleDateTime": "Valitse päivämäärä ja kellonaika",
            "dxDateBox-validation-datetime": "Arvon on oltava päiväys tai aika",
            "dxFileUploader-selectFile": "Valitse tiedosto",
            "dxFileUploader-dropFile": "tai vedä ja pudota tiedosto tähän",
            "dxFileUploader-bytes": "tavua",
            "dxFileUploader-kb": "kt",
            "dxFileUploader-Mb": "Mt",
            "dxFileUploader-Gb": "Gt",
            "dxFileUploader-upload": "Lähetä",
            "dxFileUploader-uploaded": "Lähetetty",
            "dxFileUploader-readyToUpload": "Valmis lähetettäväksi",
            "dxFileUploader-uploadAbortedMessage": "TODO",
            "dxFileUploader-uploadFailedMessage": "Lähetys epäonnistui",
            "dxFileUploader-invalidFileExtension": "",
            "dxFileUploader-invalidMaxFileSize": "",
            "dxFileUploader-invalidMinFileSize": "",
            "dxRangeSlider-ariaFrom": "Alkaen",
            "dxRangeSlider-ariaTill": "Asti",
            "dxSwitch-switchedOnText": "PÄÄLLE",
            "dxSwitch-switchedOffText": "POIS",
            "dxForm-optionalMark": "valinnainen",
            "dxForm-requiredMessage": "{0} on pakollinen",
            "dxNumberBox-invalidValueMessage": "Arvon on oltava numero",
            "dxNumberBox-noDataText": "Ei dataa",
            "dxDataGrid-columnChooserTitle": "Sarakkeenvalitsin",
            "dxDataGrid-columnChooserEmptyText": "Vedä sarake täällä piilottaa sen",
            "dxDataGrid-groupContinuesMessage": "Jatkuu seuraavalla sivulla",
            "dxDataGrid-groupContinuedMessage": "Jatkoa edelliseltä sivulta",
            "dxDataGrid-groupHeaderText": "Ryhmittele tämän sarakkeen mukaan",
            "dxDataGrid-ungroupHeaderText": "Poista ryhmittely",
            "dxDataGrid-ungroupAllText": "Poista kaikki ryhmittymät",
            "dxDataGrid-editingEditRow": "Muokkaa",
            "dxDataGrid-editingSaveRowChanges": "Tallenna",
            "dxDataGrid-editingCancelRowChanges": "Peruuta",
            "dxDataGrid-editingDeleteRow": "Poista",
            "dxDataGrid-editingUndeleteRow": "Palauta",
            "dxDataGrid-editingConfirmDeleteMessage": "Oletko varma, että haluat poistaa tämän tietueen?",
            "dxDataGrid-validationCancelChanges": "Peruuta muutokset",
            "dxDataGrid-groupPanelEmptyText": "Vedä sarakeotsikko tähän, jos haluat ryhmitellä kyseisen sarakkeen mukaan",
            "dxDataGrid-noDataText": "Ei dataa",
            "dxDataGrid-searchPanelPlaceholder": "Haku...",
            "dxDataGrid-filterRowShowAllText": "(Kaikki)",
            "dxDataGrid-filterRowResetOperationText": "Palauta",
            "dxDataGrid-filterRowOperationEquals": "Yhtä suuri kuin",
            "dxDataGrid-filterRowOperationNotEquals": "Eri suuri kuin",
            "dxDataGrid-filterRowOperationLess": "Pienempi kuin",
            "dxDataGrid-filterRowOperationLessOrEquals": "Pienempi tai yhtä suuri kuin",
            "dxDataGrid-filterRowOperationGreater": "Suurempi kuin",
            "dxDataGrid-filterRowOperationGreaterOrEquals": "Suurempi tai yhtä suuri kuin",
            "dxDataGrid-filterRowOperationStartsWith": "Alkaa merkeillä",
            "dxDataGrid-filterRowOperationContains": "Sisältää",
            "dxDataGrid-filterRowOperationNotContains": "Ei sisällä",
            "dxDataGrid-filterRowOperationEndsWith": "Loppuu merkeillä",
            "dxDataGrid-filterRowOperationBetween": "Välillä",
            "dxDataGrid-filterRowOperationBetweenStartText": "Alkaa",
            "dxDataGrid-filterRowOperationBetweenEndText": "Loppu",
            "dxDataGrid-applyFilterText": "Käytä suodatinta",
            "dxDataGrid-trueText": "tosi",
            "dxDataGrid-falseText": "epätosi",
            "dxDataGrid-sortingAscendingText": "Lajittele nouseva",
            "dxDataGrid-sortingDescendingText": "Lajittele laskeva",
            "dxDataGrid-sortingClearText": "Tyhjennä lajittelu",
            "dxDataGrid-editingSaveAllChanges": "Tallenna muutokset",
            "dxDataGrid-editingCancelAllChanges": "Hylkää muutokset",
            "dxDataGrid-editingAddRow": "Lisää rivi",
            "dxDataGrid-summaryMin": "Min: {0}",
            "dxDataGrid-summaryMinOtherColumn": "Min {1} on {0}",
            "dxDataGrid-summaryMax": "Max: {0}",
            "dxDataGrid-summaryMaxOtherColumn": "Max {1} on {0}",
            "dxDataGrid-summaryAvg": "Keskiarvo: {0}",
            "dxDataGrid-summaryAvgOtherColumn": "Keskiarvo {1} on {0}",
            "dxDataGrid-summarySum": "Summa: {0}",
            "dxDataGrid-summarySumOtherColumn": "Summa {1} on {0}",
            "dxDataGrid-summaryCount": "Määrä: {0}",
            "dxDataGrid-columnFixingFix": "Kiinteät sarakkeet",
            "dxDataGrid-columnFixingUnfix": "Poista kiinteät sarakkeet",
            "dxDataGrid-columnFixingLeftPosition": "Vasemmalle",
            "dxDataGrid-columnFixingRightPosition": "Oikealle",
            "dxDataGrid-exportTo": "Vie",
            "dxDataGrid-exportToExcel": "Vie Exceliin",
            "dxDataGrid-exporting": "Vienti...",
            "dxDataGrid-excelFormat": "Excel-tiedostot",
            "dxDataGrid-selectedRows": "Valitut tietueet",
            "dxDataGrid-exportSelectedRows": "Vie valitut tietueet",
            "dxDataGrid-exportAll": "Vie kaikki tiedot",
            "dxDataGrid-headerFilterEmptyValue": "(Tyhjät)",
            "dxDataGrid-headerFilterOK": "OK",
            "dxDataGrid-headerFilterCancel": "Peruuta",
            "dxDataGrid-ariaColumn": "Sarake",
            "dxDataGrid-ariaValue": "Arvo",
            "dxDataGrid-ariaFilterCell": "Suodatinsolu",
            "dxDataGrid-ariaCollapse": "Tiivistä",
            "dxDataGrid-ariaExpand": "Laajenna",
            "dxDataGrid-ariaDataGrid": "Tietoruudukko",
            "dxDataGrid-ariaSearchInGrid": "Hae tietoriviltä",
            "dxDataGrid-ariaSelectAll": "Valitse kaikki",
            "dxDataGrid-ariaSelectRow": "Valitse rivi",
            "dxDataGrid-filterBuilderPopupTitle": "Suodattimen muodostin",
            "dxDataGrid-filterPanelCreateFilter": "Luo suodatin",
            "dxDataGrid-filterPanelClearFilter": "Tyhjennä",
            "dxDataGrid-filterPanelFilterEnabledHint": "Ota suodatin käyttöön",
            "dxTreeList-ariaTreeList": "Puu",
            "dxTreeList-editingAddRowToNode": "Lisää",
            "dxPager-infoText": "Sivu {0}/{1} ({2} kohdetta)",
            "dxPager-pagesCountText": "/",
            "dxPager-pageSizesAllText": "Kaikki",
            "dxPivotGrid-grandTotal": "Loppusumma",
            "dxPivotGrid-total": "{0} Summa",
            "dxPivotGrid-fieldChooserTitle": "Kentän valitseminen",
            "dxPivotGrid-showFieldChooser": "Avaa kentän valitsemistoiminto",
            "dxPivotGrid-expandAll": "Laajenna kaikki",
            "dxPivotGrid-collapseAll": "Tiivistä kaikki",
            "dxPivotGrid-sortColumnBySummary": "Lajittele \"{0}\" tähän sarakkeeseen",
            "dxPivotGrid-sortRowBySummary": "Lajittele \"{0}\" tämän rivin mukaan",
            "dxPivotGrid-removeAllSorting": "Poista kaikki lajittelu",
            "dxPivotGrid-dataNotAvailable": "Puuttuu",
            "dxPivotGrid-rowFields": "Rivikentät",
            "dxPivotGrid-columnFields": "Sarakekentät",
            "dxPivotGrid-dataFields": "Tietokentät",
            "dxPivotGrid-filterFields": "Suodatinkentät",
            "dxPivotGrid-allFields": "Kaikki kentät",
            "dxPivotGrid-columnFieldArea": "Pudota sarakekentät tähän",
            "dxPivotGrid-dataFieldArea": "Pudota tietokentät tähän",
            "dxPivotGrid-rowFieldArea": "Pudota rivikentät tähän",
            "dxPivotGrid-filterFieldArea": "Pudota suodatinkentät tähän",
            "dxScheduler-editorLabelTitle": "Aihe",
            "dxScheduler-editorLabelStartDate": "Alkamispäivä",
            "dxScheduler-editorLabelEndDate": "Päättymispäivä",
            "dxScheduler-editorLabelDescription": "Kuvaus",
            "dxScheduler-editorLabelRecurrence": "Toista",
            "dxScheduler-openAppointment": "Avaa tapaaminen",
            "dxScheduler-recurrenceNever": "Ei koskaan",
            "dxScheduler-recurrenceMinutely": "Minutely",
            "dxScheduler-recurrenceHourly": "Hourly",
            "dxScheduler-recurrenceDaily": "Päivittäin",
            "dxScheduler-recurrenceWeekly": "Viikoittain",
            "dxScheduler-recurrenceMonthly": "Kuukausittain",
            "dxScheduler-recurrenceYearly": "Vuosittain",
            "dxScheduler-recurrenceRepeatEvery": "Joka",
            "dxScheduler-recurrenceRepeatOn": "Repeat On",
            "dxScheduler-recurrenceEnd": "Loppu",
            "dxScheduler-recurrenceAfter": "Jälkeen",
            "dxScheduler-recurrenceOn": "Aika",
            "dxScheduler-recurrenceRepeatMinutely": "minute(s)",
            "dxScheduler-recurrenceRepeatHourly": "hour(s)",
            "dxScheduler-recurrenceRepeatDaily": "päivittäin",
            "dxScheduler-recurrenceRepeatWeekly": "viikon välein",
            "dxScheduler-recurrenceRepeatMonthly": "kuukauden välein",
            "dxScheduler-recurrenceRepeatYearly": "vuosittain",
            "dxScheduler-switcherDay": "Päivä",
            "dxScheduler-switcherWeek": "Viikko",
            "dxScheduler-switcherWorkWeek": "Työviikko",
            "dxScheduler-switcherMonth": "Kuukausi",
            "dxScheduler-switcherAgenda": "Esityslista",
            "dxScheduler-switcherTimelineDay": "Aikajana päivä",
            "dxScheduler-switcherTimelineWeek": "Aikajana viikko",
            "dxScheduler-switcherTimelineWorkWeek": "Aikajana työviikko",
            "dxScheduler-switcherTimelineMonth": "Aikajana kuukausi",
            "dxScheduler-recurrenceRepeatOnDate": "päivämäärällä",
            "dxScheduler-recurrenceRepeatCount": "esiintymiä",
            "dxScheduler-allDay": "Koko päivä",
            "dxScheduler-confirmRecurrenceEditMessage": "Haluatko muokata vain tämän tapaamisen tai koko sarja?",
            "dxScheduler-confirmRecurrenceDeleteMessage": "Haluatko poistaa vain tämän tapaamisen tai koko sarja?",
            "dxScheduler-confirmRecurrenceEditSeries": "Muokkaa sarjaa",
            "dxScheduler-confirmRecurrenceDeleteSeries": "Poista sarja",
            "dxScheduler-confirmRecurrenceEditOccurrence": "Muokkaa tapaaminen",
            "dxScheduler-confirmRecurrenceDeleteOccurrence": "Poista tapaaminen",
            "dxScheduler-noTimezoneTitle": "Ei aikavyöhyke",
            "dxScheduler-moreAppointments": "{0} lisää",
            "dxCalendar-todayButtonText": "Tänään",
            "dxCalendar-ariaWidgetName": "Kalenteri",
            "dxColorView-ariaRed": "Punainen",
            "dxColorView-ariaGreen": "Vihreä",
            "dxColorView-ariaBlue": "Sininen",
            "dxColorView-ariaAlpha": "Läpinäkyvyys",
            "dxColorView-ariaHex": "Värikoodi",
            "dxTagBox-selected": "{0} valittu",
            "dxTagBox-allSelected": "Kaikki valitut ({0})",
            "dxTagBox-moreSelected": "{0} lisää",
            "vizExport-printingButtonText": "Tulosta",
            "vizExport-titleMenuText": "Vienti/Tulostus",
            "vizExport-exportButtonText": "{0} tiedosto",
            "dxFilterBuilder-and": "Ja",
            "dxFilterBuilder-or": "Tai",
            "dxFilterBuilder-notAnd": "Ei ja",
            "dxFilterBuilder-notOr": "Ei tai",
            "dxFilterBuilder-addCondition": "Lisää ehto",
            "dxFilterBuilder-addGroup": "Lisää ryhmä",
            "dxFilterBuilder-enterValueText": "<anna arvo>",
            "dxFilterBuilder-filterOperationEquals": "On sama kuin",
            "dxFilterBuilder-filterOperationNotEquals": "Ei ole sama kuin",
            "dxFilterBuilder-filterOperationLess": "Pienempi kuin",
            "dxFilterBuilder-filterOperationLessOrEquals": "Pienempi tai yhtä suuri kuin",
            "dxFilterBuilder-filterOperationGreater": "Suurempi kuin",
            "dxFilterBuilder-filterOperationGreaterOrEquals": "Suurempi tai yhtä suuri kuin",
            "dxFilterBuilder-filterOperationStartsWith": "Alkaa merkillä",
            "dxFilterBuilder-filterOperationContains": "Sisältää",
            "dxFilterBuilder-filterOperationNotContains": "Ei sisällä",
            "dxFilterBuilder-filterOperationEndsWith": "Loppuu merkillä",
            "dxFilterBuilder-filterOperationIsBlank": "On tyhjä",
            "dxFilterBuilder-filterOperationIsNotBlank": "Ei ole tyhjä",
            "dxFilterBuilder-filterOperationBetween": "Välillä",
            "dxFilterBuilder-filterOperationAnyOf": "Joku näistä",
            "dxFilterBuilder-filterOperationNoneOf": "Ei mikään näistä",
            "dxHtmlEditor-dialogColorCaption": "!TODO!",
            "dxHtmlEditor-dialogBackgroundCaption": "!TODO!",
            "dxHtmlEditor-dialogLinkCaption": "!TODO!",
            "dxHtmlEditor-dialogLinkUrlField": "!TODO!",
            "dxHtmlEditor-dialogLinkTextField": "!TODO!",
            "dxHtmlEditor-dialogLinkTargetField": "!TODO!",
            "dxHtmlEditor-dialogImageCaption": "!TODO!",
            "dxHtmlEditor-dialogImageUrlField": "!TODO!",
            "dxHtmlEditor-dialogImageAltField": "!TODO!",
            "dxHtmlEditor-dialogImageWidthField": "!TODO!",
            "dxHtmlEditor-dialogImageHeightField": "!TODO!",
            "dxHtmlEditor-dialogInsertTableRowsField": "!TODO",
            "dxHtmlEditor-dialogInsertTableColumnsField": "!TODO",
            "dxHtmlEditor-dialogInsertTableCaption": "!TODO",
            "dxHtmlEditor-heading": "!TODO!",
            "dxHtmlEditor-normalText": "!TODO!",
            "dxHtmlEditor-background": "TODO",
            "dxHtmlEditor-bold": "TODO",
            "dxHtmlEditor-color": "TODO",
            "dxHtmlEditor-font": "TODO",
            "dxHtmlEditor-italic": "TODO",
            "dxHtmlEditor-link": "TODO",
            "dxHtmlEditor-image": "TODO",
            "dxHtmlEditor-size": "TODO",
            "dxHtmlEditor-strike": "TODO",
            "dxHtmlEditor-subscript": "TODO",
            "dxHtmlEditor-superscript": "TODO",
            "dxHtmlEditor-underline": "TODO",
            "dxHtmlEditor-blockquote": "TODO",
            "dxHtmlEditor-header": "TODO",
            "dxHtmlEditor-increaseIndent": "TODO",
            "dxHtmlEditor-decreaseIndent": "TODO",
            "dxHtmlEditor-orderedList": "TODO",
            "dxHtmlEditor-bulletList": "TODO",
            "dxHtmlEditor-alignLeft": "TODO",
            "dxHtmlEditor-alignCenter": "TODO",
            "dxHtmlEditor-alignRight": "TODO",
            "dxHtmlEditor-alignJustify": "TODO",
            "dxHtmlEditor-codeBlock": "TODO",
            "dxHtmlEditor-variable": "TODO",
            "dxHtmlEditor-undo": "TODO",
            "dxHtmlEditor-redo": "TODO",
            "dxHtmlEditor-clear": "TODO",
            "dxHtmlEditor-insertTable": "TODO",
            "dxHtmlEditor-insertRowAbove": "TODO",
            "dxHtmlEditor-insertRowBelow": "TODO",
            "dxHtmlEditor-insertColumnLeft": "TODO",
            "dxHtmlEditor-insertColumnRight": "TODO",
            "dxHtmlEditor-deleteColumn": "TODO",
            "dxHtmlEditor-deleteRow": "TODO",
            "dxHtmlEditor-deleteTable": "TODO",
            "dxHtmlEditor-list": "TODO",
            "dxHtmlEditor-ordered": "TODO",
            "dxHtmlEditor-bullet": "TODO",
            "dxHtmlEditor-align": "TODO",
            "dxHtmlEditor-center": "TODO",
            "dxHtmlEditor-left": "TODO",
            "dxHtmlEditor-right": "TODO",
            "dxHtmlEditor-indent": "TODO",
            "dxHtmlEditor-justify": "TODO",
            "dxFileManager-newDirectoryName": "TODO",
            "dxFileManager-rootDirectoryName": "TODO",
            "dxFileManager-errorNoAccess": "TODO",
            "dxFileManager-errorDirectoryExistsFormat": "TODO",
            "dxFileManager-errorFileExistsFormat": "TODO",
            "dxFileManager-errorFileNotFoundFormat": "TODO",
            "dxFileManager-errorDirectoryNotFoundFormat": "TODO",
            "dxFileManager-errorWrongFileExtension": "TODO",
            "dxFileManager-errorMaxFileSizeExceeded": "TODO",
            "dxFileManager-errorInvalidSymbols": "TODO",
            "dxFileManager-errorDefault": "TODO",
            "dxFileManager-errorDirectoryOpenFailed": "TODO",
            "dxDiagram-categoryGeneral": "TODO",
            "dxDiagram-categoryFlowchart": "TODO",
            "dxDiagram-categoryOrgChart": "TODO",
            "dxDiagram-categoryContainers": "TODO",
            "dxDiagram-categoryCustom": "TODO",
            "dxDiagram-commandExportToSvg": "TODO",
            "dxDiagram-commandExportToPng": "TODO",
            "dxDiagram-commandExportToJpg": "TODO",
            "dxDiagram-commandUndo": "TODO",
            "dxDiagram-commandRedo": "TODO",
            "dxDiagram-commandFontName": "TODO",
            "dxDiagram-commandFontSize": "TODO",
            "dxDiagram-commandBold": "TODO",
            "dxDiagram-commandItalic": "TODO",
            "dxDiagram-commandUnderline": "TODO",
            "dxDiagram-commandTextColor": "TODO",
            "dxDiagram-commandLineColor": "TODO",
            "dxDiagram-commandLineWidth": "TODO",
            "dxDiagram-commandLineStyle": "TODO",
            "dxDiagram-commandLineStyleSolid": "TODO",
            "dxDiagram-commandLineStyleDotted": "TODO",
            "dxDiagram-commandLineStyleDashed": "TODO",
            "dxDiagram-commandFillColor": "TODO",
            "dxDiagram-commandAlignLeft": "TODO",
            "dxDiagram-commandAlignCenter": "TODO",
            "dxDiagram-commandAlignRight": "TODO",
            "dxDiagram-commandConnectorLineType": "TODO",
            "dxDiagram-commandConnectorLineStraight": "TODO",
            "dxDiagram-commandConnectorLineOrthogonal": "TODO",
            "dxDiagram-commandConnectorLineStart": "TODO",
            "dxDiagram-commandConnectorLineEnd": "TODO",
            "dxDiagram-commandConnectorLineNone": "TODO",
            "dxDiagram-commandConnectorLineArrow": "TODO",
            "dxDiagram-commandFullscreen": "TODO",
            "dxDiagram-commandUnits": "TODO",
            "dxDiagram-commandPageSize": "TODO",
            "dxDiagram-commandPageOrientation": "TODO",
            "dxDiagram-commandPageOrientationLandscape": "TODO",
            "dxDiagram-commandPageOrientationPortrait": "TODO",
            "dxDiagram-commandPageColor": "TODO",
            "dxDiagram-commandShowGrid": "TODO",
            "dxDiagram-commandSnapToGrid": "TODO",
            "dxDiagram-commandGridSize": "TODO",
            "dxDiagram-commandZoomLevel": "TODO",
            "dxDiagram-commandAutoZoom": "TODO",
            "dxDiagram-commandFitToContent": "TODO",
            "dxDiagram-commandFitToWidth": "TODO",
            "dxDiagram-commandAutoZoomByContent": "TODO",
            "dxDiagram-commandAutoZoomByWidth": "TODO",
            "dxDiagram-commandSimpleView": "TODO",
            "dxDiagram-commandCut": "TODO",
            "dxDiagram-commandCopy": "TODO",
            "dxDiagram-commandPaste": "TODO",
            "dxDiagram-commandSelectAll": "TODO",
            "dxDiagram-commandDelete": "TODO",
            "dxDiagram-commandBringToFront": "TODO",
            "dxDiagram-commandSendToBack": "TODO",
            "dxDiagram-commandLock": "TODO",
            "dxDiagram-commandUnlock": "TODO",
            "dxDiagram-commandInsertShapeImage": "TODO",
            "dxDiagram-commandEditShapeImage": "TODO",
            "dxDiagram-commandDeleteShapeImage": "TODO",
            "dxDiagram-commandLayoutLeftToRight": "TODO",
            "dxDiagram-commandLayoutRightToLeft": "TODO",
            "dxDiagram-commandLayoutTopToBottom": "TODO",
            "dxDiagram-commandLayoutBottomToTop": "TODO",
            "dxDiagram-unitIn": "TODO",
            "dxDiagram-unitCm": "TODO",
            "dxDiagram-unitPx": "TODO",
            "dxDiagram-dialogButtonOK": "TODO",
            "dxDiagram-dialogButtonCancel": "TODO",
            "dxDiagram-dialogInsertShapeImageTitle": "TODO",
            "dxDiagram-dialogEditShapeImageTitle": "TODO",
            "dxDiagram-dialogEditShapeImageSelectButton": "TODO",
            "dxDiagram-dialogEditShapeImageLabelText": "TODO",
            "dxDiagram-uiExport": "TODO",
            "dxDiagram-uiProperties": "TODO",
            "dxDiagram-uiSettings": "TODO",
            "dxDiagram-uiShowToolbox": "TODO",
            "dxDiagram-uiSearch": "TODO",
            "dxDiagram-uiStyle": "TODO",
            "dxDiagram-uiLayout": "TODO",
            "dxDiagram-uiLayoutTree": "TODO",
            "dxDiagram-uiLayoutLayered": "TODO",
            "dxDiagram-uiDiagram": "TODO",
            "dxDiagram-uiText": "TODO",
            "dxDiagram-uiObject": "TODO",
            "dxDiagram-uiConnector": "TODO",
            "dxDiagram-uiPage": "TODO",
            "dxDiagram-shapeText": "TODO",
            "dxDiagram-shapeRectangle": "TODO",
            "dxDiagram-shapeEllipse": "TODO",
            "dxDiagram-shapeCross": "TODO",
            "dxDiagram-shapeTriangle": "TODO",
            "dxDiagram-shapeDiamond": "TODO",
            "dxDiagram-shapeHeart": "TODO",
            "dxDiagram-shapePentagon": "TODO",
            "dxDiagram-shapeHexagon": "TODO",
            "dxDiagram-shapeOctagon": "TODO",
            "dxDiagram-shapeStar": "TODO",
            "dxDiagram-shapeArrowLeft": "TODO",
            "dxDiagram-shapeArrowUp": "TODO",
            "dxDiagram-shapeArrowRight": "TODO",
            "dxDiagram-shapeArrowDown": "TODO",
            "dxDiagram-shapeArrowUpDown": "TODO",
            "dxDiagram-shapeArrowLeftRight": "TODO",
            "dxDiagram-shapeProcess": "TODO",
            "dxDiagram-shapeDecision": "TODO",
            "dxDiagram-shapeTerminator": "TODO",
            "dxDiagram-shapePredefinedProcess": "TODO",
            "dxDiagram-shapeDocument": "TODO",
            "dxDiagram-shapeMultipleDocuments": "TODO",
            "dxDiagram-shapeManualInput": "TODO",
            "dxDiagram-shapePreparation": "TODO",
            "dxDiagram-shapeData": "TODO",
            "dxDiagram-shapeDatabase": "TODO",
            "dxDiagram-shapeHardDisk": "TODO",
            "dxDiagram-shapeInternalStorage": "TODO",
            "dxDiagram-shapePaperTape": "TODO",
            "dxDiagram-shapeManualOperation": "TODO",
            "dxDiagram-shapeDelay": "TODO",
            "dxDiagram-shapeStoredData": "TODO",
            "dxDiagram-shapeDisplay": "TODO",
            "dxDiagram-shapeMerge": "TODO",
            "dxDiagram-shapeConnector": "TODO",
            "dxDiagram-shapeOr": "TODO",
            "dxDiagram-shapeSummingJunction": "TODO",
            "dxDiagram-shapeContainerDefaultText": "TODO",
            "dxDiagram-shapeVerticalContainer": "TODO",
            "dxDiagram-shapeHorizontalContainer": "TODO",
            "dxDiagram-shapeCardDefaultText": "TODO",
            "dxDiagram-shapeCardWithImageOnLeft": "TODO",
            "dxDiagram-shapeCardWithImageOnTop": "TODO",
            "dxDiagram-shapeCardWithImageOnRight": "TODO",
            "dxGantt-dialogTitle": "TODO",
            "dxGantt-dialogStartTitle": "TODO",
            "dxGantt-dialogEndTitle": "TODO",
            "dxGantt-dialogProgressTitle": "TODO",
            "dxGantt-dialogResourcesTitle": "TODO",
            "dxGantt-dialogResourceManagerTitle": "TODO",
            "dxGantt-dialogTaskDetailsTitle": "TODO",
            "dxGantt-dialogEditResourceListHint": "TODO",
            "dxGantt-dialogEditNoResources": "TODO",
            "dxGantt-dialogButtonAdd": "TODO",
            "dxGantt-contextMenuNewTask": "TODO",
            "dxGantt-contextMenuNewSubtask": "TODO",
            "dxGantt-contextMenuDeleteTask": "TODO",
            "dxGantt-contextMenuDeleteDependency": "TODO",
            "dxGantt-dialogTaskDeleteConfirmation": "TODO",
            "dxGantt-dialogDependencyDeleteConfirmation": "TODO",
            "dxGantt-dialogResourcesDeleteConfirmation": "TODO",
            "dxGantt-dialogConstraintCriticalViolationMessage": "TODO",
            "dxGantt-dialogConstraintViolationMessage": "TODO",
            "dxGantt-dialogCancelOperationMessage": "TODO",
            "dxGantt-dialogDeleteDependencyMessage": "TODO",
            "dxGantt-dialogMoveTaskAndKeepDependencyMessage": "TODO",
            "dxGantt-undo": "TODO",
            "dxGantt-redo": "TODO",
            "dxGantt-expandAll": "TODO",
            "dxGantt-collapseAll": "TODO",
            "dxGantt-addNewTask": "TODO",
            "dxGantt-deleteSelectedTask": "TODO",
            "dxGantt-zoomIn": "TODO",
            "dxGantt-zoomOut": "TODO",
            "dxGantt-fullScreen": "TODO",
            "dxGantt-quarter": "TODO"
        }
    });
}));
