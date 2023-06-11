const db = require("../db");

module.exports = {
    getAll: () => {
        return new Promise((accepted, rejected) => {
            db.query('SELECT * FROM cars', (error, results) => {
                if (error) {
                    rejected(error);
                    return;
                }
                accepted(results);
            });
        })
    },
    getByID: (id) => {
        return new Promise((accepted, rejected) => {
            db.query('SELECT * FROM cars WHERE id = ?', [id], (error, results) => {
                if (error) {
                    rejected(error);
                    return;
                }
                if (results.length > 0) {
                    accepted(results[0]);
                } else {
                    accepted(false);
                }
            });

        })
    },
    insert: (model, plate) => {
        return new Promise((accepted, rejected) => {
            db.query('INSERT INTO cars (model, plate) VALUES (?, ?)',
                [model, plate], (error, results) => {
                    if (error) {
                        rejected(error);
                        return;
                    }
                    accepted(results.insertID);
                });
        });
    },
    update: (id, model, plate) => {
        return new Promise((accepted, rejected) => {
            db.query('UPDATE cars SET model = ?, plate = ? WHERE id = ?',
                [model, plate, id], (error, results) => {
                    if (error) {
                        rejected(error);
                        return;
                    }
                    accepted(results);
                });
        });
    },
    delete: (id) => {
        return new Promise((accepted, rejected) => {
            db.query('DELETE FROM cars WHERE id = ?',
                [id], (error, results) => {
                    if (error) {
                        rejected(error);
                        return;
                    }
                    accepted(results);
                });
        });
    },
};