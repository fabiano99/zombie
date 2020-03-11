'use strict'
const Armor = use('App/Models/Armor');
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with armors
 */
class ArmorController {
  /**
   * Show a list of all armors.
   * GET armors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const armors = await Armor.all();
    return armors;
  }


  /**
   * Create/save a new armor.
   * POST armors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request }) {
    const data = request.only(['name', 'defense']);
    const armor = await Armor.create({...data});

    return armor;
  }

  /**
   * Display a single armor.
   * GET armors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const armor = await Armor.findOrFail(params.id)
    return armor;
  }


  /**
   * Update armor details.
   * PUT or PATCH armors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request }) {
    const armor = await Armor.findOrFail(params.id);
    const data = request.only(["name", "defense"]);
    
    armor.merge(data);
    await armor.save();
    
    return armor
  }

  /**
   * Delete a armor with id.
   * DELETE armors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params }) {
    const armor = await Armor.findOrFail(params.id)
    await armor.delete();
  }
}

module.exports = ArmorController
