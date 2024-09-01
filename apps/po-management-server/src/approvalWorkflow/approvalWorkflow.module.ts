import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ApprovalWorkflowModuleBase } from "./base/approvalWorkflow.module.base";
import { ApprovalWorkflowService } from "./approvalWorkflow.service";
import { ApprovalWorkflowController } from "./approvalWorkflow.controller";
import { ApprovalWorkflowResolver } from "./approvalWorkflow.resolver";

@Module({
  imports: [ApprovalWorkflowModuleBase, forwardRef(() => AuthModule)],
  controllers: [ApprovalWorkflowController],
  providers: [ApprovalWorkflowService, ApprovalWorkflowResolver],
  exports: [ApprovalWorkflowService],
})
export class ApprovalWorkflowModule {}
