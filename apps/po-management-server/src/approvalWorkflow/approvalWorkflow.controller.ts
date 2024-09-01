import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ApprovalWorkflowService } from "./approvalWorkflow.service";
import { ApprovalWorkflowControllerBase } from "./base/approvalWorkflow.controller.base";

@swagger.ApiTags("approvalWorkflows")
@common.Controller("approvalWorkflows")
export class ApprovalWorkflowController extends ApprovalWorkflowControllerBase {
  constructor(
    protected readonly service: ApprovalWorkflowService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
