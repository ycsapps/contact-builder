# Contact Builder

Search, filter and export contacts from your own spreadsheet. Column headings and filter options come from your file, with no fixed contact template required.

## Capacity

This version supports **up to 100,000 non-empty contact rows in total across selected worksheets**, with a maximum uploaded file size of **100 MB**. It was tested with a generated 100,000-contact, two-tab Excel workbook. Very wide spreadsheets and devices with less available memory may take longer or fail to open; these figures are limits, not a performance guarantee for every device.

Reading, combining, filtering, dropdown option generation, sorting and export generation run in a background worker. The page displays 100 rows at a time. Copy and downloads include all matching contacts, not just the visible page.

## Importing a spreadsheet

1. Drag in an `.xlsx`, `.xls`, `.csv` or `.tsv` file, or use **Choose spreadsheet**.
2. Choose one, several or all worksheets. Visible tabs are selected initially; hidden tabs are available but initially unchecked. Set the header row for each tab if its headings are not in row 1.
3. Select **Review columns**.
4. Review the output headings. Identical headings are combined automatically, ignoring case and surrounding spaces. For equivalent headings with different names, change them to the same name. For example, change **Email Address** to **Email** to combine those fields.
5. Additional columns are retained. Contacts from tabs without those columns have blank values there. Two columns within the same tab must have different output headings.
6. Select **Import selected tabs**. A **Source sheet** column identifies where each contact came from. If that heading already exists, the generated source column receives a distinct name.

Each selected tab must contain a table with one contact per row. Blank data rows are omitted. Matching contacts across tabs are not automatically deduplicated. Imports exceeding 100,000 contacts are refused with a message, never silently truncated.

To change the selected tabs or their headings after import, clear the file and upload it again. The original workbook is released from memory after import to reduce memory use.

## Filters and keyword search

- Open **Choose filter columns** and tick any columns you want as dropdowns. The app suggests up to six familiar filter columns initially, or the first three if none are recognised.
- Open a dropdown and tick one or more values. Use its search box to find values in long lists.
- Selections within one dropdown match **any** selected value. Different dropdowns must **all** match.
- Options and counts reflect the other active dropdowns and keyword search. Selected values remain available even when their count is zero.
- Dropdowns show up to 250 matching options at a time. Type to locate other options.
- Use **Search contacts** across all columns or choose a single column under **Search in**. Searches are case-insensitive, with all entered words required within the selected scope.
- Use **Reset** to clear dropdown selections and keyword search.

For cells with several values, select the separator under **Multiple values in a cell**. The default is a semicolon, for example `Value A; Value B`. Pipes and commas are also supported, or choose **Keep each cell as one value**. Changing the separator clears dropdown selections. The original cell text stays unchanged in the results and exports.

Filter connections are inferred from values occurring together in rows. Where several categories and sub-categories share one cell or row, the app cannot infer more specific relationships that are not represented in the spreadsheet.

## Results and export

- Click a table heading to sort.
- Under **Output columns & order**, select and arrange the columns you need.
- **Copy for Excel** copies matching contacts with headings as tab-separated text. Paste into a starting cell in Excel. Line breaks and tabs within cells become spaces to preserve column alignment. If clipboard access is unavailable, a TSV file is downloaded instead.
- **CSV** and **Excel** download all matching rows, across every page, in the selected column and sort order. Generation occurs in the background; large Excel exports may take time.
- The exported file is a flat table of values. Original formulas, styles, macros, merged cells and workbook layouts are not retained. Stored formula results are read without recalculating formulas. Dates and other values use their displayed text where available.
- Excel exports write text cells to preserve text identifiers and avoid executing formulas. CSV and copied values beginning with formula-like characters (`=`, `+`, `-`, `@`, including after whitespace) are prefixed with an apostrophe. This can affect how phone numbers or negative values appear.

## Privacy

Contacts stay in the browser tab and its background worker. The app has no contact upload endpoint, analytics, database, cookies or browser storage. The spreadsheet library is bundled locally rather than loaded from an external CDN.

**Clear file**, refreshing or closing the page clears the session. Clipboard copies and downloaded files remain wherever you save or paste them. The original spreadsheet is not modified. The website host still serves the app files under its normal hosting practices.

Do not upload private spreadsheets to the GitHub repository. Upload them only through the running app.

## GitHub Pages

Keep these items at the repository root:

- `index.html` (lowercase)
- `app.js`
- `core.js`
- `worker.js`
- `style.css`
- `vendor/`, with all its contents
- `THIRD-PARTY-NOTICES.md`
- `README.md` (this guide, optional for running the app)

In GitHub **Settings → Pages**, deploy from the `main` branch and `/(root)`. Open the Pages URL after deployment completes. No build step, API key or account in the app is required.

If the app cannot start its background reader, check that `worker.js`, `core.js` and `vendor/xlsx.full.min.js` are present. Use the hosted HTTP/HTTPS page rather than double-clicking the HTML file locally.

## Third-party software

The app bundles SheetJS Community Edition 0.20.3 for spreadsheet reading and writing. Retain `vendor/LICENSE.txt` and `THIRD-PARTY-NOTICES.md` when hosting or distributing the app.
