import { Router } from "express";
import jwt from "jsonwebtoken";
import { autenticarAdmin, autenticarUser } from "../db/index.js";
import verificarAutenticacao from "../middlewares/autenticacao.js";

const router = Router();

router.post("/login", async (req, res) => {
  console.log("Rota POST /login solicitada");
  try {
    // Primeiro tenta autenticar como admin
    const admin = await autenticarAdmin(req.body.email, req.body.senha);
    if (admin !== undefined) {
      const token = jwt.sign(
        { 
          user: admin.email,
          role: 'admin' // Adiciona role no payload do token
        }, 
        process.env.SECRET,
        { expiresIn: '2h' }
      );
      return res.status(202).json({ 
        token: token,
        userType: 'admin' // Informa o tipo de usuário no response
      });
    }

    // Se não for admin, tenta autenticar como usuário comum
    const usuario = await autenticarUser(req.body.email, req.body.senha);
    if (usuario !== undefined) {
      const token = jwt.sign(
        { 
          user: usuario.email,
          role: 'user' // Adiciona role no payload do token
        }, 
        process.env.SECRET,
        { expiresIn: 300 }
      );
      return res.status(202).json({ 
        token: token,
        userType: 'user' // Informa o tipo de usuário no response
      });
    }

    res.status(404).json({ message: "Usuário/Senha incorreta!" });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
  }
});

router.get("/auth", verificarAutenticacao, async (req, res) => {
  console.log("Rota GET /auth solicitada");
  try {
    res.status(200).json({ 
      user: `${req.userId}`,
      role: req.userRole // Adicione esta informação se estiver no middleware
    });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
  }
});

export default router;