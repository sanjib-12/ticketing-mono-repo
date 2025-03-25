import express from "express";

import { currentUSer } from "@sbmytickets/common";

const router = express.Router();

router.get("/api/users/currentuser", currentUSer, (req, res) => {
   res.send({ currentUser: req.currentUser || null });
});

export { router as currentUserRouter };
