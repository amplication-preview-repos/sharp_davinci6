import { ApprovalWorkflow as TApprovalWorkflow } from "../api/approvalWorkflow/ApprovalWorkflow";

export const APPROVALWORKFLOW_TITLE_FIELD = "id";

export const ApprovalWorkflowTitle = (record: TApprovalWorkflow): string => {
  return record.id?.toString() || String(record.id);
};
