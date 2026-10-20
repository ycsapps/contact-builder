/* Shared, dependency-free contact matching and safe export helpers. */
(function(root){
'use strict';
const norm=v=>String(v??'').trim().toLocaleLowerCase();
function values(v,sep){const s=String(v??'').trim();if(sep==='none')return [s];const parts=[...new Set(s.split(sep).map(x=>x.trim()).filter(Boolean))];return parts.length?parts:[''];}
function build(raw,headerRow){
 const head=raw[headerRow-1];if(!head||!head.some(x=>String(x??'').trim()))throw Error('That header row is empty. Choose a row containing your column titles.');
 const width=raw.slice(headerRow).reduce((n,r)=>Math.max(n,r.length),head.length);const used=new Set();
 const headers=Array.from({length:width},(_,i)=>{let base=String(head[i]??'').trim()||`Column ${i+1}`,s=base,n=2;while(used.has(s))s=`${base} (${n++})`;used.add(s);return s;});
 const rows=raw.slice(headerRow).filter(r=>r.some(v=>String(v??'').trim())).map(r=>headers.map((_,i)=>String(r[i]??'')));
 return {headers,rows};
}
function match(row,selections,tokens,query,field,skip=-1){
 for(const [key,selected] of selections){const c=Number(key);if(c===skip||!selected.size)continue;if(!tokens[c].has(row[c],selected))return false;}
 if(query){const hay=field==='all'?row.map(norm).join(' '):norm(row[Number(field)]);if(!query.every(q=>hay.includes(q)))return false;}return true;
}
function safe(v){const s=String(v??'');return /^[\s]*[=+\-@]/.test(s)?"'"+s:s;}
function csv(data){return '\uFEFF'+data.map(r=>r.map(v=>'"'+safe(v).replace(/"/g,'""')+'"').join(',')).join('\r\n');}
function tsv(data){return data.map(r=>r.map(v=>safe(v).replace(/[\t\r\n]+/g,' ')).join('\t')).join('\r\n');}
const api={norm,values,build,match,safe,csv,tsv};if(typeof module!=='undefined')module.exports=api;else root.Contacts=api;
})(typeof window==='undefined'?globalThis:window);
