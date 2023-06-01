const db = require('../db/db');

const Quote = {
    findRandom: () => {
        const sql = `
        SELECT quote FROM quotes 
        ORDER BY RANDOM() LIMIT 1;
        `

        return db
            .query(sql)
            .then(dbRes => dbRes.rows);
    }
}

module.exports = Quote