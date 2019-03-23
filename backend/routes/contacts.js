var express = require("express");
var router = express.Router();

const {
  getAll,
  get,
  save,
  edit,
  remove
} = require("../controllers/contacts.controllers");

/* GET contacts listing. */
router.get("/", getAll);

/* GET contact by id */
router.get("/:id", get);

/* POST contact */
router.post("/", save);

/* PUT contact */
router.put("/:id", edit);

/* DELETE contact */
router.delete("/:id", remove);

module.exports = router;
