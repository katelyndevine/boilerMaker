const Sequelize = require("sequelize");

const db = new Sequelize("postgres://localhost:5432/boilermaker", {
  logging: false, // unless you like the logs
  // ...and there are many other options you may want to play with
});

const Puppies = db.define("puppies", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  breed: {
    type: Sequelize.STRING,
    defaultValue: "Mixed-breed",
  },
  age: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

const Owners = db.define("owners", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Owners.hasMany(Puppies);
Puppies.belongsTo(Owners);

module.exports = {
  db,
  Puppies,
  Owners,
};
