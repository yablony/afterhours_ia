const pg = require("pg");

let db;
if (process.env.DATABASE_SECRET_PASSWORD) {
    db = new pg.Pool({
        database: "afterhours_ia",
        password: process.env.DATABASE_SECRET_PASSWORD,
    });
} else {
    // for mac
    db = new pg.Pool({
        database: "afterhours_ia",
    });
}

module.exports = db;
