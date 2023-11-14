const validateBody = (req, res, next) => {
  const { body } = req;

  if (body.namePatient === undefined) {
    return res
      .status(400)
      .json({ message: "O nome do paciente é obrigatório!" });
  }

  if (body.namePatient === "") {
    return res.status(400).json({ message: "O nome não pode ser em branco!" });
  }

  next();
};

module.exports = { validateBody };

