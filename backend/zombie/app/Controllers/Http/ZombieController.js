'use strict'
const Zombie = use('App/Models/Zombie');
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with zombies
 */
class ZombieController {
  /**
   * Show a list of all zombies.
   * GET zombies
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const zombie = await Zombie.all();
    return zombie;
  }

  /**
   * Create/save a new zombie.
   * POST zombies
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, params, response }) {
    const { name, weapons, armors } = request.post();
    const zombie = await Zombie.create({ name });

    if(weapons && weapons.length > 0) {
      await zombie.weapons().attach(weapons)
      await zombie.load('weapons')
    }

    if(armors && armors.length > 0) {
      await zombie.armors().attach(armors)
      await zombie.load('armors')
    }

    return zombie;
  }

  /**
   * Display a single zombie.
   * GET zombies/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const  zombie  = await Zombie.findOrFail(params.id);
    const weapons = await zombie.weapons().fetch();
    const armors = await zombie.armors().fetch();
    zombie.weapons = weapons;
    zombie.armors = armors;
    return zombie;
  }

  /**
   * Update zombie details.
   * PUT or PATCH zombies/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request }) {
    const zombie = await Zombie.findOrFail(params.id);

    const {name, weapons, armors} = request.only(["name","weapons", "armors"]);

    zombie.merge({name});
    await zombie.save();

    if(weapons && weapons.length > 0) {
      await zombie.weapons().detach()
      await zombie.weapons().attach(weapons)
      await zombie.load('weapons')
    }

    if(armors && armors.length > 0) {
      await zombie.armors().detach()
      await zombie.armors().attach(armors)
      await zombie.load('armors')
    }
    
    return zombie
  }

  /**
   * Delete a zombie with id.
   * DELETE zombies/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const zombie = await Zombie.findOrFail(params.id)
    await zombie.delete();
  }
}

module.exports = ZombieController
