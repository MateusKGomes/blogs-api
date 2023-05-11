/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */

const BlogsPostsSchema = (sequelize, DataTypes) => {
    const PostsCategories = sequelize.define('PostCategory', {
        postId: {
            primaryKey: true,
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        categoryId: {
            primaryKey: true,
            allowNull: false,
            type: DataTypes.INTEGER,
        },
    }, {
        timestamps: false,
        tableName: 'posts_categories',
        underscored: true,
    });
    PostsCategories.associate = (models) => {
        models.Category.belongsToMany(models.BlogPost, {
            as: 'blogPosts',
            through: PostsCategories,
            foreignKey: 'postId',
            otherKey: 'categoryId'
        });
        models.BlogPost.belongsToMany(models.Category, {
            as: 'categories',
            through: PostsCategories,
            foreignKey: 'categoryId',
            otherKey: 'postId'
        });
    }
    return PostsCategories;
};

module.exports = BlogsPostsSchema;