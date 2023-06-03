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
    },

    create: (user_id, name, quote) => {
        const sql = `
        INSERT INTO quotes(user_id, name, quote)
        VALUES ($1, $2, $3)
        RETURNING *
        `

        return db
            .query(sql, [user_id, name, quote])
            .then(dbRes => dbRes.rows[0])
    }
}

module.exports = Quote