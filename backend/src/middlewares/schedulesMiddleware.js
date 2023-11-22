const validateBody = (req, res, next) => {
  const { body } = req;

  if (body.namePatient === "") {
    return res
      .status(400)
      .json({ message: "O nome do paciente é obrigatório!" });
  }

  next();
};

module.exports = { validateBody };

