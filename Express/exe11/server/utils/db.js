let mongoose = require('mongoose');
let logger = require(`${process.cwd()}/server/utils/logger`);

// create the db function
let db = function(){
    return {
        // when we call db.config()
        config: function(){
            // define the url of the db
            mongoose.connect('mongodb://localhost/companies');
            // connection to the db
            let db = mongoose.connection;
            db.on('error', console.error.bind(console,'Connection Error'));
            // when connection is ok
            db.once('open', function(){
                logger.log('db connection open');
            })       
        }
    }
}

// export the function to connect to the db
module.exports = db();
