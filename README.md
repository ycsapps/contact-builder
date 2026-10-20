# Contact Builder

A browser-based tool for searching, filtering and exporting contacts from your own spreadsheet.

Upload an Excel or CSV file, narrow down the results using dropdown filters and keyword search, then copy your shortlist into Excel or download it as a CSV or Excel file.

## Works with your spreadsheet

There is no fixed contact template or required set of column names. The app reads the column headings in your uploaded file and uses them as the available search fields and filter labels.

Dropdown options are generated from the values in your spreadsheet. Under **Choose filter columns**, you can select which columns appear as dropdown filters. The app suggests some columns to start with, and you can change those selections to suit your file.

## Features

- Drag-and-drop or file-picker upload for `.xlsx`, `.xls`, `.csv` and `.tsv` files.
- Worksheet selection for Excel files containing multiple sheets.
- Adjustable header row if column headings are not on the first row.
- Search across all columns or within a chosen column.
- Searchable dropdown filters with multiple selections.
- Connected filters, with options and counts updated according to the other filters and search terms.
- Support for cells containing multiple values separated by semicolons, commas or pipes.
- Sortable results table with pagination.
- Choose and reorder the columns shown in results and included in exports.
- Copy results with headings for pasting into Excel.
- Download results as CSV or Excel.
- Clear the current file and start again.

## Getting started

1. Open the app and choose a spreadsheet, or drag one into the upload area.
2. Select the worksheet you want to use, if applicable.
3. Check that the correct row is being used for column headings. Change **Header row** and click **Apply header** if needed.
4. Open **Choose filter columns** and select the columns you want to filter by.
5. Open a dropdown and tick one or more values. Use the search box inside the dropdown to find an option quickly.
6. Add keywords in **Search contacts** to narrow the results further. Use **Search in** to restrict the search to one column.
7. Open **Output columns & order** to choose and arrange the columns you need.
8. Copy your results or download them as CSV or Excel.

You can also select **Try sample contacts** to explore the app using fictional data.

## How filtering and searching work

Multiple selections within one dropdown match **any** of those values. Selections across different dropdowns must **all** match.

Keyword search works alongside the dropdown filters. If you enter several words, all of them must appear within the selected search scope. Matching is case-insensitive.

Dropdown options come from your uploaded data and reflect the other active filters and keyword search. A selected option remains available to deselect even if its matching count drops to zero.

Use **Reset** to clear the dropdown selections and keyword search.

### Cells containing several values

If a cell contains more than one value, choose the appropriate setting under **Multiple values in a cell**:

- Semicolons: `Value A; Value B`
- Pipes: `Value A | Value B`
- Commas: `Value A, Value B`
- **Keep each cell as one value** when values should not be split.

Semicolons are the default. Only select commas if they separate distinct values, rather than forming part of a single value. Changing this setting clears dropdown selections.

The original cell text is retained in the results and exports. Connections between filters are based on values occurring together in spreadsheet rows.

## Copying and downloading

**Copy for Excel** copies the selected columns, with headings, as tab-separated text. Paste into cell A1, or another starting cell, in Excel. Line breaks and tabs inside individual cells are replaced with spaces to keep the columns aligned.

**CSV** and **Excel** export all matching contacts using your chosen columns and sorting. Exports include results across every page, not just the rows currently visible.

The app exports a new table of values. It does not preserve the original workbook's formulas, formatting, macros or layout. Excel exports use text cells. CSV and clipboard output prefix potentially formula-like values with an apostrophe for spreadsheet safety, which may affect how some phone numbers or negative values appear.

## Privacy

Contact data is processed locally in your browser tab. The app does not upload your spreadsheet to a server or save contacts in a database or browser storage.

Use **Clear file**, refresh the page or close the tab to clear the app's session. Copies placed on your clipboard and downloaded files remain wherever you keep them.

No account or API key is required. The spreadsheet-reading library is included with the app, so it does not need to be loaded from an external CDN during use.

## File preparation and limits

For best results, use a clear heading for each column and one contact per row. Blank data rows are omitted. Empty headings receive a generated column name, and duplicate headings receive numbered suffixes.

The app is designed for spreadsheets with around 30,000 contacts. Performance depends on file size, column count and the device being used. Files over 100 MB are not accepted. Long dropdown lists show up to 250 matching options at a time; use the dropdown's search box to narrow them down.

## Hosting

The app can be hosted as a static website, including on GitHub Pages. Keep these files together, with `index.html` at the website root:

- `index.html`
- `style.css`
- `app.js`
- `core.js`
- `worker.js`
- `vendor/`, including its contents
- `THIRD-PARTY-NOTICES.md`

Load contact spreadsheets through the running app. Do not add private contact files to the website repository.

## Third-party software

Contact Desk includes SheetJS Community Edition for reading and writing spreadsheets. Its licence is included in `vendor/LICENSE.txt`, with attribution in `THIRD-PARTY-NOTICES.md`. Retain those files when hosting or distributing the app.
