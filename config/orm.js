// * In the `orm.js` file, create the methods that will execute the necessary MySQL 
// commands in the controllers. These are the methods you will need to use in order to
// retrieve and store data in your database.

var connection = require("./connection.js");
// ["?", "?", "?"]
function printQuestionMarks(num) {
  var arr = [];
  
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  
  return arr.toString();
}
  
function objToSql(ob) {
  var arr = [];
  for (var key in ob){
      // var value = ob[key];
      // // check to skip hidden properties
      // if (Object.hasOwnProperty.call(ob, key)) {
      //   // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      //   if (typeof value === "string" && value.indexOf(" ") >= 0) {
      //     value = "'" + value + "'";
      //   }
      //   // e.g. {smoothieName: 'Lana Del Grey'} => ["smoothieName='Lana Del Grey'"]
      //   // e.g. {devoured: true} => ["devoured=true"]
    arr.push(key + "="+ob[key])
  }
  return arr.toString();
}

var orm ={
  all: function(tableInput, cb){
    var queryString = "SELECT * FROM "+ tableInput+";";
    connection.query(queryString, function(err,result){
      if (err){
        throw err;
      }
      cb(result);
    });
  },

    //vals  = array of values we want to save to cols
    //cols = columns we want to insert the values into
  create:function(table,cols,vals,cb){
    var queryString="INSERT INTO "+table;

    queryString+=" (";
    queryString+=cols.toString();
    queryString+=") ";
    queryString+= "VALUES (";
    queryString+= printQuestionMarks(vals.length);
    queryString+= ") ";
    console.log(vals);
    
    console.log(queryString);
    connection.query(queryString, vals, function(err,result){
      if (err){
        throw err;
      }
      cb(result);
    });
  },

// objColVals would be the colums and values you wanna update
// ex: {name: cheeseburger, ready:true}
  update: function(table,objColVals,condition,cb) {
    var queryString="UPDATE "+table;

    queryString+=" SET ";
    queryString+=objToSql(objColVals);
    queryString+=" WHERE ";
    queryString+= condition;
  
    console.log(queryString);
    connection.query(queryString, function(err,result){
      if (err){
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;



