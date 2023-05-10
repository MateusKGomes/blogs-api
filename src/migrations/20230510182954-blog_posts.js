'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('blog_posts',
      {
        id: {
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        title: {
          type: Sequelize.STRING,
        },
        content: {
          type: Sequelize.STRING,
        },
          user_id: {
            type: Sequelize.INTEGER,
            references: {
              model: 'users',
              key: 'id',
            },
            onDelete: 'CASCADE',
        },
        published: {
          type: Sequelize.DATE,
        },
        updated: {
          type: Sequelize.DATE,

        }
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('blog_posts');
  }
};
