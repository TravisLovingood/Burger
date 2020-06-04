// * In the `orm.js` file, create the methods that will execute the necessary MySQL 
// commands in the controllers. These are the methods you will need to use in order to
// retrieve and store data in your database.

var connection = require("../config/connection.js");



class db{


    //function(s)

    // * `selectAll()`
    selectAllBurgers() {
        return this.connection.query(
            "SELECT * from burger_name"
        );
    }

    // * `insertOne()`
    
    
    // * `updateOne()`
}

module.exports = orm;



