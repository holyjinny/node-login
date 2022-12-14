"use strict"; // ECMAScript 문법을 준수하겠다.

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.intro);
router.get("/home", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);

// router를 외부 파일에서 사용할 수 있게
module.exports = router;