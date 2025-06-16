import { searchClientes } from "../cruds/usuariosCrud.js";
import { Cliente } from "../models/clientes.js";
export async function cadastrar(req, res) {
    try {
        const {
            nome,
            cpf,
            email,
            senha,
            
        } = req.body;

        if (!nome || !cpf || !email || !senha) {
            return res.status(400).json({ error: "Campos obrigatórios não preenchidos." });
        }

        let cliente = await searchClientes(email)
        if(cliente) {
            return res.status(409).json({ error: "Email já cadastrado." });
        }



        const novoCliente = await Cliente.create({
            nome_Cliente:nome,
            cpf,
            email,
            senha,
            endereco:null
        });
        console.log("cadastrou cliente")
        res.status(201).json({ message: "Cliente cadastrado com sucesso.", cliente: novoCliente });
    } catch (error) {
        res.status(500).json({ error: "Erro ao cadastrar cliente.", details: error.message });
    }
}