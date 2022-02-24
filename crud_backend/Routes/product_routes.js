const express = require("express");
const Mongoose = require("mongoose");
const router = express.Router();
const productModel = require("../Models/product_model");

router.get("/hotdeals", async (req, res) => {
  //getting random from database
  try {
    const user = await productModel.find();
    return res.status(200).send(user);
  } catch (err) {
    console.log(err);
  }
});
router.get("/lists", async (req, res) => {
  try {
    const lists = await productModel.find({}, { name: 1 });
    res.status(200).json(lists);
  } catch (err) {
    res.status(400).send("error occured in fetching lists backend");
    console.log("catched error", err);
  }
});

router.get("/newproducts", async (req, res) => {
  //getting all from database and randomizing
  try {
    const user = await productModel.find();
    let i = Math.floor(Math.random() * 5);
    console.log(i);
    const randomUser = user.filter((user, index) => {
      if (i === index) {
        i += 2;
        return user;
      }
    });
    return res.status(200).send(randomUser);
  } catch (err) {
    console.log(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const user = await productModel.find();
    return res.status(200).send(user);
  } catch (err) {
    console.log(err);
  }
});

router.post("/addnew", async (req, res) => {
  try {
    const { name, price, description, type, image } = req.body;

    //instance of a model is document it is just a ///instance object and doesnot link with server until //you document.save() it

    const userDocument = new productModel({
      name,
      price,
      description,
      type,
      image,
    });
    userDocument.save();
    return res.status(200).json(userDocument);
  } catch (err) {
    console.log(err);
    return res.status(400).json("error occured while creating new");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await productModel.findById(req.params.id);
    return res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
});

router.put("/edit", async (req, res) => {
  const { name, price, description, type } = req.body;

  try {
    const id = Mongoose.Types.ObjectId(req.body._id);
    const updatedData = await productModel
      .updateOne({ _id: id }, { $set: { name, description, type, price } })
      .then((data) => {
        console.log(data);
        res.status(200).send(req.body);
      })
      .catch((err) => {
        console.log(" while updating error", err);
        res.status(400).send("cannot be updated");
      });
  } catch (err) {
    res.status(400).send("eror while updating check id type");
    console.log("   eror while updating check id type", err);
  }
});

router.delete("/remove/:id", async (req, res) => {
  const id = Mongoose.Types.ObjectId(req.params._id);

  try {
    const user = await productModel
      .findOneAndDelete(id)
      .then((data) => {
        return res.status(200).send("deleted");
      })
      .catch((err) => {
        console.log("err in delete", err);
        return res.status(400).send("error in delete");
      });
  } catch (err) {}
});

module.exports = router;
