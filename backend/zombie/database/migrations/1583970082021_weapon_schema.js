'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class WeaponSchema extends Schema {
  up () {
    this.create('weapons', (table) => {
      table.increments()
      table.string('name', 240).notNullable()
      table.integer('attack').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('weapons')
  }
}

module.exports = WeaponSchema
