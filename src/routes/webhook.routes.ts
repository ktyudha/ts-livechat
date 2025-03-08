import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
  const data = req.body;
  console.log(" Received webhook", data);

  res.status(200).send("Webhook received");
});

router.get("/", (req, res) => {
  console.log(" Received webhook");

  res.status(200).send("Webhook received");
});

export { router };
