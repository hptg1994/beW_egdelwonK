/* User Router· */
import { request } from "http";

const express = require("express");
const router = express.Router();
const data = require("../data");
const userData = data.users;

router.get("/:id",(request,result) => {
     userData.getUserById
})