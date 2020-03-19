'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Zombie extends Model {
	weapons () {
		return this.belongsToMany('App/Models/Weapon');
	}

	armors () {
		return this.belongsToMany('App/Models/Armor');
	}
}

module.exports = Zombie
