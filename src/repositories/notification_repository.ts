import { Notification } from "../models/notification";

export const create = async (
  notification: Partial<Notification>
): Promise<Notification> => {
  return await Notification.query().insert(notification);
};
