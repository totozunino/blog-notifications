import { Notification } from "../models/notification";
import { create } from "../repositories/notification_repository";

export const createNotification = async (
  notification: Partial<Notification>
): Promise<void> => {
  await create(notification);
};
