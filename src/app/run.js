const app = require("./app");

app.listen(app.get("PORT"), () => {
    console.log(`Server is running port: `, app.get("PORT"))
});