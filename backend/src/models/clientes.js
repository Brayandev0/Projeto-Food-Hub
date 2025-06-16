// models/Cliente.js
import { database } from "./database.js";
import { DataTypes } from "sequelize";

export const Cliente = database.define("Cliente", {
    id_Clientes: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome_Cliente: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    CPF: {
      type: DataTypes.STRING(11),
      allowNull: false,
      unique: true,
    },
    data_Registro: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    email: {
      type: DataTypes.STRING(200),
      allowNull: false,
      unique: true,
    },
    senha: {
      type: DataTypes.STRING(400),
      allowNull: false,
    },
    Endereço: {
      type: DataTypes.STRING(200),
      allowNull: true, // Permite que o endereço seja nulo
    },
  }, {
    tableName: "Clientes",
    timestamps: false,
  });


