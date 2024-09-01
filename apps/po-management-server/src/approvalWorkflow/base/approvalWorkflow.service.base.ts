/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  ApprovalWorkflow as PrismaApprovalWorkflow,
  PurchaseOrder as PrismaPurchaseOrder,
  User as PrismaUser,
} from "@prisma/client";

export class ApprovalWorkflowServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ApprovalWorkflowCountArgs, "select">
  ): Promise<number> {
    return this.prisma.approvalWorkflow.count(args);
  }

  async approvalWorkflows(
    args: Prisma.ApprovalWorkflowFindManyArgs
  ): Promise<PrismaApprovalWorkflow[]> {
    return this.prisma.approvalWorkflow.findMany(args);
  }
  async approvalWorkflow(
    args: Prisma.ApprovalWorkflowFindUniqueArgs
  ): Promise<PrismaApprovalWorkflow | null> {
    return this.prisma.approvalWorkflow.findUnique(args);
  }
  async createApprovalWorkflow(
    args: Prisma.ApprovalWorkflowCreateArgs
  ): Promise<PrismaApprovalWorkflow> {
    return this.prisma.approvalWorkflow.create(args);
  }
  async updateApprovalWorkflow(
    args: Prisma.ApprovalWorkflowUpdateArgs
  ): Promise<PrismaApprovalWorkflow> {
    return this.prisma.approvalWorkflow.update(args);
  }
  async deleteApprovalWorkflow(
    args: Prisma.ApprovalWorkflowDeleteArgs
  ): Promise<PrismaApprovalWorkflow> {
    return this.prisma.approvalWorkflow.delete(args);
  }

  async getPurchaseOrder(
    parentId: string
  ): Promise<PrismaPurchaseOrder | null> {
    return this.prisma.approvalWorkflow
      .findUnique({
        where: { id: parentId },
      })
      .purchaseOrder();
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.approvalWorkflow
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}