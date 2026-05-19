const db = require('db.js');


exports.getAllU = () =>
        new Promise((resolve, reject) => {
            db.query('SELECT * FROM upgrades', (err, result) => {
                if (err) return reject(err);
                resolve(result);
            });
        });

exports.createU = (u) =>
        new Promise((resolve, reject) => {
            db.query(
                    'INSERT INTO upgrades (name, cost, value) VALUES (?, ?, ?)',
                    [u.name, u.cost, u.value],
                    (err, result) => {
                        if (err) return reject(err);
                        resolve(result.insertId);
                    }
            );
        });

exports.updateU = (id, u) =>
        new Promise((resolve, reject) => {
            db.query(
                    'UPDATE upgrades SET name=?, cost=?, value=? WHERE id=?',
                    [u.name, u.cost, u.value, id],
                    (err, result) => {
                        if (err) return reject(err);
                        resolve(result);
                    }
            );
        });

exports.deleteU = (id) =>
        new Promise((resolve, reject) => {
            db.query(
                    'DELETE FROM upgrades WHERE id=?',
                    [id],
                    (err, result) => {
                        if (err) return reject(err);
                        resolve(result);
                    }
            );
        });



exports.getAllA = () =>
        new Promise((resolve, reject) => {
            db.query('SELECT * FROM autoclickers', (err, result) => {
                if (err) return reject(err);
                resolve(result);
            });
        });

exports.createA = (a) =>
        new Promise((resolve, reject) => {
            db.query(
                    'INSERT INTO autoclickers (name, cost, rate) VALUES (?, ?, ?)',
                    [a.name, a.cost, a.rate],
                    (err, result) => {
                        if (err) return reject(err);
                        resolve(result.insertId);
                    }
            );
        });

exports.updateA = (id, a) =>
        new Promise((resolve, reject) => {
            db.query(
                    'UPDATE autoclickers SET name=?, cost=?, rate=? WHERE id=?',
                    [a.name, a.cost, a.rate, id],
                    (err, result) => {
                        if (err) return reject(err);
                        resolve(result);
                    }
            );
        });

exports.deleteA = (id) =>
        new Promise((resolve, reject) => {
            db.query(
                    'DELETE FROM autoclickers WHERE id=?',
                    [id],
                    (err, result) => {
                        if (err) return reject(err);
                        resolve(result);
                    }
            );
        });