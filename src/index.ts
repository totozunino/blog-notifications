import { app } from "./app";
import { config } from "dotenv";
import { connect } from "amqplib";
import { createNotification } from "./services/notification_service";

config();

const PORT = 3001;

const consumer = async (): Promise<void> => {
  const connection = await connect("amqp://localhost");
  const channel = await connection.createChannel();
  await channel.assertQueue("NotificationsQueue");
  await channel.consume("NotificationsQueue", async (msg) => {
    if (msg !== null) {
      const notification = JSON.parse(msg.content.toString());
      await createNotification(notification);
      channel.ack(msg);
    }
  });
};

app.listen(PORT, async () => {
  await consumer();
  console.log(`Server running on port ${PORT}!`);
});
