importScripts('vendor/xlsx.full.min.js');
let workbook;
onmessage=e=>{try{const d=e.data;if(d.buffer)workbook=XLSX.read(d.buffer,{type:'array',cellFormula:false,cellHTML:false,cellStyles:false});const name=d.sheet||workbook.SheetNames[0];const raw=XLSX.utils.sheet_to_json(workbook.Sheets[name],{header:1,defval:'',raw:false,blankrows:true});postMessage({sheets:workbook.SheetNames,sheet:name,raw});}catch(err){postMessage({error:'Unable to read this spreadsheet. Check that it is a valid, unencrypted Excel or CSV file. '+err.message});}};
