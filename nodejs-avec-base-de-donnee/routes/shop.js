import Express from "express";
import * as livreController from "../controllers/livreController.js";

const router = Express.Router();

router.get("/", livreController.getAllLivres);

router.post("/", livreController.addLivre);


export default router;
