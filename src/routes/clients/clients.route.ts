import express from "express";
import { createClient } from "../../validator/clients.validator";
import * as clientService from "./clients.service";

const router = express.Router();

router.post("/", [createClient], clientService.createClient);

export default router;
