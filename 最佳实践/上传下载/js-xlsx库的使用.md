# js-xlsx 使用

## 上传excel后转成数据

```js
import xlsx from 'xlsx';

const wb = xlsx.read(data, {type: 'binay'})

const firstName = wb.SheetNames[0];
const sheet = wb.Sheets[sheetName];
const res = xlsx.utils.sheet_to_json(sheet)
```



## 数据转成excel后下载

```js
import xlsx from 'xlsx';

// json convert to sheet
xlsx.utils.json_to_sheet()

// array of arrays to sheet
xlsx.utils.aoa_to_sheet

function downLoadFile(sheet, sheetName, fileName, fileExtension) {
  xlsx.writeFile({
    SheetNames: [sheetName],
  	Sheets: {
        [sheetName]: sheet
    }
  }, fileName.[fileExtension]);   
}

```

