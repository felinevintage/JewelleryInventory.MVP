const db = require("../model/helper");

async function typeMustExist(req, res, next) {
  try {
    const { text } = req.params;

    const exists = await db(`SELECT image FROM items WHERE type IN ('${text}');`);

    if (exists.data.length) {
      next();
    } else {
      res.status(404).send({ message: "Type not found." });
    }
  } catch (err) {
    res.status(500).send(err);
  }
}

module.exports = typeMustExist;