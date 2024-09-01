import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { PurchaseOrderWhereUniqueInput } from "../purchaseOrder/PurchaseOrderWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ApprovalWorkflowWhereInput = {
  id?: StringFilter;
  level?: IntNullableFilter;
  purchaseOrder?: PurchaseOrderWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
