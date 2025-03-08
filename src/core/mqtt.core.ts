import mqtt, { MqttClient, IClientOptions } from "mqtt";
import { AppLogger } from "../logs/error.logs";

class MQTTService {
  private static instance: MQTTService;
  private mqttClient: MqttClient | null = null;
  private mqttOptions: IClientOptions | null = null;

  private constructor() {}

  public static getInstance(): MQTTService {
    if (!MQTTService.instance) {
      MQTTService.instance = new MQTTService();
    }
    return MQTTService.instance;
  }

  public async init() {
    const mqttOptions: IClientOptions = {
      host: process.env.MQTT_BROKER_URL,
      port: parseInt(process.env.MQTT_PORT || "8883", 10),
      protocol: "mqtt",
      username: process.env.MQTT_USERNAME_SERVER,
      password: process.env.MQTT_PASSWORD_SERVER,
      connectTimeout: 5000,
      reconnectPeriod: 1000,
      protocolVersion: 3,
      keepalive: 60,

      //   ca: Private_Key_Cert_Server,
      //   cert: clientCert,
      //   key: clientKey,
      rejectUnauthorized: false,
    };

    this.mqttClient = mqtt.connect(mqttOptions);

    this.mqttClient.on("connect", () => {
      console.log("Connected to MQTT broker");
    });

    this.mqttClient.on("error", (error) => {
      console.error("MQTT Client Error:", error);
      AppLogger.error("MQTT Client Error:", error);
    });
  }
}

const mqttService = MQTTService.getInstance();

export default mqttService;
