import { ApprovalWorkflow } from "../approvalWorkflow/ApprovalWorkflow";
import { JsonValue } from "type-fest";

export type User = {
  approvalWorkflows?: Array<ApprovalWorkflow>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
