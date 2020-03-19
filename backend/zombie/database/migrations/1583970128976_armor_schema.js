'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ArmorSchema extends Schema {
  up () {
    this.create('armors', (table) => {
      table.increments()
      table.string('name', 240).notNullable()
      table.integer('defense').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('armors')
  }
}

module.exports = ArmorSchema
