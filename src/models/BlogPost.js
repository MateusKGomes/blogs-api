/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */

const BlogsPostsSchema = (sequelize, DataTypes) => {
    const BlogsPosts = sequelize.define('BlogPost', {
        id: {
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        title: {
            allowNull: false,
            type: DataTypes.STRING
        },
        content: {
            allowNull: false,
            type: DataTypes.STRING
        },
        userId: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        published: {
            type: DataTypes.DATE,
        },
        updated: {
            type: DataTypes.DATE,
        }
    },{
        updatedAt: 'updated',
        createdAt: 'published',
        timestamps: true,
        tableName: 'blog_posts',
        underscored: true,
    });
    BlogsPosts.associate = (models) => {
        BlogsPosts.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user'  
        });
    }
    return BlogsPosts;
};

module.exports = BlogsPostsSchema;