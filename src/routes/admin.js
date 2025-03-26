import { Router } from "express";
import {
    insertAdmin
} from "../db/index.js"

const router = Router();

router.post("/admin", async (req, res) => {
console.log("Rota POST /admin solicitada");
try {
    await insertAdmin(req.body);
    res.status(201).json({ message: "Administrador inserido com sucesso!" });
} catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
}
});

export default router;