import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import express, { response } from "express";
import Admin from "../Models/Admin.js";
import ItrenaryServicesTour from "../Models/ItrenaryServicesTour.js";
import ItrenaryServicesTransport from "../Models/ItrenaryServicesTransport.js";
import NotificationsAdmin from "../Models/NotificationsAdmin.js";
import notifyUsers from "../Utils/NotifyUser.js";
const app = express();
dotenv.config();

let success = null;

export const addTransportServices = async (req, res, next) => {
  //fetching data from request body
  let {
    transportId,
    priceIncludes,
    priceExcludes,
    services,
    completeInfo,
  } = req.body;

  let TransportServices;
  try {
    TransportServices = await ItrenaryServicesTransport.findOne({
      transportId: transportId,
    });
  } catch (error) {
    return next(error);
  }

  if (TransportServices) {
    return res
      .status(400)
      .json({ success: false, message: "TransportServices already existed" });
  }

  let servicesIT;
  try {
    servicesIT = new ItrenaryServicesTransport({
      transportId,
      priceIncludes,
      priceExcludes,
      services,
      completeInfo,
    });
    servicesIT = await servicesIT.save();
  } catch (error) {
    return next(error);
  }

  let date = new Date();
  let notificationAdmin = new NotificationsAdmin({
    accommodationName: "transport Service added Successfully",
    Category: "transport-Service Added",
    message: `New transport Service is added to our website is added to our site`,
    date,
  });
  await notificationAdmin.save();

  return res
    .status(200)
    .json({
      success: true,
      message: "Transport Services and itrenary is created",
      servicesIT: servicesIT,
    });
};
export const getTransportServicesIT = async (req, res, next) => {
  let ServicesIt;
  try {
    ServicesIt = await ItrenaryServicesTransport.find();
  } catch (error) {
    return next(error);
  }

  if (!ServicesIt) {
    success = false;
    return res
      .status(400)
      .json({ success, message: "no ServicesItrenary found in database" });
  }

  return res
    .status(200)
    .json({
      success: true,
      message: "here are your all ServicesIteranries of Transport",
      ServicesIt: ServicesIt,
    });
};
