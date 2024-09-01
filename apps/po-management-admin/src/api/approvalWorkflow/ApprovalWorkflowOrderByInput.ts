import { SortOrder } from "../../util/SortOrder";

export type ApprovalWorkflowOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  level?: SortOrder;
  purchaseOrderId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
