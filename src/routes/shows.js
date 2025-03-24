import { Router } from "express";
import verificarAutenticacao from "../middlewares/autenticacao.js";
import {
    deleteShows,
    insertShows,
    updateShows,
    selectShows
} from "../db/index.js"

const router = Router();

router.get("/shows", async (req, res) => {
    try {
      const cursos = await selectShows();
      res.json(cursos);
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message || "Erro!" });
    }
    console.log("Rota GET/shows solicitada");
  });

  router.post("/show", verificarAutenticacao, async (req, res) => {
    console.log("Rota POST /show solicitada");
    try {
      await insertShows(req.body);
      res.status(201).json({ message: "Show inserido com sucesso!" });
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message || "Erro!" });
    }
  });

  router.delete("/show/:codigo", verificarAutenticacao, async (req, res) => {
    console.log("Rota DELETE /show/# solicitada");
    try {
        await deleteShows(req.params.codigo);
        res.status(200).json({ message: "Show excluido com sucesso!!" });
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message || "Erro!" });
    }
  });

  router.put("/show/:codigo", verificarAutenticacao, async (req, res) => {
    console.log("Rota PUT /show/# solicitada");
    try {
        const codigo = req.params.codigo;
        await updateShows(codigo, req.body);
        res.status(200).json({ message: "Show atualizado com sucesso!" });
    } catch (error) {
      console.log(error);
      res.status(error.status || 500).json({ message: error.message || "Erro!" });
    }
  });
  
  export default router;