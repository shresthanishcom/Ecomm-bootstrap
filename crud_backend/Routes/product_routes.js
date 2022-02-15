const express = require("express");
const Mongoose = require("mongoose");
const router = express.Router();
const productModel = require("../Models/product_model");

router.get("/", async (req, res) => {
  try {
    const user = await userModel.find();
    return res.status(200).send(user);
  } catch (err) {
    console.log(err);
  }
});

router.post("/new", async (req, res) => {
  try {
    const { name, age } = req.body;

    //instance of a model is document
    const userDocument = new userModel({
      name,
      age,
    });
    await userDocument.save();
    return res.status(200).json(userDocument);
  } catch (err) {
    console.log(err);
    return res.status(400).json("error occured");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    console.log("given from backend");
    return res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
});

router.put("/edit/:id", async (req, res) => {
  const value = req.body;
  console.log("received from user:", value);
  console.log("param id:", req.body._id);

  const id = Mongoose.Types.ObjectId(req.body._id);

  try {
    await userModel
      .updateOne({ _id: id }, { $set: { name: value.name } })
      .then((data) => {
        console.log(data);
        res.send("ok updated");
      })
      .catch((err) => console.log(err));
  } catch (err) {
    console.log("eror while updating ", err);
  }
});

router.delete("/remove/:id", async (req, res) => {
  const id = Mongoose.Types.ObjectId(req.params._id);

  try {
    const user = await userModel
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
