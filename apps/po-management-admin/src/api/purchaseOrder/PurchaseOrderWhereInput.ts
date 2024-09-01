import { ApprovalWorkflowListRelationFilter } from "../approvalWorkflow/ApprovalWorkflowListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PurchaseOrderWhereInput = {
  approvalWorkflows?: ApprovalWorkflowListRelationFilter;
  id?: StringFilter;
  items?: JsonFilter;
  orderDate?: DateTimeNullableFilter;
  orderNumber?: StringNullableFilter;
  status?: "Option1";
  totalAmount?: FloatNullableFilter;
};
