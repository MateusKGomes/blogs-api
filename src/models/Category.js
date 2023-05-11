/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */

const CategorySchema = (sequelize, DataTypes) => {
    const category = sequelize.define('Category', {
        id: {
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING
        },
    },{
        timestamps: false,
        tableName: 'categories',
    })
    return category;
};

module.exports = CategorySchema;