const { connection } = require("../conf");
const express = require("express");
const router = express.Router();

//Get dogs
router.get("/", (req, res) => {
  let sql = "SELECT * FROM dog WHERE adoption_date IS NULL";
  if (req.query.home) {
    sql += " ORDER BY id DESC LIMIT 3";
  }
  connection.query(sql, (err, result) => {
    if (err)
      return res.status(500).send("Error has occured during the operation.");
    return res.status(200).json(result);
  });
});

module.exports = router;
