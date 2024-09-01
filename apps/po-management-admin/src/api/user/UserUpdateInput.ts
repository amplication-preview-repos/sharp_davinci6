import { ApprovalWorkflowUpdateManyWithoutUsersInput } from "./ApprovalWorkflowUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  approvalWorkflows?: ApprovalWorkflowUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
