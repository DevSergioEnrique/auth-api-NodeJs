const connection = require("../database/database");

const getUserById = (idUser) => {
    return new Promise((resolve, reject) => {

        // Validación del tipo de dato de entrada
        if (typeof idUser !== "number" || idUser <= 0){
            reject(new Error("Invalid User ID")); // Personalizar interfaz de error próximamente 
        }

        // Definición de la consulta sql y del parámetro
        const query = "SELECT * FROM users WHERE id = ?" ;
        const params = [idUser];

        // Ejecución de la consulta
        connection.query(query, params, (error, results) => {
            if (error) {
                console.error('Query error:', error);
                reject({message : "Error fetching user" + error});
            } else {
                resolve(results); // "results" es un objeto de Promise() que automáticamente es parseado a JSON por Node JS
            }
        });
    });
}

const getAllUsers = () => {
    return new Promise((resolve, reject) => {

        // Definición de consulta sql
        const query = 'SELECT * FROM users'; // SELECT * FROM users LIMIT 50

        // Ejecución de la consulta
        connection.query(query, (error, results) => {
            if (error) {
                console.error('Query error:', error);
                reject({message : "Error fetching users" + error});
            } else {
                resolve(results); // "results" es un objeto de Promise() que automáticamente es parseado a JSON por Node JS
            }
        });
    })
}

const insertUser = (newUser) => {
    const query ='INSERT INTO users (name, email, age) VALUES (?, ?, ?)';
    const params = [newUser.name, newUser.email, newUser.age];

    connection.query(query, params, (error, results) => {
        if (error) {
            console.error('Query error:', error);
            return;
        }
        console.log('User inserted with ID:', results.id);
    });
}

const updateUser = (idUser) => {
    const query = 'UPDATE users SET name = ?, age = ? WHERE id = ?';
    const params = [idUser];

    connection.query(query, params, (error, results) => {
        if (error) {
            console.error('Query error:', error);
            return;
        }
        console.log('User inserted with ID:', results.id)
    });

}

module.exports = {
    getUserById,
    getAllUsers,
    insertUser
}