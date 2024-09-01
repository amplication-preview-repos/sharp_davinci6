/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { PurchaseOrder } from "./PurchaseOrder";
import { PurchaseOrderCountArgs } from "./PurchaseOrderCountArgs";
import { PurchaseOrderFindManyArgs } from "./PurchaseOrderFindManyArgs";
import { PurchaseOrderFindUniqueArgs } from "./PurchaseOrderFindUniqueArgs";
import { CreatePurchaseOrderArgs } from "./CreatePurchaseOrderArgs";
import { UpdatePurchaseOrderArgs } from "./UpdatePurchaseOrderArgs";
import { DeletePurchaseOrderArgs } from "./DeletePurchaseOrderArgs";
import { ApprovalWorkflowFindManyArgs } from "../../approvalWorkflow/base/ApprovalWorkflowFindManyArgs";
import { ApprovalWorkflow } from "../../approvalWorkflow/base/ApprovalWorkflow";
import { PurchaseOrderService } from "../purchaseOrder.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PurchaseOrder)
export class PurchaseOrderResolverBase {
  constructor(
    protected readonly service: PurchaseOrderService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "PurchaseOrder",
    action: "read",
    possession: "any",
  })
  async _purchaseOrdersMeta(
    @graphql.Args() args: PurchaseOrderCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [PurchaseOrder])
  @nestAccessControl.UseRoles({
    resource: "PurchaseOrder",
    action: "read",
    possession: "any",
  })
  async purchaseOrders(
    @graphql.Args() args: PurchaseOrderFindManyArgs
  ): Promise<PurchaseOrder[]> {
    return this.service.purchaseOrders(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => PurchaseOrder, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PurchaseOrder",
    action: "read",
    possession: "own",
  })
  async purchaseOrder(
    @graphql.Args() args: PurchaseOrderFindUniqueArgs
  ): Promise<PurchaseOrder | null> {
    const result = await this.service.purchaseOrder(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PurchaseOrder)
  @nestAccessControl.UseRoles({
    resource: "PurchaseOrder",
    action: "create",
    possession: "any",
  })
  async createPurchaseOrder(
    @graphql.Args() args: CreatePurchaseOrderArgs
  ): Promise<PurchaseOrder> {
    return await this.service.createPurchaseOrder({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PurchaseOrder)
  @nestAccessControl.UseRoles({
    resource: "PurchaseOrder",
    action: "update",
    possession: "any",
  })
  async updatePurchaseOrder(
    @graphql.Args() args: UpdatePurchaseOrderArgs
  ): Promise<PurchaseOrder | null> {
    try {
      return await this.service.updatePurchaseOrder({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => PurchaseOrder)
  @nestAccessControl.UseRoles({
    resource: "PurchaseOrder",
    action: "delete",
    possession: "any",
  })
  async deletePurchaseOrder(
    @graphql.Args() args: DeletePurchaseOrderArgs
  ): Promise<PurchaseOrder | null> {
    try {
      return await this.service.deletePurchaseOrder(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [ApprovalWorkflow], { name: "approvalWorkflows" })
  @nestAccessControl.UseRoles({
    resource: "ApprovalWorkflow",
    action: "read",
    possession: "any",
  })
  async findApprovalWorkflows(
    @graphql.Parent() parent: PurchaseOrder,
    @graphql.Args() args: ApprovalWorkflowFindManyArgs
  ): Promise<ApprovalWorkflow[]> {
    const results = await this.service.findApprovalWorkflows(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}