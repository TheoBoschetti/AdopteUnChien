const { connection } = require("../conf");
const express = require("express");
const router = express.Router();
const { sendMailRequestAdoption } = require("../sendMail");

//Get dogs
router.get("/", (req, res) => {
  let sql =
    "SELECT * FROM dog WHERE adoption_date IS NULL AND is_requested IS NULL";
  if (req.query.home) {
    sql += " ORDER BY id DESC LIMIT 3";
  }
  connection.query(sql, (err, result) => {
    if (err)
      return res.status(500).send("Error has occured during the operation.");
    return res.status(200).json(result);
  });
});

//Get dog by id
router.get("/:id", (req, res) => {
  connection.query(
    "SELECT * FROM dog WHERE id=? ",
    [req.params.id],
    (err, result) => {
      if (err)
        return res.status(500).send("Error has occured during the operation.");
      return res.status(200).json(result);
    }
  );
});

//Request adoption for a dog
router.post("/requestAdoption", (req, res) => {
  const { message } = req.body.data;
  delete req.body.data.message;
  connection.query("INSERT INTO user SET ?", [req.body.data], (err, result) => {
    if (err) {
      return res.status(500).send("Error has occured during the operation.");
    }
    const newDogInfo = {
      is_requested: true
    };
    connection.query(
      "UPDATE dog SET ? WHERE id = ?",
      [newDogInfo, req.body.dogInfo.id],
      (err, result) => {
        if (err)
          return res
            .status(500)
            .send("Error has occured during the operation.");
        sendMailRequestAdoption(req.body, message);
        return res.status(200).send("Data updated with success.");
      }
    );
  });
});

module.exports = router;
