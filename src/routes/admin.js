import { Router } from "express";
import verificarAutenticacao from "../middlewares/autenticacao.js";
import {
    deleteAdmin, 
    insertAdmin
} from "../db/index.js"

const router = Router();

router.post("/admin", verificarAutenticacao, async (req, res) => {
console.log("Rota POST /admin solicitada");
try {
    await insertAdmin(req.body);
    res.status(201).json({ message: "Administrador inserido com sucesso!" });
} catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
}
});

router.delete("/admin/:email", verificarAutenticacao, async (req, res) => {
console.log("Rota DELETE /admin/# solicitada");
try {
    await deleteAdmin(req.params.email);
    res.status(200).json({ message: "Admin excluido com sucesso!!" });
} catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
}
});

export default router;