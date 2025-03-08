import express from "express";
import atob from "atob";
const router = express.Router();

router.post("/", (req, res) => {
  const data = req.body;
  // console.log("Received webhook:", JSON.stringify(data, null, 2));

  // if (data.uplink_message) {
  //   const uplink = data.uplink_message;

  //   // Parsing RSSI, SNR, dan metadata
  //   if (uplink.rx_metadata && uplink.rx_metadata.length > 0) {
  //     const metadata = uplink.rx_metadata[0]; // Ambil metadata pertama (bisa ada lebih dari 1)
  //     console.log("📡 RSSI:", metadata.rssi);
  //     console.log("📶 SNR:", metadata.snr);
  //   } else {
  //     console.log("⚠️ No rx_metadata found in the request");
  //   }

  //   // Decode payload jika dalam Base64
  //   if (uplink.frm_payload) {
  //     try {
  //       const decodedPayload = atob(uplink.frm_payload);
  //       console.log("📦 Decoded Payload:", decodedPayload);
  //       // Coba parse jika JSON
  //       try {
  //         const parsedPayload = JSON.parse(decodedPayload);
  //         console.log("📊 Parsed JSON Payload:", parsedPayload);
  //       } catch (err) {
  //         console.log("🔍 Payload is not JSON format");
  //       }
  //     } catch (err) {
  //       console.error("❌ Error decoding payload:");
  //     }
  //   } else {
  //     console.log("⚠️ No payload found");
  //   }
  // } else {
  //   console.log("⚠️ No uplink_message found in the request");
  // }

  // console.log(JSON.stringify(data, null, 2));
  const downlink = data.downlink_sent;
  const uplink = data.uplink_message;

  if (downlink.frm_payload) {
    const decodedPayload = atob(downlink.frm_payload);
    console.log(JSON.parse(decodedPayload));
  }

  if (uplink) {
    console.log(uplink);
  }

  res.status(200).send("Webhook received");
});

router.get("/", (req, res) => {
  console.log(" Received webhook");

  res.status(200).send("Webhook received");
});

export { router };
