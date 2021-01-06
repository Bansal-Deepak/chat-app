"use strict";
const bcrypt = require("bcrypt");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const salt = bcrypt.genSaltSync(10);
    const hash = await queryInterface.bulkInsert("Users", [
      {
        firstName: "Deepak",
        email: "dttt@gmail.com",
        lastName: "Bansal",
        password: bcrypt.hashSync("random", salt),
        gender: "male",
        avatar: "batman",
      },
      {
        firstName: "Honey",
        email: "dttt2@gmail.com",
        lastName: "Aggarwal",
        password: bcrypt.hashSync("random2", salt),
        gender: "male",
        avatar: "superman",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("Users", null, {});
  },
};
