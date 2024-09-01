import { ApprovalWorkflow } from "../approvalWorkflow/ApprovalWorkflow";
import { JsonValue } from "type-fest";

export type PurchaseOrder = {
  approvalWorkflows?: Array<ApprovalWorkflow>;
  createdAt: Date;
  id: string;
  items: JsonValue;
  orderDate: Date | null;
  orderNumber: string | null;
  status?: "Option1" | null;
  totalAmount: number | null;
  updatedAt: Date;
};
