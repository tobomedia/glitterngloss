var pdf = require("html-pdf");

// exports.handler = async () => {
//   const document = pdf.create("<h1>the document</h1>");
//   return {
//     statusCode: 200,
//     body: document,
//   };
// };

exports.handler = (event, context, callback) => {
  const docDefinition = pdf.create("<h1>test document</h1>");
  getBlob(docDefinition).then((blob) => {
    callback(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/pdf",
      },
      statusCode: 200,
      body: blob.toString("base64"),
      isBase64Encoded: true,
    });
  });
};
