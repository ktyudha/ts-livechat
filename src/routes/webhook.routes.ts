import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
  const data = req.body;
  console.log("Received webhook:", JSON.stringify(data, null, 2));

  // if (data.uplink_message && data.uplink_message.rx_metadata) {
  //   console.log(
  //     "📡 rx_metadata:",
  //     JSON.stringify(data.uplink_message.rx_metadata, null, 2)
  //   );
  // } else {
  //   console.log("⚠️ No rx_metadata found in the request");
  // }

  res.status(200).send("Webhook received");
});

router.get("/", (req, res) => {
  console.log(" Received webhook");

  res.status(200).send("Webhook received");
});

export { router };
