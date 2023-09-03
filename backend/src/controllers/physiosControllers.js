const physiosModel = require("../models/physiosModels");

const getAllPhysios = async (_req, res) => {
  const physios = await physiosModel.getAllPhysios();
  return res.status(200).json(physios);
};

module.exports = {
  getAllPhysios,
};
