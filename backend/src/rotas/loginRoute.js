import { searchClientes } from "../cruds/usuariosCrud.js";
import { gerarToken } from "../utils/tokensAuth.js";

export async function Login(req,res) {
    let { email, senha } = req.body;

   if(!email || !senha) {
       return res.status(400).json({ error: "Todos os campos são obrigatórios" });
   }
   let data = await searchClientes(email);

   try {
       // Aqui você pode adicionar a lógica de autenticação
       if (!data) {
           return res.status(404).json({ error: "Usuário não encontrado" });
       }
       if (data.senha !== senha) {
           return res.status(401).json({ error: "Senha incorreta" });
       }
       res.status(200).json({msg:"Login realizado com sucesso",code:200,token:await gerarToken(data.id)});
   } catch (error) {
       console.log(error)
       res.status(500).json({ error: "Erro ao realizar login" });
   }
}