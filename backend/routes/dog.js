const { connection } = require("../conf");
const express = require("express");
const router = express.Router();

//Get dogs
router.get("/", (req, res) => {
  connection.query(
    "SELECT * FROM dog WHERE adoption_date IS NULL",
    (err, result) => {
      if (err)
        return res.status(500).send("Error has occured during the operation.");
      return res.status(200).json(result);
    }
  );
});

module.exports = router;
