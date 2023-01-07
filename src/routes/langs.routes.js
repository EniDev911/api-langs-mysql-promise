import {Router} from "express";
import {methods as langsControllers} from '../controllers/langs.controllers'

const router = Router();

router.get("/", langsControllers.getAllLanguages);
router.get("/:id", langsControllers.getLanguage);
router.post("/", langsControllers.addLanguage);
router.delete("/:id", langsControllers.deleteLanguage);
router.put("/:id", langsControllers.updateLanguage);

export default router;