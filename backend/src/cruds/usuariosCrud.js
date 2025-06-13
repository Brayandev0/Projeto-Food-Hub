import { Cliente } from "../models/clientes.js";

export async function searchClientes(email) {
    return await Cliente.findOne({ where: { email } });
}