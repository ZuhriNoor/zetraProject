import sellModel from "../models/sellModel.js";
import helpModel from "../models/helpModel.js";
import fs from "fs";
import repairModel from "../models/repairModel.js";

// import multer from 'multer';
// const upload = multer({ dest: 'uploads/' });

//create sell order
export const sellOrderController = async (req, res) => {
  try {
    const { brand, model, spec, desc, condition, donate } = req.body;
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
      donate,
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

//get orders
export const getSellOrdersController = async (req, res) => {
  try {
    const orders = await sellModel
      .find({ seller: req.user._id })
      .populate("brand", "-photo")
      .populate("model", "spec")
      .populate("desc")
      .populate("donate")
      .populate("seller")
      .sort({ createdAt: "-1" });
    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error While Getting Sell Orders",
      error,
    });
  }
};

//get all sell order
export const getAllSellOrdersController = async (req, res) => {
  try {
    const sellOrders = await sellModel
      .find({})
      .populate("brand", "-photo")
      .populate("model", "spec")
      .populate("desc","donate")

      .populate("seller", "name")
      .sort({ createdAt: "-1" });
    res.json(sellOrders);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error While Getting Sell Orders",
      error,
    });
  }
};

//sell order status
export const sellOrderStatusController = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;
    const sellOrders = await sellModel.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );
    res.json(sellOrders);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error While Updating Sell Order",
      error,
    });
  }
};

export const helpRequestController = async (req, res) => {
  try {
    const { name, email, phone, desc } = req.body;

    //validation
    switch (true) {
      case !name:
        return res.status(500).send({ error: "Name is Required" });
      case !email:
        return res.status(500).send({ error: "Email is Required" });
      case !phone:
        return res.status(500).send({ error: "Phone is Required" });
      case !desc:
        return res.status(500).send({ error: "Description is Required" });
    }

    const helpRequest = await new helpModel({
      name,
      email,
      phone,
      desc,
    });

    await helpRequest.save();

    res.status(201).send({
      success: true,
      message: "Help request sent Successfully",
      helpRequest,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in sending help request",
    });
  }
};

export const getHelpRequestController = async (req, res) => {
  try {
    const helpRequest = await helpModel
      .find({})
      .populate("name", "email")
      .populate("phone", "desc")
      .sort({ createdAt: "-1" });
    res.json(helpRequest);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error While Getting Sell Orders",
      error,
    });
  }
};

export const repairRequestController = async (req, res) => {
  try {
    const { model, category, description, phone } = req.body;

    //validation
    switch (true) {
      case !category:
        return res.status(500).send({ error: "Name is Required" });
        case !model:
        return res.status(500).send({ error: "Model is Required" });
      case !description:
        return res.status(500).send({ error: "Email is Required" });
    }

    const repairRequest = await new repairModel({
      model,
      category,
      description,
      phone,
      buyer: req.user._id,
      type: "Repair"
    });

    await repairRequest.save();

    res.status(201).send({
      success: true,
      message: "Repair request sent Successfully",
      repairRequest,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in sending repair request",
    });
  }
};

export const upgradeRequestController = async (req, res) => {
  try {
    const { model, category, description, phone } = req.body;

    //validation
    switch (true) {
      case !category:
        return res.status(500).send({ error: "Name is Required" });
        case !model:
        return res.status(500).send({ error: "Model is Required" });
      case !description:
        return res.status(500).send({ error: "Email is Required" });
    }

    const repairRequest = await new repairModel({
      model,
      category,
      description,
      phone,
      buyer: req.user._id,
      type: "Upgrade"
    });

    await repairRequest.save();

    res.status(201).send({
      success: true,
      message: "Upgrade request sent Successfully",
      repairRequest,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in sending upgrade request",
    });
  }
};

//get all repair requests
export const getRepairRequestController = async (req, res) => {
  try {
    const helpRequest = await repairModel
      .find({})
      .populate("buyer", "name")
      .populate("model", "description")
      .populate("phone", "type")
      .populate("createdAt")
      .sort({ createdAt: "-1" });
    res.json(helpRequest);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error While Getting Sell Orders",
      error,
    });
  }
};