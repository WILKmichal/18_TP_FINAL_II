
import xlsx from 'node-xlsx';

class xlsxGenerator {

    data = [];

    //create columns names
    constructor(...colomnName) {
        this.data.push(colomnName);
    }

    addARow(...row) {
        this.data.push(row);
        return;
    }

    buildBuffer() {

        //set width of colons depending of characters length
        maxLengthColumn = [];

        this.data.forEach((columnArray, rowPostion) => {
            columnArray.forEach((value, columnPostion) => {
                if (maxLengthColumn[columnPostion] == undefined) {
                    maxLengthColumn[columnPostion] = { wch: 0 };
                }
                if (maxLengthColumn[columnPostion].wch < value.toString().length) {
                    maxLengthColumn[columnPostion].wch = value.toString().length
                }
            });
        });

        //set width of column
        const sheetOptions = { '!cols': maxLengthColumn };


        //how to send buffer

        //res.writeHead(200, [['Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']]);
        //res.end(new Buffer(buffer, 'base64'));
        return xlsx.build([{ name: 'contact', data: this.data }], { sheetOptions }); // Returns a buffer
    }
}