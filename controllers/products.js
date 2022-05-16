const database = require('./database');

module.exports = {
    // todo: update to use resent changes...

    addProduct: async function (name, desc, price) {
        //     if (!name || name.length === 0) {
        //         throw ('ERROR: name is empty');
        //     }

        //     database.pool.getConnection(function (connErr, connection) {
        //         if (connErr) throw connErr; // not connected!

        const sql = "INSERT INTO products(name, description, price)" +
            " VALUES(?,?,?);";

        //         connection.query(
        //             sql,
        //             [name, desc, price],
        //             function (sqlErr, result, fields) {
        //                 if (sqlErr) throw sqlErr;

        //                 console.log(result);
        //             });
        //     });
    },

    productsList: async function (req, res, next) {
        const sql = "SELECT * FROM products ORDER BY name ASC;";

        try {
            // const connection = await database.getConnection();
            const result = await database.query(sql);
            res.send(result[0]);
        }
        catch (err) {
            console.log(err);
        }
    },

    // todo: search product by name
    exportProducts: async function () {
        const sql = "SELECT name,description,price FROM products ORDER BY name ASC;";
    },

    // todo: edit product details
    editProduct: async function () {
        // const sql = UPDATE

<<<<<<< HEAD
    },
=======
     },
>>>>>>> eb09aa1b93726327f892bb81c2be4b7ed0964c88

    // todo: delete product
    deleteProduct: async function () {
        // const sql = DROP
<<<<<<< HEAD
    },
=======
     },
>>>>>>> eb09aa1b93726327f892bb81c2be4b7ed0964c88

    // todo: search product by name
    searchProducts: async function () {
        // const sql = SELECT WHERE...
<<<<<<< HEAD
    },

    // todo: sort products by name...
}
=======
     },

    // todo: sort products by name...
}
>>>>>>> eb09aa1b93726327f892bb81c2be4b7ed0964c88
