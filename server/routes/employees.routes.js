const express = require("express");
const router = express.Router();
// const auth = require("../middleware/auth.middleware");
const {
  all,
  add,
  remove,
  employee,
  edit,
} = require("../controllers/employees");

// http://localhost:5000/api/employees
router.get("/", all);

// http://localhost:5000/api/employees/add
router.post("/add", add);

// http://localhost:5000/api/employees/:id
router.get("/:id",  employee);

// http://localhost:5000/api/employees/remove/:id
router.post("/remove/:id",  remove);

// http://localhost:5000/api/employees/edit/:id
router.put("/edit/:id", edit);

module.exports = router;
