/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */

const UserSchema = (sequelize, DataTypes) => {
    const user = sequelize.define('User', {
        id: {
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        displayName: {
            allowNull: false,
            type: DataTypes.STRING
        },
        email: {
            allowNull: false,
            type: DataTypes.STRING
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.STRING,
        }
    },{
        timestamps: false,
        tableName: 'users',
        underscored: true,
    })
    return user;
};

module.exports = UserSchema;