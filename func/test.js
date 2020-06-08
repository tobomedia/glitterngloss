const pdf = require("html-pdf");

exports.handler = (event, context, callback) => {
  try {
    pdf
      .create("<html><body><h1>HELLO PDF</h1></body></html>", {
        format: "Letter",
        orientation: "portrait",
        border: "1in",
      })
      .toBuffer((err, buffer) => {
        console.log("callback triggered");
        return {
          statusCode: 200,
          headers: {
            "Cache-Control": "no-cache",
            "Content-Type": "application/pdf",
          },
          body: buffer.toString(),
        };
      });
  } catch (err) {
    return {
      statusCode: 500,
      body: err.toString(),
    };
  }
};
