const mysql = require("mysql2/promise");
const config = require("../config");

async function query(sql) {
  const connection = await mysql.createConnection(config.db);
  const [results] = await connection.execute(sql);
  if (results.length > 0) {
    return results;
  }else{
    console.log("db fetch operation failed"+results)
  }
}

module.exports = {
  query,
};
