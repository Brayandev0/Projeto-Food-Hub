import { database } from "./database.js";

export const Produto = database.define("Produto", {
    id_Produtos: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome_Produto: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    Valor_Produto: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    registro_Produto: {
      type: DataTypes.STRING(30),
      unique: true,
    },
    Quantidade_Produto: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    tipo: {
      type: DataTypes.STRING(80),
    },
    caminho_img: {
      type: DataTypes.STRING(36),
    },
    Estimativa_Entrega: {
      type: DataTypes.STRING(36),
    },
    categoria: {
      type: DataTypes.STRING(40),
    },
    PrecoPromocional: {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: "Produtos",
    timestamps: false,
  });

