var express = require('express');
var router = express.Router();
const db = require("../model/helper");
const itemMustExist = require("../guards/itemMustExist");
const typeMustExist = require("../guards/typeMustExist")


router.get('/', function(req, res, next) {
  db("SELECT * FROM items;")
  .then(results => {
  res.send(results.data);
  })

  .catch(err => res.status(500).send(err));
});

//ADD ITEM
router.post('/', async function (req, res, next) {
  try {
    const {type, image, era, maker, colour, material, paid, description, 
    for_sale} = req.body;

    await db ( `INSERT INTO items (type, image, era, maker, colour, material, 
      paid, description, for_sale) VALUES ("${type}", "${image}", "${era}", "${maker}",
      "${colour}", "${material}", "${paid}", "${description}", "${for_sale}");`);

      res.status(201).send({ message: "Item added!" });
  } catch (error) {
    res.status(500).send(error);
  }
 });

// //Get list of all categories
router.get("/type", async function (req, res, next) {
  try{
    const results = await db("SELECT DISTINCT type FROM items;")
    res.send(results.data);
  } catch(err){
    res.status(500).send(err);
  }})

// //Get list of items and image by type
router.get("/type/:text", typeMustExist, async function (req, res, next){
  try {
    const { text } = req.params;
    await db(`SELECT image FROM items WHERE type IN ('${text}');`);
    const results = await db(`SELECT image FROM items WHERE type IN ('${text}');`);
    res.send(results.data)
  } catch(err) {
    res.status(500).send(err);
  }
});


// //Get all info of single item by id
router.get("/:id", itemMustExist, async function (req, res, next){
  try {
    const { id } = req.params;
    await db(`SELECT * FROM items WHERE id = ${id};`);
    const results = await db(`SELECT * FROM items WHERE id = ${id};`);
    res.send(results.data)
  } catch(err) {
    res.status(500).send(err);
  }
});

// //Delete item
router.delete("/:id", itemMustExist, async function (req, res, next){
  try {
    const { id } = req.params;
    await db(`DELETE FROM items WHERE id = ${id};`);
    const results = await db(`DELETE FROM items WHERE id = ${id};`);
    res.send(results.data)
  } catch(err) {
    res.status(500).send(err);
  }
});

module.exports = router;
