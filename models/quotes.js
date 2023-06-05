const db = require('../db/db');

const Quote = {
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
    },

    delete: quoteId => {
        const sql = 'DELETE FROM quotes WHERE id = $1'

        return db.query(sql, [quoteId])
    },

    update: (user_id, name, quote, id) => {
        const sql = `
        UPDATE quotes 
        SET user_id = $1, name = $2, quote = $3 
        WHERE id = $4
        RETURNING *
        `

        return db
            .query(sql, [user_id, name, quote, id])
            .then(dbRes => dbRes.rows[0])
    }
}

module.exports = Quote;