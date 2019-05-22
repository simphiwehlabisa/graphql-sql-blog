'use strict';

require('dotenv').config();

module.exports = {
    "development": {

        "username": process.env.DB_USERNAME,

        "password": process.env.DB_PASSWORD,

        "database": process.env.DB_NAME,

        "host": process.env.DB_HOST,

        "dialect": "mysql",

        dialectOptions: {
            //socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
            supportBigNumbers: true,
            bigNumberStrings: true
          },

    },
    
 
    "production": {

        "username": process.env.DB_USERNAME,

        "password": process.env.DB_PASSWORD,

        "database": process.env.DB_NAME,

        "host": process.env.DB_HOST,
        "port": process.env.DB_PORT,

        "dialect": "mysql"

    }

};