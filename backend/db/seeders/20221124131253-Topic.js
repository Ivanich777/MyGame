/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const Topic = [
      {
        name: 'Theme 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Theme 2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Theme 3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Theme 4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    const Card = [
      {
        answer: '1',
        question: '2',
        cost: 300,
        topic_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answer: '1',
        question: '2',
        cost: 300,
        topic_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answer: '1',
        question: '2',
        cost: 300,
        topic_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert('Topics', Topic);
    await queryInterface.bulkInsert('Cards', Card);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Topics');
    await queryInterface.bulkInsert('Cards');
  },
};
