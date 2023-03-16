'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Songs', [{
      title_song: 'Chú voi con ở bản Đôn',
      image: '123.png',
      lyric: 'Chú voi con ở bản Đôn Chú voi con ở bản Đôn Chú voi con ở bản Đôn',
      url_song: 'song1.url',
      artist_id: 1,
      album_id: 1,
      category_id: 1,
      release_date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Songs', null, {});
  }
};
