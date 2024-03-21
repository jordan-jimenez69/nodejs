import Express from "express";
import * as livreController from "../controllers/livreController.js";

const router = Express.Router();

router.post("/", livreController.addLivre);

router.get("/:id", livreController.getLivreById);

router.get("/", livreController.getAllLivres);

router.put("/:id", livreController.updateLivre);

router.delete("/:id", livreController.deleteLivre);

export default router;
