import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ApprovalWorkflowResolverBase } from "./base/approvalWorkflow.resolver.base";
import { ApprovalWorkflow } from "./base/ApprovalWorkflow";
import { ApprovalWorkflowService } from "./approvalWorkflow.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ApprovalWorkflow)
export class ApprovalWorkflowResolver extends ApprovalWorkflowResolverBase {
  constructor(
    protected readonly service: ApprovalWorkflowService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
