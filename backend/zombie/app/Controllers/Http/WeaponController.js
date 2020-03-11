'use strict'
const Weapon = use('App/Models/Weapon');
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with weapons
 */
class WeaponController {
  /**
   * Show a list of all weapons.
   * GET weapons
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const weapons = await Weapon.all();
    return weapons;
  }


  /**
   * Create/save a new weapon.
   * POST weapons
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request }) {
    const data = request.only(['name', 'attack']);
    const weapon = await Weapon.create({...data});

    return weapon;
  }

  /**
   * Display a single weapon.
   * GET weapons/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const weapon = await Weapon.findOrFail(params.id)
    return weapon;
  }


  /**
   * Update weapon details.
   * PUT or PATCH weapons/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const weapon = await Weapon.findOrFail(params.id);
    const data = request.only(["name", "attack"]);
    
    weapon.merge(data);
    await weapon.save();
    
    return weapon
  }

  /**
   * Delete a weapon with id.
   * DELETE weapons/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params }) {
    const weapon = await Weapon.findOrFail(params.id)
    await weapon.delete();
  }
}

module.exports = WeaponController
