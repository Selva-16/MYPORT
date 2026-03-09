import fs from 'fs';
import PDFParser from 'pdf2json';

const pdfParser = new PDFParser(this, 1);

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));
pdfParser.on("pdfParser_dataReady", pdfData => {
    fs.writeFileSync("d:/React/portfolio--selva/output.txt", pdfParser.getRawTextContent());
});

pdfParser.loadPDF("d:/React/portfolio--selva/src/assets/SELVANARAYANAN P.pdf");
