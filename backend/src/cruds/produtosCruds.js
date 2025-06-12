import { Produto } from "../models/produtos.js";

export async function criarProduto(nome, preco, descricao, quantidade_Produto, tipo, caminho_img, estimativa, categoria_Produto, valor_Promocao) {
    
    if(!nome || !preco || !descricao || !quantidade_Produto || !tipo || !caminho_img || !estimativa || !categoria_Produto || !valor_Promocao) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios" });
    }
    try {
        const novoProduto = await Produto.create({ 
            nome_Produto: nome,
            Valor_Produto: preco,
            registro_Produto: new Date(),
            Quantidade_Produto:quantidade_Produto,
            descricao_Produto: descricao,
            tipo:tipo,
            caminho_img:caminho_img,
            Estimativa_Entrega:estimativa,
            categoria:categoria_Produto,
            PrecoPromocional:valor_Promocao
        });
        res.status(201).json(novoProduto);
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar produto" });
    }}


export async function listarProdutos(req, res) {
    try {
        const produtos = await Produto.findAll();
        res.status(200).json(produtos);
    } catch (error) {
        res.status(500).json({ error: "Erro ao listar produtos" });
    }
}

export async function atualizarProduto(req, res) {
    const { id } = req.params;
    const { nome, preco, descricao } = req.body;

    try {
        const produto = await Produto.findByPk(id);
        if (!produto) {
            return res.status(404).json({ error: "Produto não encontrado" });
        }

        produto.nome = nome;
        produto.preco = preco;
        produto.descricao = descricao;
        await produto.save();

        res.status(200).json(produto);
    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar produto" });
    }
}

export async function deletarProduto(req, res) {
    const { id } = req.params;

    try {
        const produto = await Produto.findByPk(id);
        if (!produto) {
            return res.status(404).json({ error: "Produto não encontrado" });
        }

        await produto.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: "Erro ao deletar produto" });
    }
}