import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import AdminRoutes from "./Routes/Admin-Routes.js";
import bodyParser from "body-parser";
import CategoryRoutes from "./Routes/Category-Routes.js";
import TourRoutes from "./Routes/Tour-Routes.js";
import ServiceItrenaryRoutes from "./Routes/TourServices-Routes.js";
import { config } from "dotenv";
config();
import mongoose from "mongoose";
import cors from "cors";
import UserRoutes from "./Routes/User-Routes.js";
import HotelRoutes from "./Routes/Hotel-Routes.js";
import RoomRoutes from "./Routes/Room-Routes.js";
import TransportRoutes from "./Routes/Transport-Routes.js";
import TourServiceRoutes from "./Routes/TourServices-Routes.js";
import HotelServicesRoutes from "./Routes/HotelServices-Routes.js";
import TransportServicesRoutes from "./Routes/TransportServices-Routes.js";
import UserFavoriteRoutes from "./Routes/UserFavrt-Routes.js";
import NotificationRoutes from "./Routes/Notification-Routes.js";
import BillRoutes from "./Routes/Bill-Routes.js";
import ReviewsRoutes from "./Routes/Review-Routes.js";
import BlogRoutes from "./Routes/Blog-Routes.js";
import connectDB from "./Db.js";

const DB = process.env.MONGOURI;
const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors({ origin: "*", credentials: true }));

app.get("/", (req, res) => {
  try {
    res.json({ message: "hey bro" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.use("/Admin", AdminRoutes);
app.use("/Review", ReviewsRoutes);
app.use("/Notification", NotificationRoutes);
app.use("/User", UserRoutes);
app.use("/UserFavrt", UserFavoriteRoutes);
app.use("/Tour", TourRoutes);
app.use("/Blog", BlogRoutes);
app.use("/Bill", BillRoutes);
app.use("/Hotel", HotelRoutes);
app.use("/Room", RoomRoutes);
app.use("/Transport", TransportRoutes);
app.use("/Category", CategoryRoutes);
app.use("/ToServicesIt", TourServiceRoutes);
app.use("/HoServicesIt", HotelServicesRoutes);
app.use("/TrServicesIt", TransportServicesRoutes);

// Export the Express app
export default app;
