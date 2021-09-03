import { Sequelize } from "sequelize";
import db from '../db.js'

export default db.define("tipo",{
    idtipo: {
        type: Sequelize.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    nmtipo: {
        type: Sequelize.STRING,
        allowNull:false
    },
    fltipo: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    }
},{
    freezeTableName: true,
    timestamps: false,
})
