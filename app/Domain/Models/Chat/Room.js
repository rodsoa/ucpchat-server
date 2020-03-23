'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Room extends Model {

  /**
    * Set table name manually
    */
  static get table () {
    return 'rooms';
  }

}

module.exports = Room;
