'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class WeaponZombieSchema extends Schema {
  up () {
    this.create('weapon_zombie', (table) => {
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
        .integer('weapon_id')
        .unsigned()
        .index('weapon_id')
      table
        .foreign('weapon_id')
        .references('weapons.id')
        .onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('weapon_zombie')
  }
}

module.exports = WeaponZombieSchema
