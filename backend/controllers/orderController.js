import sellModel from "../models/sellModel.js";
import fs from "fs";

// import multer from 'multer';
// const upload = multer({ dest: 'uploads/' });

export const sellOrderController = async (req, res) => {
  try {
    const { brand, model, spec, desc, condition } = req.body;
    // const { photo } = req.files;

    //validation
    switch (true) {
      case !brand:
        return res.status(500).send({ error: "Brand is Required" });
      case !desc:
        return res.status(500).send({ error: "Description is Required" });
      case !spec:
        return res.status(500).send({ error: "Specification is Required" });
      case !model:
        return res.status(500).send({ error: "Model is Required" });
      case !condition:
        return res.status(500).send({ error: "Condition is Required" });
      // case photo && photo.size > 1000000:
      //   return res
      //     .status(500)
      //     .send({ error: "Photo is Required and should be less then 1mb" });
    }

    const sellOrder = await new sellModel({
      brand,
      model,
      spec,
      desc,
      condition,
      seller: req.user._id,
    });
    // if (photo) {
    //   sellOrder.photo.data = fs.readFileSync(photo.path);
    //   sellOrder.photo.contentType = photo.type;
    // }

    await sellOrder.save();

    res.status(201).send({
      success: true,
      message: "Sell order initiated Successfully",
      sellOrder,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in creating sell order",
    });
  }
};

