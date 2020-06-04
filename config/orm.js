// * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

// * `selectAll()`
// * `insertOne()`
// * `updateOne()`

// * Export the ORM object in `module.exports`.


const connection =require("./connection");






// --------------old homework stuff
// class DB{
//     //constructor
//     constructor(connection){
//         this.connection=connection;
//     }

//     //function(s)
//     findAllEmployees() {
//         return this.connection.query(
//             "SELECT * from employees"
//         );
//     }
// }

// module.exports= new DB(connection);