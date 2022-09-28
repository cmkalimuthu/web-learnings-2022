const helper = require("../helper");
const db = require('./db')
const config=require('../config')
async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const query = `SELECT id, name, released_year, githut_rank, pypl_rank, tiobe_rank 
    FROM programming_languages LIMIT ${offset},${config.listPerPage}`;
  const rows = await db.query(query);
  const data = helper.emptyOrRows(rows);
  const meta = { page };
  console.log("data retrieved successfuly from db")
  return {
    data,
    meta,
  };
}

module.exports = {
  getMultiple,
};
