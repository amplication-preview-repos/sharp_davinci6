import { ApprovalWorkflowCreateNestedManyWithoutUsersInput } from "./ApprovalWorkflowCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  approvalWorkflows?: ApprovalWorkflowCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
