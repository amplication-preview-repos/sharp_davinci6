import { ApprovalWorkflowCreateNestedManyWithoutPurchaseOrdersInput } from "./ApprovalWorkflowCreateNestedManyWithoutPurchaseOrdersInput";
import { InputJsonValue } from "../../types";

export type PurchaseOrderCreateInput = {
  approvalWorkflows?: ApprovalWorkflowCreateNestedManyWithoutPurchaseOrdersInput;
  items?: InputJsonValue;
  orderDate?: Date | null;
  orderNumber?: string | null;
  status?: "Option1" | null;
  totalAmount?: number | null;
};
