/*!
* DevExtreme (dx.messages.ja.js)
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
        "ja": {
            "Yes": "はい",
            "No": "いいえ",
            "Cancel": "キャンセル",
            "Clear": "クリア",
            "Done": "完了",
            "Loading": "読み込み中…",
            "Select": "選択…",
            "Search": "検索",
            "Back": "戻る",
            "OK": "OK",
            "dxCollectionWidget-noDataText": "表示するデータがありません。",
            "dxDropDownEditor-selectLabel": "選択",
            "validation-required": "必須",
            "validation-required-formatted": "{0} は必須です。",
            "validation-numeric": "数値を指定してください。",
            "validation-numeric-formatted": "{0} は数値でなければいけません。",
            "validation-range": "値が範囲外です",
            "validation-range-formatted": "{0} の長さが正しくありません。",
            "validation-stringLength": "値の長さが正しくありません。",
            "validation-stringLength-formatted": "{0} の長さが正しくありません",
            "validation-custom": "値が無効です。",
            "validation-custom-formatted": "{0} が無効です。",
            "validation-async": "値が無効です。",
            "validation-async-formatted": "{0} が無効です。",
            "validation-compare": "値が一致しません。",
            "validation-compare-formatted": " {0} が一致しません。",
            "validation-pattern": "値がパターンと一致しません",
            "validation-pattern-formatted": "{0} がパターンと一致しません",
            "validation-email": "電子メール アドレスが無効です。",
            "validation-email-formatted": "{0} が無効です。",
            "validation-mask": "値が無効です。",
            "dxLookup-searchPlaceholder": "最低文字数: {0}",
            "dxList-pullingDownText": "引っ張って更新…",
            "dxList-pulledDownText": "指を離して更新…",
            "dxList-refreshingText": "更新中…",
            "dxList-pageLoadingText": "読み込み中…",
            "dxList-nextButtonText": "もっと表示する",
            "dxList-selectAll": "すべてを選択",
            "dxListEditDecorator-delete": "削除",
            "dxListEditDecorator-more": "もっと",
            "dxScrollView-pullingDownText": "引っ張って更新…",
            "dxScrollView-pulledDownText": "指を離して更新…",
            "dxScrollView-refreshingText": "更新中…",
            "dxScrollView-reachBottomText": "読み込み中",
            "dxDateBox-simulatedDataPickerTitleTime": "時刻を選択してください。",
            "dxDateBox-simulatedDataPickerTitleDate": "日付を選択してください。",
            "dxDateBox-simulatedDataPickerTitleDateTime": "日付と時刻を選択してください。",
            "dxDateBox-validation-datetime": "日付または時刻を指定してください。",
            "dxFileUploader-selectFile": "ファイルを選択",
            "dxFileUploader-dropFile": "またはファイルをこちらにドロップしてください。",
            "dxFileUploader-bytes": "バイト",
            "dxFileUploader-kb": "kb",
            "dxFileUploader-Mb": "Mb",
            "dxFileUploader-Gb": "Gb",
            "dxFileUploader-upload": "アップロード",
            "dxFileUploader-uploaded": "アップロード済み",
            "dxFileUploader-readyToUpload": "アップロードの準備中",
            "dxFileUploader-uploadAbortedMessage": "アップロードがキャンセルされました",
            "dxFileUploader-uploadFailedMessage": "アップロードに失敗しました",
            "dxFileUploader-invalidFileExtension": "このファイルの種類を使用できません",
            "dxFileUploader-invalidMaxFileSize": "ファイルが大きすぎます",
            "dxFileUploader-invalidMinFileSize": "ファイルが小さすぎます",
            "dxRangeSlider-ariaFrom": "から",
            "dxRangeSlider-ariaTill": "まで",
            "dxSwitch-switchedOnText": "オン",
            "dxSwitch-switchedOffText": "オフ",
            "dxForm-optionalMark": "任意",
            "dxForm-requiredMessage": "{0} は必須フィールドです",
            "dxNumberBox-invalidValueMessage": "数値を指定してください。",
            "dxNumberBox-noDataText": "データがありません",
            "dxDataGrid-columnChooserTitle": "列の選択",
            "dxDataGrid-columnChooserEmptyText": "隠したい列のヘッダーをここにドラッグしてください。",
            "dxDataGrid-groupContinuesMessage": "次ページに続く",
            "dxDataGrid-groupContinuedMessage": "前ページから続く",
            "dxDataGrid-groupHeaderText": "この列でグループ化",
            "dxDataGrid-ungroupHeaderText": "グループ解除",
            "dxDataGrid-ungroupAllText": "すべてのグループを解除",
            "dxDataGrid-editingEditRow": "編集",
            "dxDataGrid-editingSaveRowChanges": "保存",
            "dxDataGrid-editingCancelRowChanges": "キャンセル",
            "dxDataGrid-editingDeleteRow": "削除",
            "dxDataGrid-editingUndeleteRow": "復元",
            "dxDataGrid-editingConfirmDeleteMessage": "このレコードを削 除してもよろしいですか?",
            "dxDataGrid-validationCancelChanges": "変更をキャンセル",
            "dxDataGrid-groupPanelEmptyText": "グループ化したい列のヘッダーをここにドラッグしてください。",
            "dxDataGrid-noDataText": "データがありません",
            "dxDataGrid-searchPanelPlaceholder": "検索",
            "dxDataGrid-filterRowShowAllText": "(すべて)",
            "dxDataGrid-filterRowResetOperationText": "リセット",
            "dxDataGrid-filterRowOperationEquals": "指定の値に等しい",
            "dxDataGrid-filterRowOperationNotEquals": "指定の値に等しくない",
            "dxDataGrid-filterRowOperationLess": "指定の値より小さい",
            "dxDataGrid-filterRowOperationLessOrEquals": "指定の値以下",
            "dxDataGrid-filterRowOperationGreater": "指定の値より大きい",
            "dxDataGrid-filterRowOperationGreaterOrEquals": "指定の値以上",
            "dxDataGrid-filterRowOperationStartsWith": "指定の値で始まる",
            "dxDataGrid-filterRowOperationContains": "指定の値を含む",
            "dxDataGrid-filterRowOperationNotContains": "指定の値を含まない",
            "dxDataGrid-filterRowOperationEndsWith": "指定の値で終わる",
            "dxDataGrid-filterRowOperationBetween": "～から～の間",
            "dxDataGrid-filterRowOperationBetweenStartText": "開始値",
            "dxDataGrid-filterRowOperationBetweenEndText": "終了値",
            "dxDataGrid-applyFilterText": "フィルターを適用",
            "dxDataGrid-trueText": "true",
            "dxDataGrid-falseText": "false",
            "dxDataGrid-sortingAscendingText": "昇順に並べ替え",
            "dxDataGrid-sortingDescendingText": "降順に並べ替え",
            "dxDataGrid-sortingClearText": "並べ替えをクリア",
            "dxDataGrid-editingSaveAllChanges": "変更を保存",
            "dxDataGrid-editingCancelAllChanges": "変更を破棄",
            "dxDataGrid-editingAddRow": "行を追加",
            "dxDataGrid-summaryMin": "最小: {0}",
            "dxDataGrid-summaryMinOtherColumn": "{1} の最小は {0}",
            "dxDataGrid-summaryMax": "最大: {0}",
            "dxDataGrid-summaryMaxOtherColumn": "{1} の最小は {0}",
            "dxDataGrid-summaryAvg": "平均: {0}",
            "dxDataGrid-summaryAvgOtherColumn": "{1} の平均は {0}",
            "dxDataGrid-summarySum": "合計: {0}",
            "dxDataGrid-summarySumOtherColumn": "{1} の合計は {0}",
            "dxDataGrid-summaryCount": "総数: {0}",
            "dxDataGrid-columnFixingFix": "固定",
            "dxDataGrid-columnFixingUnfix": "固定の解除",
            "dxDataGrid-columnFixingLeftPosition": "左に固定",
            "dxDataGrid-columnFixingRightPosition": "右に固定",
            "dxDataGrid-exportTo": "エクスポート",
            "dxDataGrid-exportToExcel": "Excel ファイルにエクスポート",
            "dxDataGrid-exporting": "エクスポート...",
            "dxDataGrid-excelFormat": "Excel ファイル",
            "dxDataGrid-selectedRows": "選択された行",
            "dxDataGrid-exportAll": "すべてのデータをエクスポート",
            "dxDataGrid-exportSelectedRows": "選択された行をエクスポート",
            "dxDataGrid-headerFilterEmptyValue": "(空白)",
            "dxDataGrid-headerFilterOK": "OK",
            "dxDataGrid-headerFilterCancel": "キャンセル",
            "dxDataGrid-ariaAdaptiveCollapse": "追加データを非表示にする",
            "dxDataGrid-ariaAdaptiveExpand": "追加データを表示する",
            "dxDataGrid-ariaColumn": "列",
            "dxDataGrid-ariaValue": "値",
            "dxDataGrid-ariaFilterCell": "フィルター セル",
            "dxDataGrid-ariaCollapse": "折りたたむ",
            "dxDataGrid-ariaExpand": "展開",
            "dxDataGrid-ariaDataGrid": "データ グリッド",
            "dxDataGrid-ariaSearchInGrid": "データ グリッド内で検索",
            "dxDataGrid-ariaSelectAll": "すべてを選択",
            "dxDataGrid-ariaSelectRow": "行の選択",
            "dxDataGrid-ariaToolbar": "データ グリッドのツール バー",
            "dxDataGrid-filterBuilderPopupTitle": "フィルター ビルダー",
            "dxDataGrid-filterPanelCreateFilter": "フィルターの作成",
            "dxDataGrid-filterPanelClearFilter": "クリア",
            "dxDataGrid-filterPanelFilterEnabledHint": "フィルターの有効化",
            "dxTreeList-ariaTreeList": "ツリー リスト",
            "dxTreeList-ariaSearchInGrid": "ツリー リスト内を検索する",
            "dxTreeList-ariaToolbar": "ツリー リストのツール バー",
            "dxTreeList-editingAddRowToNode": "追加",
            "dxPager-infoText": "ページ {0} / {1} ({2} アイテム)",
            "dxPager-pagesCountText": "/",
            "dxPager-pageSizesAllText": "すべて",
            "dxPivotGrid-grandTotal": "総計",
            "dxPivotGrid-total": "{0} 合計",
            "dxPivotGrid-fieldChooserTitle": "フィールドの選択",
            "dxPivotGrid-showFieldChooser": "フィールドの選択を表示",
            "dxPivotGrid-expandAll": "すべて展開",
            "dxPivotGrid-collapseAll": "すべて折りたたむ",
            "dxPivotGrid-sortColumnBySummary": "この列で \"{0}\" を並べ替え",
            "dxPivotGrid-sortRowBySummary": "この行で {0} を並べ替え",
            "dxPivotGrid-removeAllSorting": "すべての並べ替えを削除",
            "dxPivotGrid-dataNotAvailable": "N/A",
            "dxPivotGrid-rowFields": "行のフィールド",
            "dxPivotGrid-columnFields": "列のフィールド",
            "dxPivotGrid-dataFields": "データ  フィールド",
            "dxPivotGrid-filterFields": "フィルター フィールド",
            "dxPivotGrid-allFields": "すべてのフィールド",
            "dxPivotGrid-columnFieldArea": "列フィールドをこちらへドラッグ＆ドロップ",
            "dxPivotGrid-dataFieldArea": "データ フィールドをこちらへドラッグ＆ドロップ",
            "dxPivotGrid-rowFieldArea": "行フィールドをこちらへドラッグ＆ドロップ",
            "dxPivotGrid-filterFieldArea": "フィルター フィールドをこちらへドラッグ＆ドロップ",
            "dxScheduler-editorLabelTitle": "件名",
            "dxScheduler-editorLabelStartDate": "開始時刻",
            "dxScheduler-editorLabelEndDate": "終了時刻",
            "dxScheduler-editorLabelDescription": "説明",
            "dxScheduler-editorLabelRecurrence": "繰り返し",
            "dxScheduler-openAppointment": "オープンの予定",
            "dxScheduler-recurrenceNever": "無効",
            "dxScheduler-recurrenceMinutely": "分ごと",
            "dxScheduler-recurrenceHourly": "1時間ごと",
            "dxScheduler-recurrenceDaily": "日間毎日",
            "dxScheduler-recurrenceWeekly": "毎週",
            "dxScheduler-recurrenceMonthly": "毎月",
            "dxScheduler-recurrenceYearly": "毎年",
            "dxScheduler-recurrenceRepeatEvery": "繰り返し間隔",
            "dxScheduler-recurrenceRepeatOn": "この日に繰り返す",
            "dxScheduler-recurrenceEnd": "リピートの終了日",
            "dxScheduler-recurrenceAfter": "次の発生回数後に終了",
            "dxScheduler-recurrenceOn": "リピート解除の日付",
            "dxScheduler-recurrenceRepeatMinutely": "分ごと",
            "dxScheduler-recurrenceRepeatHourly": "時間ごと",
            "dxScheduler-recurrenceRepeatDaily": "日後",
            "dxScheduler-recurrenceRepeatWeekly": "週間後",
            "dxScheduler-recurrenceRepeatMonthly": "カ月後",
            "dxScheduler-recurrenceRepeatYearly": "年後",
            "dxScheduler-switcherDay": "日ビュー",
            "dxScheduler-switcherWeek": "週ビュー",
            "dxScheduler-switcherWorkWeek": "稼働週ビュー",
            "dxScheduler-switcherMonth": "月ビュー",
            "dxScheduler-switcherTimelineDay": "タイムライン 日ビュー",
            "dxScheduler-switcherTimelineWeek": "タイムライン 週ビュー",
            "dxScheduler-switcherTimelineWorkWeek": "タイムライン 稼働週ビュー",
            "dxScheduler-switcherTimelineMonth": "タイムライン 月ビュー",
            "dxScheduler-switcherAgenda": "予定一覧",
            "dxScheduler-recurrenceRepeatOnDate": "次の日付に終了",
            "dxScheduler-recurrenceRepeatCount": "出現",
            "dxScheduler-allDay": "終日イベント",
            "dxScheduler-confirmRecurrenceEditMessage": "この予定のみを編集しますか、または定期的な予定を編集しますか？",
            "dxScheduler-confirmRecurrenceDeleteMessage": "この予定のみを削除しますか、または定期的な予定を削除しますか？",
            "dxScheduler-confirmRecurrenceEditSeries": "定期的なアイテムを編集",
            "dxScheduler-confirmRecurrenceDeleteSeries": "定期的なアイテムを削除",
            "dxScheduler-confirmRecurrenceEditOccurrence": "予定を編集",
            "dxScheduler-confirmRecurrenceDeleteOccurrence": "予定を削除",
            "dxScheduler-noTimezoneTitle": "時間帯なし",
            "dxScheduler-moreAppointments": "その他 {0} つ選択",
            "dxCalendar-todayButtonText": "今日",
            "dxCalendar-ariaWidgetName": "カレンダー",
            "dxColorView-ariaRed": "赤",
            "dxColorView-ariaGreen": "緑",
            "dxColorView-ariaBlue": "青",
            "dxColorView-ariaAlpha": "透明度",
            "dxColorView-ariaHex": "色コード",
            "dxTagBox-selected": "{0} つ選択済み",
            "dxTagBox-allSelected": "すべて選択済み ({0})",
            "dxTagBox-moreSelected": "その他 {0} つ選択",
            "vizExport-printingButtonText": "印刷",
            "vizExport-titleMenuText": "エクスポート / 印刷",
            "vizExport-exportButtonText": "{0} ファイル",
            "dxFilterBuilder-and": "And",
            "dxFilterBuilder-or": "Or",
            "dxFilterBuilder-notAnd": "Not And",
            "dxFilterBuilder-notOr": "Not Or",
            "dxFilterBuilder-addCondition": "条件の追加",
            "dxFilterBuilder-addGroup": "グループの追加",
            "dxFilterBuilder-enterValueText": "値を入力",
            "dxFilterBuilder-filterOperationEquals": "指定の値に等しい",
            "dxFilterBuilder-filterOperationNotEquals": "指定の値に等しくない",
            "dxFilterBuilder-filterOperationLess": "指定の値より小さい",
            "dxFilterBuilder-filterOperationLessOrEquals": "指定の値以下",
            "dxFilterBuilder-filterOperationGreater": "指定の値より大きい",
            "dxFilterBuilder-filterOperationGreaterOrEquals": "指定の値以上",
            "dxFilterBuilder-filterOperationStartsWith": "指定の値で始まる",
            "dxFilterBuilder-filterOperationContains": "指定の値を含む",
            "dxFilterBuilder-filterOperationNotContains": "指定の値を含まない",
            "dxFilterBuilder-filterOperationEndsWith": "指定の値で終わる",
            "dxFilterBuilder-filterOperationIsBlank": "空白である",
            "dxFilterBuilder-filterOperationIsNotBlank": "空白ではない",
            "dxFilterBuilder-filterOperationBetween": "～から～の間",
            "dxFilterBuilder-filterOperationAnyOf": "どちらかを含む",
            "dxFilterBuilder-filterOperationNoneOf": "すべて含まない",
            "dxHtmlEditor-dialogColorCaption": "フォントの色を変更",
            "dxHtmlEditor-dialogBackgroundCaption": "背景色を変更",
            "dxHtmlEditor-dialogLinkCaption": "リンクの追加",
            "dxHtmlEditor-dialogLinkUrlField": "URL",
            "dxHtmlEditor-dialogLinkTextField": "テキスト",
            "dxHtmlEditor-dialogLinkTargetField": "リンクを新しいウィンドウで開く",
            "dxHtmlEditor-dialogImageCaption": "画像の追加",
            "dxHtmlEditor-dialogImageUrlField": "URL",
            "dxHtmlEditor-dialogImageAltField": "代替テキスト",
            "dxHtmlEditor-dialogImageWidthField": "幅 (px)",
            "dxHtmlEditor-dialogImageHeightField": "高さ (px)",
            "dxHtmlEditor-dialogInsertTableRowsField": "行",
            "dxHtmlEditor-dialogInsertTableColumnsField": "列",
            "dxHtmlEditor-dialogInsertTableCaption": "テーブルの挿入",
            "dxHtmlEditor-heading": "見出し",
            "dxHtmlEditor-normalText": "標準テキスト",
            "dxHtmlEditor-background": "背景色",
            "dxHtmlEditor-bold": "太字",
            "dxHtmlEditor-color": "フォントの色",
            "dxHtmlEditor-font": "フォント",
            "dxHtmlEditor-italic": "斜体",
            "dxHtmlEditor-link": "リンクの追加",
            "dxHtmlEditor-image": "画像の追加",
            "dxHtmlEditor-size": "フォント サイズ",
            "dxHtmlEditor-strike": "取り消し線",
            "dxHtmlEditor-subscript": "下付き文字",
            "dxHtmlEditor-superscript": "上付き文字",
            "dxHtmlEditor-underline": "下線",
            "dxHtmlEditor-blockquote": "ブロック引用",
            "dxHtmlEditor-header": "ヘッダー",
            "dxHtmlEditor-increaseIndent": "インデントを増やす",
            "dxHtmlEditor-decreaseIndent": "インデントを減らす",
            "dxHtmlEditor-orderedList": "番号付きリスト",
            "dxHtmlEditor-bulletList": "箇条書きリスト",
            "dxHtmlEditor-alignLeft": "左揃え",
            "dxHtmlEditor-alignCenter": "中央揃え",
            "dxHtmlEditor-alignRight": "右揃え",
            "dxHtmlEditor-alignJustify": "両端揃え",
            "dxHtmlEditor-codeBlock": "コード ブロック",
            "dxHtmlEditor-variable": "変数の追加",
            "dxHtmlEditor-undo": "元に戻す",
            "dxHtmlEditor-redo": "やり直す",
            "dxHtmlEditor-clear": "書式のクリア",
            "dxHtmlEditor-insertTable": "テーブルの挿入",
            "dxHtmlEditor-insertRowAbove": "上に行を挿入",
            "dxHtmlEditor-insertRowBelow": "下に行を挿入",
            "dxHtmlEditor-insertColumnLeft": "左に列を挿入",
            "dxHtmlEditor-insertColumnRight": "右に列を挿入",
            "dxHtmlEditor-deleteColumn": "列の削除",
            "dxHtmlEditor-deleteRow": "行の削除",
            "dxHtmlEditor-deleteTable": "テーブルの削除",
            "dxHtmlEditor-list": "リスト",
            "dxHtmlEditor-ordered": "番号付き",
            "dxHtmlEditor-bullet": "箇条書き",
            "dxHtmlEditor-align": "配置",
            "dxHtmlEditor-center": "中央",
            "dxHtmlEditor-left": "左",
            "dxHtmlEditor-right": "右",
            "dxHtmlEditor-indent": "インデント",
            "dxHtmlEditor-justify": "両端揃え",
            "dxFileManager-newDirectoryName": "無題のフォルダ",
            "dxFileManager-rootDirectoryName": "ファイル",
            "dxFileManager-errorNoAccess": "アクセスが拒否されました。操作を完了できません。",
            "dxFileManager-errorDirectoryExistsFormat": "ディレクトリ {0} は既に存在します。",
            "dxFileManager-errorFileExistsFormat": "ファイル {0} は既に存在します。",
            "dxFileManager-errorFileNotFoundFormat": "ファイル {0} が見つかりません。",
            "dxFileManager-errorDirectoryNotFoundFormat": "ディレクトリ '{0}' が見つかりません。",
            "dxFileManager-errorWrongFileExtension": "拡張子が許可されていません。",
            "dxFileManager-errorMaxFileSizeExceeded": "ファイルのサイズが最大許容サイズを超えています。",
            "dxFileManager-errorInvalidSymbols": "名前に無効な文字が含まれています。",
            "dxFileManager-errorDefault": "特定できないエラー",
            "dxFileManager-errorDirectoryOpenFailed": "ディレクトリを開けません",
            "dxFileManager-commandCreate": "新しいディレクトリ",
            "dxFileManager-commandRename": "名前の変更",
            "dxFileManager-commandMove": "移動先",
            "dxFileManager-commandCopy": "コピー先",
            "dxFileManager-commandDelete": "削除",
            "dxFileManager-commandDownload": "ダウンロード",
            "dxFileManager-commandUpload": "ファイルのアップロード",
            "dxFileManager-commandRefresh": "更新",
            "dxFileManager-commandThumbnails": "縮小表示",
            "dxFileManager-commandDetails": "詳細表示",
            "dxFileManager-commandClearSelection": "選択のクリア",
            "dxFileManager-commandShowNavPane": "ナビゲーション ウィンドウの切り替え",
            "dxFileManager-dialogDirectoryChooserMoveTitle": "移動先",
            "dxFileManager-dialogDirectoryChooserMoveButtonText": "移動",
            "dxFileManager-dialogDirectoryChooserCopyTitle": "コピー先",
            "dxFileManager-dialogDirectoryChooserCopyButtonText": "コピー",
            "dxFileManager-dialogRenameItemTitle": "名前の変更",
            "dxFileManager-dialogRenameItemButtonText": "保存",
            "dxFileManager-dialogCreateDirectoryTitle": "新しいディレクトリ",
            "dxFileManager-dialogCreateDirectoryButtonText": "作成",
            "dxFileManager-dialogDeleteItemTitle": "削除",
            "dxFileManager-dialogDeleteItemButtonText": "削除",
            "dxFileManager-dialogDeleteItemSingleItemConfirmation": "{0} を削除しますか?",
            "dxFileManager-dialogDeleteItemMultipleItemsConfirmation": "{0} アイテムを削除しますか?",
            "dxFileManager-dialogButtonCancel": "キャンセル",
            "dxFileManager-editingCreateSingleItemProcessingMessage": "{0} 内にディレクトリを作成中",
            "dxFileManager-editingCreateSingleItemSuccessMessage": "{0} 内にディレクトリを作成しました",
            "dxFileManager-editingCreateSingleItemErrorMessage": "ディレクトリが作成されませんでした",
            "dxFileManager-editingCreateCommonErrorMessage": "ディレクトリが作成されませんでした",
            "dxFileManager-editingRenameSingleItemProcessingMessage": "{0} 内に項目の名前を変更中",
            "dxFileManager-editingRenameSingleItemSuccessMessage": "{0} 内に項目の名前を変更しました",
            "dxFileManager-editingRenameSingleItemErrorMessage": "項目の名前が変更されませんでした",
            "dxFileManager-editingRenameCommonErrorMessage": "項目の名前が変更されませんでした",
            "dxFileManager-editingDeleteSingleItemProcessingMessage": "{0} から項目を削除中",
            "dxFileManager-editingDeleteMultipleItemsProcessingMessage": "{1} から {0} 項目を削除中",
            "dxFileManager-editingDeleteSingleItemSuccessMessage": "{0} から項目を削除しました",
            "dxFileManager-editingDeleteMultipleItemsSuccessMessage": "{1} から {0} 項目を削除しました",
            "dxFileManager-editingDeleteSingleItemErrorMessage": "項目が削除されませんでした",
            "dxFileManager-editingDeleteMultipleItemsErrorMessage": "{0} 項目が削除されませんでした",
            "dxFileManager-editingDeleteCommonErrorMessage": "一部の項目が削除されませんでした",
            "dxFileManager-editingMoveSingleItemProcessingMessage": "項目を {0} に移動中",
            "dxFileManager-editingMoveMultipleItemsProcessingMessage": "{0} 項目を {1} に移動中",
            "dxFileManager-editingMoveSingleItemSuccessMessage": "項目を {0} に移動しました",
            "dxFileManager-editingMoveMultipleItemsSuccessMessage": "{0} 項目を {1} に移動しました",
            "dxFileManager-editingMoveSingleItemErrorMessage": "項目が移動されませんでした",
            "dxFileManager-editingMoveMultipleItemsErrorMessage": "{0} 項目が移動されませんでした",
            "dxFileManager-editingMoveCommonErrorMessage": "一部の項目が移動されませんでした",
            "dxFileManager-editingCopySingleItemProcessingMessage": "項目を {0} にコピー中",
            "dxFileManager-editingCopyMultipleItemsProcessingMessage": "{0} 項目を {1} にコピー中",
            "dxFileManager-editingCopySingleItemSuccessMessage": "項目を {0} にコピーしました",
            "dxFileManager-editingCopyMultipleItemsSuccessMessage": "{0} 項目を {1} にコピーしました",
            "dxFileManager-editingCopySingleItemErrorMessage": "項目がコピーされませんでした",
            "dxFileManager-editingCopyMultipleItemsErrorMessage": "{0} 項目がコピーされませんでした",
            "dxFileManager-editingCopyCommonErrorMessage": "一部の項目がコピーされませんでした",
            "dxFileManager-editingUploadSingleItemProcessingMessage": "項目を {0} にアップロード中",
            "dxFileManager-editingUploadMultipleItemsProcessingMessage": "{0} 項目を {1} にアップロード中",
            "dxFileManager-editingUploadSingleItemSuccessMessage": "項目を {0} にアップロードしました",
            "dxFileManager-editingUploadMultipleItemsSuccessMessage": "{0} 項目を {1} にアップロードしました",
            "dxFileManager-editingUploadSingleItemErrorMessage": "項目がアップロードされませんでした",
            "dxFileManager-editingUploadMultipleItemsErrorMessage": "{0} 項目がアップロードされませんでした",
            "dxFileManager-editingUploadCanceledMessage": "キャンセルしました",
            "dxFileManager-listDetailsColumnCaptionName": "ファイル名",
            "dxFileManager-listDetailsColumnCaptionDateModified": "更新日",
            "dxFileManager-listDetailsColumnCaptionFileSize": "ファイル サイズ",
            "dxFileManager-listThumbnailsTooltipTextSize": "サイズ",
            "dxFileManager-listThumbnailsTooltipTextDateModified": "更新日",
            "dxFileManager-notificationProgressPanelTitle": "進行状況",
            "dxFileManager-notificationProgressPanelEmptyListText": "操作がありません",
            "dxFileManager-notificationProgressPanelOperationCanceled": "キャンセルしました",
            "dxDiagram-categoryGeneral": "一般",
            "dxDiagram-categoryFlowchart": "フローチャート",
            "dxDiagram-categoryOrgChart": "組織のフロー・チャート",
            "dxDiagram-categoryContainers": "コンテナー",
            "dxDiagram-categoryCustom": "カスタム",
            "dxDiagram-commandExportToSvg": "SVG にエクスポート",
            "dxDiagram-commandExportToPng": "PNG にエクスポート",
            "dxDiagram-commandExportToJpg": "　JPEG にエクスポート",
            "dxDiagram-commandUndo": "元に戻す",
            "dxDiagram-commandRedo": "やり直す",
            "dxDiagram-commandFontName": "フォント名",
            "dxDiagram-commandFontSize": "フォント サイズ",
            "dxDiagram-commandBold": "太字",
            "dxDiagram-commandItalic": "斜体",
            "dxDiagram-commandUnderline": "下線",
            "dxDiagram-commandTextColor": "文字の色",
            "dxDiagram-commandLineColor": "線の色",
            "dxDiagram-commandLineWidth": "線の幅",
            "dxDiagram-commandLineStyle": "線のスタイル",
            "dxDiagram-commandLineStyleSolid": "実線",
            "dxDiagram-commandLineStyleDotted": "点線",
            "dxDiagram-commandLineStyleDashed": "破線",
            "dxDiagram-commandFillColor": "塗りつぶしの色",
            "dxDiagram-commandAlignLeft": "左揃え",
            "dxDiagram-commandAlignCenter": "中央揃え",
            "dxDiagram-commandAlignRight": "右揃え",
            "dxDiagram-commandConnectorLineType": "コネクタ ラインのタイプ",
            "dxDiagram-commandConnectorLineStraight": "直線",
            "dxDiagram-commandConnectorLineOrthogonal": "直交",
            "dxDiagram-commandConnectorLineStart": "コネクタ ラインの開始",
            "dxDiagram-commandConnectorLineEnd": "コネクタ ラインの終了",
            "dxDiagram-commandConnectorLineNone": "なし",
            "dxDiagram-commandConnectorLineArrow": "矢印",
            "dxDiagram-commandFullscreen": "全画面表示",
            "dxDiagram-commandUnits": "単位",
            "dxDiagram-commandPageSize": "ページ サイズ",
            "dxDiagram-commandPageOrientation": "ページの向き",
            "dxDiagram-commandPageOrientationLandscape": "横",
            "dxDiagram-commandPageOrientationPortrait": "縦",
            "dxDiagram-commandPageColor": "ページの色",
            "dxDiagram-commandShowGrid": "グリッドの表示",
            "dxDiagram-commandSnapToGrid": "グリッドに合わせる",
            "dxDiagram-commandGridSize": "グリッド サイズ",
            "dxDiagram-commandZoomLevel": "ズームのレベル",
            "dxDiagram-commandAutoZoom": "自動ズーム",
            "dxDiagram-commandFitToContent": "コンテンツに合わせる",
            "dxDiagram-commandFitToWidth": "幅に合わせる",
            "dxDiagram-commandAutoZoomByContent": "コンテンツによる自動ズーム",
            "dxDiagram-commandAutoZoomByWidth": "幅による自動ズーム",
            "dxDiagram-commandSimpleView": "簡易ビュー",
            "dxDiagram-commandCut": "切り取り",
            "dxDiagram-commandCopy": "コピー",
            "dxDiagram-commandPaste": "貼り付け",
            "dxDiagram-commandSelectAll": "すべて選択",
            "dxDiagram-commandDelete": "削除",
            "dxDiagram-commandBringToFront": "最前面へ移動",
            "dxDiagram-commandSendToBack": "最背面へ移動",
            "dxDiagram-commandLock": "ロック",
            "dxDiagram-commandUnlock": "ロック解除",
            "dxDiagram-commandInsertShapeImage": "画像の挿入...",
            "dxDiagram-commandEditShapeImage": "画像の変更...",
            "dxDiagram-commandDeleteShapeImage": "画像の削除",
            "dxDiagram-commandLayoutLeftToRight": "左から右へ",
            "dxDiagram-commandLayoutRightToLeft": "右から左へ",
            "dxDiagram-commandLayoutTopToBottom": "上から下へ",
            "dxDiagram-commandLayoutBottomToTop": "下から上へ",
            "dxDiagram-unitIn": "in",
            "dxDiagram-unitCm": "cm",
            "dxDiagram-unitPx": "px",
            "dxDiagram-dialogButtonOK": "OK",
            "dxDiagram-dialogButtonCancel": "キャンセル",
            "dxDiagram-dialogInsertShapeImageTitle": "画像の挿入",
            "dxDiagram-dialogEditShapeImageTitle": "画像の変更",
            "dxDiagram-dialogEditShapeImageSelectButton": "画像の選択",
            "dxDiagram-dialogEditShapeImageLabelText": "またはファイルをここにドロップしてください",
            "dxDiagram-uiExport": "エクスポート",
            "dxDiagram-uiProperties": "プロパティ",
            "dxDiagram-uiSettings": "設定",
            "dxDiagram-uiShowToolbox": "ツールボックス​​の表示",
            "dxDiagram-uiSearch": "検索",
            "dxDiagram-uiStyle": "スタイル",
            "dxDiagram-uiLayout": "レイアウト",
            "dxDiagram-uiLayoutTree": "ツリー",
            "dxDiagram-uiLayoutLayered": "階層",
            "dxDiagram-uiDiagram": "図",
            "dxDiagram-uiText": "テキスト",
            "dxDiagram-uiObject": "オブジェクト",
            "dxDiagram-uiConnector": "コネクタ",
            "dxDiagram-uiPage": "ページ",
            "dxDiagram-shapeText": "テキスト",
            "dxDiagram-shapeRectangle": "長方形",
            "dxDiagram-shapeEllipse": "楕円",
            "dxDiagram-shapeCross": "十字形",
            "dxDiagram-shapeTriangle": "三角形",
            "dxDiagram-shapeDiamond": "ひし形",
            "dxDiagram-shapeHeart": "ハート",
            "dxDiagram-shapePentagon": "五角形",
            "dxDiagram-shapeHexagon": "六角形",
            "dxDiagram-shapeOctagon": "八角形",
            "dxDiagram-shapeStar": "星",
            "dxDiagram-shapeArrowLeft": "左矢印",
            "dxDiagram-shapeArrowUp": "上矢印",
            "dxDiagram-shapeArrowRight": "右矢印",
            "dxDiagram-shapeArrowDown": "下矢印",
            "dxDiagram-shapeArrowUpDown": "上下矢印",
            "dxDiagram-shapeArrowLeftRight": "左右矢印",
            "dxDiagram-shapeProcess": "処理",
            "dxDiagram-shapeDecision": "判断",
            "dxDiagram-shapeTerminator": "端子",
            "dxDiagram-shapePredefinedProcess": "定義済みの処理",
            "dxDiagram-shapeDocument": "ドキュメント",
            "dxDiagram-shapeMultipleDocuments": "複数のドキュメント",
            "dxDiagram-shapeManualInput": "手操作入力",
            "dxDiagram-shapePreparation": "準備",
            "dxDiagram-shapeData": "データ",
            "dxDiagram-shapeDatabase": "データベース",
            "dxDiagram-shapeHardDisk": "ハード ディスク",
            "dxDiagram-shapeInternalStorage": "内部記憶",
            "dxDiagram-shapePaperTape": "紙テープ",
            "dxDiagram-shapeManualOperation": "手作業",
            "dxDiagram-shapeDelay": "遅延",
            "dxDiagram-shapeStoredData": "記憶データ",
            "dxDiagram-shapeDisplay": "表示",
            "dxDiagram-shapeMerge": "結合",
            "dxDiagram-shapeConnector": "コネクタ",
            "dxDiagram-shapeOr": "Or",
            "dxDiagram-shapeSummingJunction": "和接合",
            "dxDiagram-shapeContainerDefaultText": "コンテナー",
            "dxDiagram-shapeVerticalContainer": "縦コンテナー",
            "dxDiagram-shapeHorizontalContainer": "横コンテナー",
            "dxDiagram-shapeCardDefaultText": "人の名前",
            "dxDiagram-shapeCardWithImageOnLeft": "左側に画像を表示するカード",
            "dxDiagram-shapeCardWithImageOnTop": "上部に画像を表示するカード",
            "dxDiagram-shapeCardWithImageOnRight": "右側に画像を表示するカード",
            "dxGantt-dialogTitle": "タイトル",
            "dxGantt-dialogStartTitle": "開始日時",
            "dxGantt-dialogEndTitle": "終了日時",
            "dxGantt-dialogProgressTitle": "進行状況",
            "dxGantt-dialogResourcesTitle": "リソース",
            "dxGantt-dialogResourceManagerTitle": "リソース マネージャー",
            "dxGantt-dialogTaskDetailsTitle": "タスクの詳細",
            "dxGantt-dialogEditResourceListHint": "リソース リストの編集",
            "dxGantt-dialogEditNoResources": "リソースがありません",
            "dxGantt-dialogButtonAdd": "追加",
            "dxGantt-contextMenuNewTask": "新しいタスク",
            "dxGantt-contextMenuNewSubtask": "新しいサブタスク",
            "dxGantt-contextMenuDeleteTask": "タスクを削除",
            "dxGantt-contextMenuDeleteDependency": "依存関係を削除",
            "dxGantt-dialogTaskDeleteConfirmation": "タスクを削除すると、すべての依存関係とサブタスクが削除されます。このタスクを削除してもよろしいですか？",
            "dxGantt-dialogDependencyDeleteConfirmation": "タスクの依存関係を削除してもよろしいですか？",
            "dxGantt-dialogResourcesDeleteConfirmation": "リソースを削除すると、リソースが割り当てられているタスクからも削除されます。このリソースを削除してもよろしいですか？リソース: {0}",
            "dxGantt-dialogConstraintCriticalViolationMessage": "移動しようとしているタスクは、依存関係により2つ目のタスクとリンクされています。この変更は依存関係ルールと競合するため、どのように続行しますか？",
            "dxGantt-dialogConstraintViolationMessage": "移動しようとしているタスクは、依存関係により2つ目のタスクとリンクされています。どのように続行しますか？",
            "dxGantt-dialogCancelOperationMessage": "操作をキャンセルする",
            "dxGantt-dialogDeleteDependencyMessage": "依存関係を削除する",
            "dxGantt-dialogMoveTaskAndKeepDependencyMessage": "タスクを移動して、依存関係を保持する",
            "dxGantt-undo": "元に戻す",
            "dxGantt-redo": "やり直し",
            "dxGantt-expandAll": "すべて展開",
            "dxGantt-collapseAll": "すべて折りたたむ",
            "dxGantt-addNewTask": "新しいタスクの追加",
            "dxGantt-deleteSelectedTask": "選択したタスクを削除",
            "dxGantt-zoomIn": "拡大",
            "dxGantt-zoomOut": "縮小",
            "dxGantt-fullScreen": "全画面表示",
            "dxGantt-quarter": "Q{0}"
        }
    });
}));
