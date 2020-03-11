'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ZombieSchema extends Schema {
  up () {
    this.create('zombies', (table) => {
      table.increments()
      table.string('name', 240).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('zombies')
  }
}

module.exports = ZombieSchema
