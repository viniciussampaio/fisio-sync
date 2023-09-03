const connection = require("./connection");

const getAllPhysios = async () => {
  const [allPhysios] = await connection.execute(
    "SELECT * from physios ORDER BY idPhysio ASC"
  );
  return allPhysios;
};

module.exports = { getAllPhysios };
