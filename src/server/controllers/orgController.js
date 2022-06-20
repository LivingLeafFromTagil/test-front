const {Org} = require('../models/models');
const ApiError = require('../error/apiError');

class OrgController {
  //добавление организации
  async addOrg(req, res) {
    const {name, tin, info, userId, leaderId, regionId, categoryId} = req.body;
    const org = await Org.create({name, tin, info, userId, leaderId, regionId, categoryId});
    return res.json(org);
  }

  //получение списка организаций
  async getOrgList(req, res) {
    let {limit, page} = req.body;
    page = page || 1;
    limit = limit || 5;
    let offset = page * limit - limit;
    // const orgs = await Org.findAll({limit, offset});
    const orgs = await Org.findAll();
    return res.json(orgs);
  }

  //получение информации о конкретной организации
  async getOrg(req, res, next) {
    const {id} = req.params;
    const org = await Org.findOne({where: {id}});
    if (!org) {
      return next(ApiError.badRequest('Invalid ID'));
    }
    return res.json(org);
  }

  async deleteOrg(req, res, next) {
    const {id} = req.params;
    const org = await Org.findOne({where: {id}});
    if (!org) {
      return next(ApiError.badRequest('Invalid ID'));
    }
    await Org.destroy({where:{id}});
    return res.json({message: `${org.name} was deleted`});
  }
}

module.exports = new OrgController();