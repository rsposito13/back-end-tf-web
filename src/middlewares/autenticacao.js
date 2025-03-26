import jwt from "jsonwebtoken";

function verificarAutenticacao(req, res, next) {
    const token = req.headers["x-access-token"];
    
    if (!token) {
        return res.status(401).json({ message: "Token não fornecido" });
    }

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Administrador não Autenticado" });
        }
        
        // Adiciona as informações do usuário no request
        req.userId = decoded.user;
        req.userRole = decoded.role; // Adiciona a role do usuário
        
        next();
    });
}

export default verificarAutenticacao;