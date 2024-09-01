import { PurchaseOrderWhereUniqueInput } from "../purchaseOrder/PurchaseOrderWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ApprovalWorkflowUpdateInput = {
  level?: number | null;
  purchaseOrder?: PurchaseOrderWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
