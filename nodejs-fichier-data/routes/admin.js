import express from "express";
import Product from "../models/productModel.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("admin", {});
});

export default router;
