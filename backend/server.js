import app from "./app.js";
import { config } from "dotenv";
config();   


app.listen(process.env.PORT, () => {
  console.log(`Servidor esta rodando na porta : ${process.env.PORT}`);
});