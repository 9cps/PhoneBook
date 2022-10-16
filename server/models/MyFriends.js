const { STRING } = require("sequelize")
const { INTEGER } = require("sequelize")
const { BOOLEAN } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
    const MyFriends = sequelize.define("MyFriends", {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone_number: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        sex: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        position: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        status_delete: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    })

    return MyFriends
}