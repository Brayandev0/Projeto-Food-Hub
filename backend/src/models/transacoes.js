import { database } from "./database";

export const Transacao = database.define("Transacao", {
    id_Transacao: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    codigo_Registro: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    produto_Comprado: {
      type: DataTypes.STRING(30), // FK para Produtos.registro_Produto
    },
    comprador_CPF: {
      type: DataTypes.STRING(11), // FK para Clientes.CPF
    },
    data_Compra: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }, {
    tableName: "Transacoes",
    timestamps: false,
  });

