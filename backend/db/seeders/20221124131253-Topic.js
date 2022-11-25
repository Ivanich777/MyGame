/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const Topic = [
      {
        name: 'Рекорды Гинесса',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Фильмы',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'О разном',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert('Topics', Topic);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete('Topics');
  },
};
