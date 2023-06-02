const db = require('../db/db');

const Quote = {
    // findRandom: () => {
    //     const sql = `
    //     SELECT quote FROM quotes 
    //     ORDER BY RANDOM();
    //     `

    //     return db
    //         .query(sql)
    //         .then(dbRes => dbRes.rows);
    // }

    findAll: () => {
        const sql = `SELECT * FROM quotes;`

        return db
            .query(sql)
            .then(dbRes => dbRes.rows);
    }
}

module.exports = Quote