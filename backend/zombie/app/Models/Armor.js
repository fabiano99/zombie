'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Armor extends Model {
	zombies () {
		return this.belongsToMany('App/Models/Zombie');
	}
}

module.exports = Armor
