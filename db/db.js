const { Pool } = require('pg');

let pool = undefined;

module.exports = {
    getPool: function () {
        if (pool) return pool;
        pool = new Pool();
        return pool;
    },
};
