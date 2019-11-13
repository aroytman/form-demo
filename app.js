
function app() {

  pjs.defineDisplay("display", "form.json");

  display.form.execute();

  pjs.query("INSERT INTO requests SET ?", { name, email, type, details });

  pjs.messageBox("Thank you! Your request was added to our system.")

}

exports.default = app;