import express from "express";
import multer from "multer";
const upload = multer({ dest: 'uploads/' })

import {
  testController,
  registerController,
  loginController,
  forgotPasswordController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { getAllSellOrdersController, getHelpRequestController, getRepairRequestController, getSellOrdersController, helpRequestController, repairRequestController, sellOrderController, sellOrderStatusController, upgradeRequestController } from "../controllers/orderController.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || METHOD POST
router.post("/login", loginController);

//Forgot Password || POST
router.post("/forgot-password", forgotPasswordController)

//test route
router.get("/test", requireSignIn, isAdmin, testController);

//protected route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, getOrdersController);

//sell orders
router.get("/sellorders", requireSignIn, getSellOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

//all sell orders
router.get("/all-sell-orders", requireSignIn, isAdmin, getAllSellOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

//sell order status update
router.put(
  "/sell-order-status/:orderId",
  requireSignIn,
  isAdmin,
  sellOrderStatusController
);

//sell order
router.post("/sell-order", requireSignIn, upload.single('photo'), sellOrderController );

//help request
router.post("/help", helpRequestController);

//get help requests
router.get("/all-help",requireSignIn, isAdmin, getHelpRequestController);

//create repair request
router.post("/create-repair-request", requireSignIn, repairRequestController);

//create upgrade request
router.post("/create-upgrade-request", requireSignIn, upgradeRequestController);

//get all repair/upgrade request
router.get("/all-repair", requireSignIn, isAdmin, getRepairRequestController);

export default router;
