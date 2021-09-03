import { Sequelize } from "sequelize";
import tipo from "./tipo.js";
import db from '../db.js'

export default db.define("produto",{
    idproduto: {
        type: Sequelize.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    nmproduto: {
        type: Sequelize.STRING,
        allowNull:false
    },
    dsproduto: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    flproduto: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    idtipo: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
            model: tipo,
            key: 'idtipo'
        }
    },
    preco: {
        type: Sequelize.DECIMAL(11,2),
        allowNull: false,
        defaultValue: 0
    },
    cdbarras: {
        type: Sequelize.TEXT,
        unique: true
    }
},{
    freezeTableName: true,
    timestamps: false,
})
