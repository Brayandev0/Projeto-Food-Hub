import { criarProduto } from "../cruds/produtosCruds.js";

export async function CadastrarProdutos(req,res) {
    let { nome, preco, descricao, quantidade_Produto, tipo, caminho_img, estimativa, categoria_Produto, valor_Promocao } = req.body;

   if(!nome || !preco || !descricao || !quantidade_Produto || !tipo || !caminho_img || !estimativa || !categoria_Produto || !valor_Promocao) {
       return res.status(400).json({ error: "Todos os campos são obrigatórios" });
   }

   try {
       const novoProduto = await criarProduto(nome, preco, descricao, quantidade_Produto, tipo, caminho_img, estimativa, categoria_Produto, valor_Promocao);
       res.status(201).json(novoProduto);
   } catch (error) {
       res.status(500).json({ error: "Erro ao cadastrar produto" });
   }
}