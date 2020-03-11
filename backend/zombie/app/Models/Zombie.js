'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Zombie extends Model {
	weapons () {
		return this.hasMany('App/Models/Weapon');
	}

	armors () {
		return this.hasMany('App/Models/armors');
	}
}

module.exports = Zombie
