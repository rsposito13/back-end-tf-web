import dotenv from "dotenv";
import express from "express";
import routerAdmin from "./routes/admin.js";
import routerLogin from "./routes/login.js";
import routerShows from "./routes/shows.js";
import cors from "cors";

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routerLogin);
app.use(routerAdmin);
app.use(routerShows);

app.get("/", (req, res) => {
  console.log("Rota / solicitada");
  res.json({
    nome: "Trabalho Final da disciplina de WEB.",
  });
});

app.listen(port, () => {
  console.log("Serviço escutando na porta:  ${port}");
});