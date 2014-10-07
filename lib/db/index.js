'use strict';

var fs = require('fs'),
    path = require('path'),
    logger = require('../logger'),
    config = require('../config'),
    Sequelize = require('sequelize'),
    _ = require('lodash'),
    sequelize = new Sequelize(config.get('db:database'),
                              config.get('db:username'),
                              config.get('db:password'),
                              _.extend(config.get('db:options'), {
                                logging: logger.debug
                              })),
    db = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js');
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

module.exports = _.extend({
  sequelize: sequelize,
  Sequelize: Sequelize
}, db);
