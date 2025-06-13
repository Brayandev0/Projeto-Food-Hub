import { criarProduto, ProdutosPM } from "../cruds/produtosCruds.js";

export async function CadastrarProdutos(req,res) {
    let { nome, preco, descricao, quantidade_Produto, tipo, caminho_img, estimativa, categoria_Produto, valor_Promocao } = req.body;

   if(!nome || !preco || !descricao || !quantidade_Produto || !tipo || !caminho_img || !estimativa || !categoria_Produto ) {
       return res.status(400).json({ error: "Todos os campos são obrigatórios" });
   }

   try {
       if(!valor_Promocao){
           valor_Promocao = null;
       }
       const novoProduto = await criarProduto(nome, preco, descricao, quantidade_Produto, tipo, caminho_img, estimativa, categoria_Produto, valor_Promocao);
       res.status(201).json({msg:"produto criado com sucesso",code:201});
   } catch (error) {
    console.log(error)
       res.status(500).json({ error: "Erro ao cadastrar produto" });
   }
}


export async function ProdutosPromocionais(req,res) {
    let produtos = await ProdutosPM()
    return res.status(200).json(produtos)
    
}