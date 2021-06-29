/*!
* DevExtreme (dx.messages.fr.js)
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
        "fr": {
            "Yes": "Oui",
            "No": "Non",
            "Cancel": "Annuler",
            "Clear": "Vider",
            "Done": "Terminé",
            "Loading": "Chargement...",
            "Select": "Sélection...",
            "Search": "Recherche",
            "Back": "Retour",
            "OK": "OK",
            "dxCollectionWidget-noDataText": "Pas de données",
            "dxDropDownEditor-selectLabel": "Sélection",
            "validation-required": "Obligatoire",
            "validation-required-formatted": "{0} est obligatoire",
            "validation-numeric": "La valeur doit être un nombre",
            "validation-numeric-formatted": "{0} doit être un nombre",
            "validation-range": "La valeur ne se trouve pas dans la plage valide",
            "validation-range-formatted": "{0} ne se trouve pas dans la plage valide",
            "validation-stringLength": "La longueur de la valeur est incorrecte",
            "validation-stringLength-formatted": "La longueur de {0} est incorrecte",
            "validation-custom": "La valeur est invalide",
            "validation-custom-formatted": "{0} est invalide",
            "validation-async": "La valeur est invalide",
            "validation-async-formatted": "{0} est invalide",
            "validation-compare": "La valeur est inappropriée",
            "validation-compare-formatted": "{0} est inappropriée",
            "validation-pattern": "La valeur ne correspond pas au modèle",
            "validation-pattern-formatted": "{0} ne correspond pas au modèle",
            "validation-email": "L'adresse email est invalide",
            "validation-email-formatted": "{0} est invalide",
            "validation-mask": "La valeur est invalide",
            "dxLookup-searchPlaceholder": "Nombre minimum de caractères: {0}",
            "dxList-pullingDownText": "Tirez vers le bas pour actualiser...",
            "dxList-pulledDownText": "Relacher pour actualiser...",
            "dxList-refreshingText": "Actualisation...",
            "dxList-pageLoadingText": "Chargement...",
            "dxList-nextButtonText": "Suivant",
            "dxList-selectAll": "Sélectionner tout",
            "dxListEditDecorator-delete": "Supprimer",
            "dxListEditDecorator-more": "Plus",
            "dxScrollView-pullingDownText": "Tirez vers le bas pour actualiser...",
            "dxScrollView-pulledDownText": "Relacher pour actualiser...",
            "dxScrollView-refreshingText": "Mise à jour...",
            "dxScrollView-reachBottomText": "Chargement...",
            "dxDateBox-simulatedDataPickerTitleTime": "Choisissez l'heure",
            "dxDateBox-simulatedDataPickerTitleDate": "Choisissez la date",
            "dxDateBox-simulatedDataPickerTitleDateTime": "Choisissez la date et l'heure",
            "dxDateBox-validation-datetime": "La valeur doit être une date ou une heure.",
            "dxFileUploader-selectFile": "Choisissez un fichier",
            "dxFileUploader-dropFile": "Enlever fichier",
            "dxFileUploader-bytes": "Bytes",
            "dxFileUploader-kb": "kb",
            "dxFileUploader-Mb": "Mb",
            "dxFileUploader-Gb": "Gb",
            "dxFileUploader-upload": "Télécharger",
            "dxFileUploader-uploaded": "Téléchargé",
            "dxFileUploader-readyToUpload": "Prêt à télécharger",
            "dxFileUploader-uploadAbortedMessage": "TODO",
            "dxFileUploader-uploadFailedMessage": "Échec du téléchargement",
            "dxFileUploader-invalidFileExtension": "Type de fichier non autorisé",
            "dxFileUploader-invalidMaxFileSize": "Fichier trop volumineux",
            "dxFileUploader-invalidMinFileSize": "Fichier trop petit",
            "dxRangeSlider-ariaFrom": "De {0}",
            "dxRangeSlider-ariaTill": "à {0}",
            "dxSwitch-switchedOnText": "ON",
            "dxSwitch-switchedOffText": "OFF",
            "dxForm-optionalMark": "optionnel",
            "dxForm-requiredMessage": "{0} est obligatoire",
            "dxNumberBox-invalidValueMessage": "La valeur doit être un nombre",
            "dxNumberBox-noDataText": "Pas de données",
            "dxDataGrid-columnChooserTitle": "Choisir les colonnes",
            "dxDataGrid-columnChooserEmptyText": "Faites glisser une colonne ici pour la cacher",
            "dxDataGrid-groupContinuesMessage": "Suite à la page suivante",
            "dxDataGrid-groupContinuedMessage": "Suite de la page précédente",
            "dxDataGrid-groupHeaderText": "Grouper avec cette colonne",
            "dxDataGrid-ungroupHeaderText": "Dégrouper",
            "dxDataGrid-ungroupAllText": "Dégrouper tout",
            "dxDataGrid-editingEditRow": "Editer",
            "dxDataGrid-editingSaveRowChanges": "Sauvegarder",
            "dxDataGrid-editingCancelRowChanges": "Annuler",
            "dxDataGrid-editingDeleteRow": "Supprimer",
            "dxDataGrid-editingUndeleteRow": "Restaurer",
            "dxDataGrid-editingConfirmDeleteMessage": "Êtes-vous sûr de vouloir supprimer cet élément ?",
            "dxDataGrid-validationCancelChanges": "Annuler les changements",
            "dxDataGrid-groupPanelEmptyText": "Faites glisser une colonne ICI pour grouper par celle-ci",
            "dxDataGrid-noDataText": "Pas de données",
            "dxDataGrid-searchPanelPlaceholder": "Recherche...",
            "dxDataGrid-filterRowShowAllText": "(tous)",
            "dxDataGrid-filterRowResetOperationText": "Réinitialiser",
            "dxDataGrid-filterRowOperationEquals": "Egale",
            "dxDataGrid-filterRowOperationNotEquals": "Différent de",
            "dxDataGrid-filterRowOperationLess": "Plus petit",
            "dxDataGrid-filterRowOperationLessOrEquals": "Plus petit ou égal",
            "dxDataGrid-filterRowOperationGreater": "Plus grand",
            "dxDataGrid-filterRowOperationGreaterOrEquals": "Plus grand ou égal",
            "dxDataGrid-filterRowOperationStartsWith": "Commence par",
            "dxDataGrid-filterRowOperationContains": "Contient",
            "dxDataGrid-filterRowOperationNotContains": "Ne contient pas",
            "dxDataGrid-filterRowOperationEndsWith": "Termine par",
            "dxDataGrid-filterRowOperationBetween": "Entre",
            "dxDataGrid-filterRowOperationBetweenStartText": "Début",
            "dxDataGrid-filterRowOperationBetweenEndText": "Fin",
            "dxDataGrid-applyFilterText": "Filtrer le texte",
            "dxDataGrid-trueText": "Vrai",
            "dxDataGrid-falseText": "Faux",
            "dxDataGrid-sortingAscendingText": "Tri croissant",
            "dxDataGrid-sortingDescendingText": "Tri décroissant",
            "dxDataGrid-sortingClearText": "Supprimer le tri",
            "dxDataGrid-editingSaveAllChanges": "Sauvegarder les changements",
            "dxDataGrid-editingCancelAllChanges": "Ignorer les changements",
            "dxDataGrid-editingAddRow": "Ajouter ligne",
            "dxDataGrid-summaryMin": "Min: {0}",
            "dxDataGrid-summaryMinOtherColumn": "Minimum de {1} est {0}",
            "dxDataGrid-summaryMax": "Max: {0}",
            "dxDataGrid-summaryMaxOtherColumn": "Maximum de {1} est {0}",
            "dxDataGrid-summaryAvg": "Moy: {0}",
            "dxDataGrid-summaryAvgOtherColumn": "Moyenne de {1} est {0}",
            "dxDataGrid-summarySum": "Somme: {0}",
            "dxDataGrid-summarySumOtherColumn": "Somme de {1} est {0}",
            "dxDataGrid-summaryCount": "Total: {0}",
            "dxDataGrid-columnFixingFix": "Fixer",
            "dxDataGrid-columnFixingUnfix": "Détacher",
            "dxDataGrid-columnFixingLeftPosition": "A gauche",
            "dxDataGrid-columnFixingRightPosition": "A droite",
            "dxDataGrid-exportTo": "Exporter",
            "dxDataGrid-exportToExcel": "Exporter sous Excel",
            "dxDataGrid-exporting": "Exporter...",
            "dxDataGrid-excelFormat": "Fichier Excel",
            "dxDataGrid-selectedRows": "Lignes sélectionnées",
            "dxDataGrid-exportSelectedRows": "Exporter les lignes sélectionnées",
            "dxDataGrid-exportAll": "Exporter tout",
            "dxDataGrid-headerFilterEmptyValue": "(aucune valeur)",
            "dxDataGrid-headerFilterOK": "OK",
            "dxDataGrid-headerFilterCancel": "Annuler",
            "dxDataGrid-ariaColumn": "Colonne",
            "dxDataGrid-ariaValue": "Valeur",
            "dxDataGrid-ariaFilterCell": "Filtre de cellule",
            "dxDataGrid-ariaCollapse": "Réduire",
            "dxDataGrid-ariaExpand": "Etendre",
            "dxDataGrid-ariaDataGrid": "Grille",
            "dxDataGrid-ariaSearchInGrid": "Rechercher dans la grille",
            "dxDataGrid-ariaSelectAll": "Sélectionner tout",
            "dxDataGrid-ariaSelectRow": "Sélectionner ligne",
            "dxDataGrid-filterBuilderPopupTitle": "Création de filtre",
            "dxDataGrid-filterPanelCreateFilter": "Créer un filtre",
            "dxDataGrid-filterPanelClearFilter": "Supprimer",
            "dxDataGrid-filterPanelFilterEnabledHint": "Activer le filtre",
            "dxTreeList-ariaTreeList": "Liste arborescente",
            "dxTreeList-editingAddRowToNode": "Ajouter",
            "dxPager-infoText": "Page {0} sur {1} ({2} élements)",
            "dxPager-pagesCountText": "sur",
            "dxPager-pageSizesAllText": "Tous",
            "dxPivotGrid-grandTotal": "Total général",
            "dxPivotGrid-total": "Total {0}",
            "dxPivotGrid-fieldChooserTitle": "Liste des champs",
            "dxPivotGrid-showFieldChooser": "Afficher la liste des champs",
            "dxPivotGrid-expandAll": "Etendre tout",
            "dxPivotGrid-collapseAll": "Réduire tout",
            "dxPivotGrid-sortColumnBySummary": "Trier par colonne \"{0}\"",
            "dxPivotGrid-sortRowBySummary": "Trier par ligne \"{0}\"",
            "dxPivotGrid-removeAllSorting": "Supprimer les tris",
            "dxPivotGrid-dataNotAvailable": "ND",
            "dxPivotGrid-rowFields": "Lignes",
            "dxPivotGrid-columnFields": "Colonnes",
            "dxPivotGrid-dataFields": "Valeurs",
            "dxPivotGrid-filterFields": "Filtres",
            "dxPivotGrid-allFields": "Tous les champs",
            "dxPivotGrid-columnFieldArea": "Déposer les champs de colonne ici",
            "dxPivotGrid-dataFieldArea": "Déposer les champs de données ici",
            "dxPivotGrid-rowFieldArea": "Déposer les champs de ligne ici",
            "dxPivotGrid-filterFieldArea": "Déposer les champs de filtre ici",
            "dxScheduler-editorLabelTitle": "Titre",
            "dxScheduler-editorLabelStartDate": "Date de début",
            "dxScheduler-editorLabelEndDate": "Date de fin",
            "dxScheduler-editorLabelDescription": "Description",
            "dxScheduler-editorLabelRecurrence": "Récurrence",
            "dxScheduler-openAppointment": "Définir un évenement",
            "dxScheduler-recurrenceNever": "Jamais",
            "dxScheduler-recurrenceMinutely": "Minutely",
            "dxScheduler-recurrenceHourly": "Hourly",
            "dxScheduler-recurrenceDaily": "Quotidien",
            "dxScheduler-recurrenceWeekly": "Hebdomadaire",
            "dxScheduler-recurrenceMonthly": "Mensuel",
            "dxScheduler-recurrenceYearly": "Annuel",
            "dxScheduler-recurrenceRepeatEvery": "Chaque",
            "dxScheduler-recurrenceRepeatOn": "Repeat On",
            "dxScheduler-recurrenceEnd": "Jusqu'à",
            "dxScheduler-recurrenceAfter": "Après",
            "dxScheduler-recurrenceOn": "Le",
            "dxScheduler-recurrenceRepeatMinutely": "minute(s)",
            "dxScheduler-recurrenceRepeatHourly": "hour(s)",
            "dxScheduler-recurrenceRepeatDaily": "Jour(s)",
            "dxScheduler-recurrenceRepeatWeekly": "Semaine(s)",
            "dxScheduler-recurrenceRepeatMonthly": "Mois(s)",
            "dxScheduler-recurrenceRepeatYearly": "Année(s)",
            "dxScheduler-switcherDay": "Jour",
            "dxScheduler-switcherWeek": "Semaine",
            "dxScheduler-switcherWorkWeek": "Semaine de travail",
            "dxScheduler-switcherMonth": "Mois",
            "dxScheduler-switcherAgenda": "Agenda",
            "dxScheduler-switcherTimelineDay": "Timeline Jour",
            "dxScheduler-switcherTimelineWeek": "Timeline Semaine",
            "dxScheduler-switcherTimelineWorkWeek": "Timeline Semaine de travail",
            "dxScheduler-switcherTimelineMonth": "Timeline Mois",
            "dxScheduler-recurrenceRepeatOnDate": "le",
            "dxScheduler-recurrenceRepeatCount": "occurence(s)",
            "dxScheduler-allDay": "Temps plein",
            "dxScheduler-confirmRecurrenceEditMessage": "Voulez-vous éditer cet évenement ou la série entière ?",
            "dxScheduler-confirmRecurrenceDeleteMessage": "Voulez-vous supprimer cet évenement ou la série entière ?",
            "dxScheduler-confirmRecurrenceEditSeries": "Editer serie",
            "dxScheduler-confirmRecurrenceDeleteSeries": "Supprimer serie",
            "dxScheduler-confirmRecurrenceEditOccurrence": "Editer évenement",
            "dxScheduler-confirmRecurrenceDeleteOccurrence": "Supprimer évenement",
            "dxScheduler-noTimezoneTitle": "Pas de fuseau horaire",
            "dxScheduler-moreAppointments": "{0} en plus",
            "dxCalendar-todayButtonText": "Aujourd'hui",
            "dxCalendar-ariaWidgetName": "Calendrier",
            "dxColorView-ariaRed": "Rouge",
            "dxColorView-ariaGreen": "Vert",
            "dxColorView-ariaBlue": "Bleu",
            "dxColorView-ariaAlpha": "Transparence",
            "dxColorView-ariaHex": "Code couleur",
            "dxTagBox-selected": "{0} selectionnés",
            "dxTagBox-allSelected": "Tous sélectionnés ({0})",
            "dxTagBox-moreSelected": "{0} en plus",
            "vizExport-printingButtonText": "Imprimer",
            "vizExport-titleMenuText": "Exporter/Imprimer",
            "vizExport-exportButtonText": "{0} fichier",
            "dxFilterBuilder-and": "Et",
            "dxFilterBuilder-or": "Ou",
            "dxFilterBuilder-notAnd": "Non Et",
            "dxFilterBuilder-notOr": "Non Ou",
            "dxFilterBuilder-addCondition": "Ajouter une condition",
            "dxFilterBuilder-addGroup": "Ajouter un groupe",
            "dxFilterBuilder-enterValueText": "<entrer une valeur>",
            "dxFilterBuilder-filterOperationEquals": "Est égal à",
            "dxFilterBuilder-filterOperationNotEquals": "Est différent de",
            "dxFilterBuilder-filterOperationLess": "Est plus petit que",
            "dxFilterBuilder-filterOperationLessOrEquals": "Est plus petit ou égal à",
            "dxFilterBuilder-filterOperationGreater": "Est plus grand que",
            "dxFilterBuilder-filterOperationGreaterOrEquals": "Est plus grand ou égal à",
            "dxFilterBuilder-filterOperationStartsWith": "Commence par",
            "dxFilterBuilder-filterOperationContains": "Contient",
            "dxFilterBuilder-filterOperationNotContains": "Ne contient pas",
            "dxFilterBuilder-filterOperationEndsWith": "Finit par",
            "dxFilterBuilder-filterOperationIsBlank": "Est vide",
            "dxFilterBuilder-filterOperationIsNotBlank": "N'est pas vide",
            "dxFilterBuilder-filterOperationBetween": "Entre",
            "dxFilterBuilder-filterOperationAnyOf": "Est parmi",
            "dxFilterBuilder-filterOperationNoneOf": "N'est pas parmi",
            "dxHtmlEditor-dialogColorCaption": "Changer couleur police",
            "dxHtmlEditor-dialogBackgroundCaption": "Changer couleur fond",
            "dxHtmlEditor-dialogLinkCaption": "Ajouter un hyperlien",
            "dxHtmlEditor-dialogLinkUrlField": "URL",
            "dxHtmlEditor-dialogLinkTextField": "Texte",
            "dxHtmlEditor-dialogLinkTargetField": "Ouvrir le lien dans une nouvelle fenêtre",
            "dxHtmlEditor-dialogImageCaption": "Ajouter image",
            "dxHtmlEditor-dialogImageUrlField": "URL",
            "dxHtmlEditor-dialogImageAltField": "Texte alternatif",
            "dxHtmlEditor-dialogImageWidthField": "Largeur (px)",
            "dxHtmlEditor-dialogImageHeightField": "Hauteur (px)",
            "dxHtmlEditor-dialogInsertTableRowsField": "!TODO",
            "dxHtmlEditor-dialogInsertTableColumnsField": "!TODO",
            "dxHtmlEditor-dialogInsertTableCaption": "!TODO",
            "dxHtmlEditor-heading": "Titre",
            "dxHtmlEditor-normalText": "Texte normal",
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
            "dxFileManager-newDirectoryName": "Répertoire sans titre",
            "dxFileManager-rootDirectoryName": "Fichiers",
            "dxFileManager-errorNoAccess": "Accès interdit. L'opération ne peut se terminer.",
            "dxFileManager-errorDirectoryExistsFormat": "Répertoire '{0}' existe déjà.",
            "dxFileManager-errorFileExistsFormat": "Fichier '{0}' existe déjà.",
            "dxFileManager-errorFileNotFoundFormat": "Impossible de trouver le fichier '{0}.'",
            "dxFileManager-errorDirectoryNotFoundFormat": "Impossible de trouver le répertoire '{0}.'",
            "dxFileManager-errorWrongFileExtension": "Extension de fichier non permise.",
            "dxFileManager-errorMaxFileSizeExceeded": "Taille du fichier dépasse la limite maximum permise.",
            "dxFileManager-errorInvalidSymbols": "Ce nom contient des caractères invalides.",
            "dxFileManager-errorDefault": "Erreur non spécifié.",
            "dxFileManager-errorDirectoryOpenFailed": "TODO",
            "dxFileManager-commandCreate": "Nouveau répertoire",
            "dxFileManager-commandRename": "Renommer",
            "dxFileManager-commandMove": "Déplacer",
            "dxFileManager-commandCopy": "Copier",
            "dxFileManager-commandDelete": "Supprimer",
            "dxFileManager-commandDownload": "Télécharger",
            "dxFileManager-commandUpload": "Téléverser des fichiers",
            "dxFileManager-commandRefresh": "Rafraîchir",
            "dxFileManager-commandThumbnails": "Mode vignette",
            "dxFileManager-commandDetails": "Mode détails",
            "dxFileManager-commandClearSelection": "Vider sélection",
            "dxFileManager-commandShowNavPane": "TODO",
            "dxFileManager-dialogDirectoryChooserTitle": "Sélectionner répertoire de destination",
            "dxFileManager-dialogDirectoryChooserButtonText": "Sélectionner",
            "dxFileManager-dialogRenameItemTitle": "Renommer",
            "dxFileManager-dialogRenameItemButtonText": "Sauvegarder",
            "dxFileManager-dialogCreateDirectoryTitle": "Nouveau répertoire",
            "dxFileManager-dialogCreateDirectoryButtonText": "Créer",
            "dxFileManager-dialogDeleteItemTitle": "TODO",
            "dxFileManager-dialogDeleteItemButtonText": "TODO",
            "dxFileManager-dialogDeleteItemSingleItemConfirmation": "TODO",
            "dxFileManager-dialogDeleteItemMultipleItemsConfirmation": "TODO",
            "dxFileManager-editingCreateSingleItemProcessingMessage": "Créer un répertoire dans {0}",
            "dxFileManager-editingCreateSingleItemSuccessMessage": "Répertoire créé dans {0}",
            "dxFileManager-editingCreateSingleItemErrorMessage": "Répertoire n'est pas créé",
            "dxFileManager-editingCreateCommonErrorMessage": "Répertoire n'est pas créé",
            "dxFileManager-editingRenameSingleItemProcessingMessage": "Renommer un item dans {0}",
            "dxFileManager-editingRenameSingleItemSuccessMessage": "Item renommé dans {0}",
            "dxFileManager-editingRenameSingleItemErrorMessage": "Item non renommé",
            "dxFileManager-editingRenameCommonErrorMessage": "Item non renommé",
            "dxFileManager-editingDeleteSingleItemProcessingMessage": "Supprimer un item de {0}",
            "dxFileManager-editingDeleteMultipleItemsProcessingMessage": "Supprimer {0} items de {1}",
            "dxFileManager-editingDeleteSingleItemSuccessMessage": "Item supprimé de {0}",
            "dxFileManager-editingDeleteMultipleItemsSuccessMessage": "{0} items supprimés de {1}",
            "dxFileManager-editingDeleteSingleItemErrorMessage": "Item non suprimé",
            "dxFileManager-editingDeleteMultipleItemsErrorMessage": "{0} items non supprimés",
            "dxFileManager-editingDeleteCommonErrorMessage": "Des items ne sont pas supprimés",
            "dxFileManager-editingMoveSingleItemProcessingMessage": "En train de déplacer un item vers {0}",
            "dxFileManager-editingMoveMultipleItemsProcessingMessage": "En train de déplacer {0} items vers {1}",
            "dxFileManager-editingMoveSingleItemSuccessMessage": "Item déplacé vers {0}",
            "dxFileManager-editingMoveMultipleItemsSuccessMessage": "{0} items déplacés vers {1}",
            "dxFileManager-editingMoveSingleItemErrorMessage": "Item non déplacé",
            "dxFileManager-editingMoveMultipleItemsErrorMessage": "{0} items non déplacés",
            "dxFileManager-editingMoveCommonErrorMessage": "Des items ne sont pas déplacés",
            "dxFileManager-editingCopySingleItemProcessingMessage": "En train de copier un item vers {0}",
            "dxFileManager-editingCopyMultipleItemsProcessingMessage": "En train de copier {0} items vers {1}",
            "dxFileManager-editingCopySingleItemSuccessMessage": "Item copié vers {0}",
            "dxFileManager-editingCopyMultipleItemsSuccessMessage": "{0} items copiés vers {1}",
            "dxFileManager-editingCopySingleItemErrorMessage": "Item non copié",
            "dxFileManager-editingCopyMultipleItemsErrorMessage": "{0} items non copiés",
            "dxFileManager-editingCopyCommonErrorMessage": "Des items ne sont pas copiés",
            "dxFileManager-editingUploadSingleItemProcessingMessage": "En train de téléverser un item vers {0}",
            "dxFileManager-editingUploadMultipleItemsProcessingMessage": "En train de téléverser {0} items vers {1}",
            "dxFileManager-editingUploadSingleItemSuccessMessage": "Item téléversé vers {0}",
            "dxFileManager-editingUploadMultipleItemsSuccessMessage": "{0} items téléversés vers {1}",
            "dxFileManager-editingUploadSingleItemErrorMessage": "Item non téléversé",
            "dxFileManager-editingUploadMultipleItemsErrorMessage": "{0} items non téléversés",
            "dxFileManager-editingUploadCanceledMessage": "Annulé",
            "dxFileManager-listDetailsColumnCaptionName": "Nom",
            "dxFileManager-listDetailsColumnCaptionDateModified": "Date modifié",
            "dxFileManager-listDetailsColumnCaptionFileSize": "Taille de fichier",
            "dxFileManager-listThumbnailsTooltipTextSize": "Taille",
            "dxFileManager-listThumbnailsTooltipTextDateModified": "Date modifié",
            "dxFileManager-notificationProgressPanelTitle": "En cours",
            "dxFileManager-notificationProgressPanelEmptyListText": "Aucune opération",
            "dxFileManager-notificationProgressPanelOperationCanceled": "Annulé",
            "dxDiagram-categoryGeneral": "Général",
            "dxDiagram-categoryFlowchart": "Organigramme",
            "dxDiagram-categoryOrgChart": "Structure organisationnelle",
            "dxDiagram-categoryContainers": "Conteneurs",
            "dxDiagram-categoryCustom": "Personnalisé",
            "dxDiagram-commandExportToSvg": "Exporter en SVG",
            "dxDiagram-commandExportToPng": "Exporter en PNG",
            "dxDiagram-commandExportToJpg": "Exporter en JPEG",
            "dxDiagram-commandUndo": "Annuler",
            "dxDiagram-commandRedo": "Refaire",
            "dxDiagram-commandFontName": "Nom de la police",
            "dxDiagram-commandFontSize": "Taille de la police",
            "dxDiagram-commandBold": "Gras",
            "dxDiagram-commandItalic": "Italique",
            "dxDiagram-commandUnderline": "Souligner",
            "dxDiagram-commandTextColor": "Couleur texte",
            "dxDiagram-commandLineColor": "Couleur ligne",
            "dxDiagram-commandLineWidth": "TODO",
            "dxDiagram-commandLineStyle": "TODO",
            "dxDiagram-commandLineStyleSolid": "TODO",
            "dxDiagram-commandLineStyleDotted": "TODO",
            "dxDiagram-commandLineStyleDashed": "TODO",
            "dxDiagram-commandFillColor": "Couleur remplissage",
            "dxDiagram-commandAlignLeft": "Aligner à gauche",
            "dxDiagram-commandAlignCenter": "Centrer",
            "dxDiagram-commandAlignRight": "Aligner à droite",
            "dxDiagram-commandConnectorLineType": "Type de ligne de connexion",
            "dxDiagram-commandConnectorLineStraight": "Droit",
            "dxDiagram-commandConnectorLineOrthogonal": "Orthogonal",
            "dxDiagram-commandConnectorLineStart": "Début de la ligne de connexion",
            "dxDiagram-commandConnectorLineEnd": "Fin de la ligne de connexion",
            "dxDiagram-commandConnectorLineNone": "Aucun",
            "dxDiagram-commandConnectorLineArrow": "Flèche",
            "dxDiagram-commandFullscreen": "Plein écran",
            "dxDiagram-commandUnits": "Unités",
            "dxDiagram-commandPageSize": "Taille de la page",
            "dxDiagram-commandPageOrientation": "Orientation de la page",
            "dxDiagram-commandPageOrientationLandscape": "Paysage",
            "dxDiagram-commandPageOrientationPortrait": "Portrait",
            "dxDiagram-commandPageColor": "Couleur de la page",
            "dxDiagram-commandShowGrid": "Afficher la grille",
            "dxDiagram-commandSnapToGrid": "Aligner sur la grille",
            "dxDiagram-commandGridSize": "Taille de la grille",
            "dxDiagram-commandZoomLevel": "Niveau de zoom",
            "dxDiagram-commandAutoZoom": "Zoom automatique",
            "dxDiagram-commandFitToContent": "TODO",
            "dxDiagram-commandFitToWidth": "TODO",
            "dxDiagram-commandAutoZoomByContent": "TODO",
            "dxDiagram-commandAutoZoomByWidth": "TODO",
            "dxDiagram-commandSimpleView": "Vue simple",
            "dxDiagram-commandCut": "Couper",
            "dxDiagram-commandCopy": "Copier",
            "dxDiagram-commandPaste": "Coller",
            "dxDiagram-commandSelectAll": "Tout sélectionner",
            "dxDiagram-commandDelete": "Supprimer",
            "dxDiagram-commandBringToFront": "Amener au premier plan",
            "dxDiagram-commandSendToBack": "Envoyer à l'arrière",
            "dxDiagram-commandLock": "Verrouiller",
            "dxDiagram-commandUnlock": "Déverrouiller",
            "dxDiagram-commandInsertShapeImage": "Insérer une image...",
            "dxDiagram-commandEditShapeImage": "Changer image...",
            "dxDiagram-commandDeleteShapeImage": "Supprimer image",
            "dxDiagram-commandLayoutLeftToRight": "TODO",
            "dxDiagram-commandLayoutRightToLeft": "TODO",
            "dxDiagram-commandLayoutTopToBottom": "TODO",
            "dxDiagram-commandLayoutBottomToTop": "TODO",
            "dxDiagram-unitIn": "po",
            "dxDiagram-unitCm": "cm",
            "dxDiagram-unitPx": "px",
            "dxDiagram-dialogButtonOK": "OK",
            "dxDiagram-dialogButtonCancel": "Annuler",
            "dxDiagram-dialogInsertShapeImageTitle": "Insérer une image",
            "dxDiagram-dialogEditShapeImageTitle": "Changer image",
            "dxDiagram-dialogEditShapeImageSelectButton": "Sélectionner une image",
            "dxDiagram-dialogEditShapeImageLabelText": "ou déposer le fichier ici",
            "dxDiagram-uiExport": "Exporter",
            "dxDiagram-uiProperties": "Propriétés",
            "dxDiagram-uiSettings": "TODO",
            "dxDiagram-uiShowToolbox": "TODO",
            "dxDiagram-uiSearch": "TODO",
            "dxDiagram-uiStyle": "TODO",
            "dxDiagram-uiLayout": "TODO",
            "dxDiagram-uiLayoutTree": "Arbre",
            "dxDiagram-uiLayoutLayered": "Par couches",
            "dxDiagram-uiDiagram": "TODO",
            "dxDiagram-uiText": "TODO",
            "dxDiagram-uiObject": "TODO",
            "dxDiagram-uiConnector": "TODO",
            "dxDiagram-uiPage": "TODO",
            "dxDiagram-shapeText": "Texte",
            "dxDiagram-shapeRectangle": "Rectangle",
            "dxDiagram-shapeEllipse": "Ellipse",
            "dxDiagram-shapeCross": "Croix",
            "dxDiagram-shapeTriangle": "Triangle",
            "dxDiagram-shapeDiamond": "Diamant",
            "dxDiagram-shapeHeart": "Cœur",
            "dxDiagram-shapePentagon": "Pentagone",
            "dxDiagram-shapeHexagon": "Hexagone",
            "dxDiagram-shapeOctagon": "Octogone",
            "dxDiagram-shapeStar": "Étoile",
            "dxDiagram-shapeArrowLeft": "Flèche gauche",
            "dxDiagram-shapeArrowUp": "Flèche vers le haut",
            "dxDiagram-shapeArrowRight": "Flèche droite",
            "dxDiagram-shapeArrowDown": "Flèche vers le bas",
            "dxDiagram-shapeArrowUpDown": "Flèche haut bas",
            "dxDiagram-shapeArrowLeftRight": "Flèche gauche droite",
            "dxDiagram-shapeProcess": "Processus",
            "dxDiagram-shapeDecision": "Décision",
            "dxDiagram-shapeTerminator": "Terminator",
            "dxDiagram-shapePredefinedProcess": "Processus prédéfini",
            "dxDiagram-shapeDocument": "Document",
            "dxDiagram-shapeMultipleDocuments": "Documents multiples",
            "dxDiagram-shapeManualInput": "Entrée manuelle",
            "dxDiagram-shapePreparation": "Préparation",
            "dxDiagram-shapeData": "Données",
            "dxDiagram-shapeDatabase": "Base de données",
            "dxDiagram-shapeHardDisk": "Disque dur",
            "dxDiagram-shapeInternalStorage": "Stockage interne",
            "dxDiagram-shapePaperTape": "Bande de papier",
            "dxDiagram-shapeManualOperation": "Opération manuelle",
            "dxDiagram-shapeDelay": "Retard",
            "dxDiagram-shapeStoredData": "Les données stockées",
            "dxDiagram-shapeDisplay": "Afficher",
            "dxDiagram-shapeMerge": "Fusionner",
            "dxDiagram-shapeConnector": "Connecteur",
            "dxDiagram-shapeOr": "Ou",
            "dxDiagram-shapeSummingJunction": "Jonction de sommation",
            "dxDiagram-shapeContainerDefaultText": "Récipient",
            "dxDiagram-shapeVerticalContainer": "Conteneur vertical",
            "dxDiagram-shapeHorizontalContainer": "Conteneur horizontal",
            "dxDiagram-shapeCardDefaultText": "Nom de la personne",
            "dxDiagram-shapeCardWithImageOnLeft": "Carte avec image à gauche",
            "dxDiagram-shapeCardWithImageOnTop": "Carte avec image sur le dessus",
            "dxDiagram-shapeCardWithImageOnRight": "Carte avec image à droite",
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
