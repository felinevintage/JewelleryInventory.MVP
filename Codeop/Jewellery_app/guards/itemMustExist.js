const db = require("../model/helper");

async function itemMustExist(req, res, next) {
  try {
    const { id } = req.params;

    const exists = await db(`SELECT * FROM items WHERE id = ${id}`);

    if (exists.data.length) {
      next();
    } else {
      res.status(404).send({ message: "Item not found." });
    }
  } catch (err) {
    res.status(500).send(err);
  }
}

module.exports = itemMustExist;