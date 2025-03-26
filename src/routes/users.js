import { Router } from "express";
import {
    insertUser
} from "../db/index.js"

const router = Router();

router.post("/user", async (req, res) => {
console.log("Rota POST /user solicitada");
try {
    await insertUser(req.body);
    res.status(201).json({ message: "Usuário inserido com sucesso!" });
} catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
}
});

export default router;