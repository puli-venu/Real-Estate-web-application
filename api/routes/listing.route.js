import express from "express";
import { createListing } from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";
import { deleteListing } from "../controllers/listing.controller.js";
import {getListing } from "../controllers/listing.controller.js";
import { updateListing } from "../controllers/listing.controller.js";

const listingRouter=express.Router();

listingRouter.post("/create",verifyToken,createListing);
listingRouter.delete("/delete/:id",verifyToken,deleteListing);
listingRouter.post("/update/:id",verifyToken,updateListing);
listingRouter.get("/get/:id",getListing)//verifyToken is not needed becuase listings should be displayed to all as public

export default listingRouter