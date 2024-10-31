const app = require("./router");
require("dotenv").config();
const PORT = process.env.PORT ?? 3000;

// Ejecución de la aplicación en el puerto
app.listen(PORT, () => {
    console.log(`Server is running port: `, PORT)
});

