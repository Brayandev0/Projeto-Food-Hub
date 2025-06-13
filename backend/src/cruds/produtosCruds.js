import { Produto } from "../models/produtos.js";
import { Op } from "sequelize";

import { gerarUuidV4 } from "../utils/gerarUuid.js";

export async function criarProduto(nome, preco, descricao, quantidade_Produto, tipo, caminho_img, estimativa, categoria_Produto, valor_Promocao) {
        return await Produto.create({ 
            nome_Produto: nome,
            Valor_Produto: preco,
            registro_Produto: new Date(),
            Quantidade_Produto:quantidade_Produto,
            registro_Produto: await gerarUuidV4(),
            descricao: descricao,
            tipo:tipo,
            caminho_img:caminho_img,
            Estimativa_Entrega:estimativa,
            categoria:categoria_Produto,
            PrecoPromocional:valor_Promocao
        });
    }
export async function ProdutosPM() {
  return await Produto.findAll({
    where: {
      PrecoPromocional: {
        [Op.gt]: 0
      }
    }
  });
}