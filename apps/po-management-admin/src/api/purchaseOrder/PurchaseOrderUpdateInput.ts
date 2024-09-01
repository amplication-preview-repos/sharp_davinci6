import { ApprovalWorkflowUpdateManyWithoutPurchaseOrdersInput } from "./ApprovalWorkflowUpdateManyWithoutPurchaseOrdersInput";
import { InputJsonValue } from "../../types";

export type PurchaseOrderUpdateInput = {
  approvalWorkflows?: ApprovalWorkflowUpdateManyWithoutPurchaseOrdersInput;
  items?: InputJsonValue;
  orderDate?: Date | null;
  orderNumber?: string | null;
  status?: "Option1" | null;
  totalAmount?: number | null;
};
