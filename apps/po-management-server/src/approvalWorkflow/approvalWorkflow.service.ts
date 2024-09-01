import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ApprovalWorkflowServiceBase } from "./base/approvalWorkflow.service.base";

@Injectable()
export class ApprovalWorkflowService extends ApprovalWorkflowServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
