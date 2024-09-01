import { PurchaseOrder } from "../purchaseOrder/PurchaseOrder";
import { User } from "../user/User";

export type ApprovalWorkflow = {
  createdAt: Date;
  id: string;
  level: number | null;
  purchaseOrder?: PurchaseOrder | null;
  updatedAt: Date;
  user?: User | null;
};
