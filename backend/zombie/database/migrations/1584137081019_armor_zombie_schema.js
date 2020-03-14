'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ArmorZombieSchema extends Schema {
  up () {
    this.create('armor_zombie', (table) => {
      table.increments()
      table
        .integer('zombie_id')
        .unsigned()
        .index('zombie_id')
      table
        .foreign('zombie_id')
        .references('zombies.id')
        .onDelete('cascade')
      table
        .integer('armor_id')
        .unsigned()
        .index('armor_id')
      table
        .foreign('armor_id')
        .references('armors.id')
        .onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('armor_zombie')
  }
}

module.exports = ArmorZombieSchema
