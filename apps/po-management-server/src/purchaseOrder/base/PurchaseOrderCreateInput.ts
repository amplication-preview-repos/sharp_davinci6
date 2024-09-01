/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ApprovalWorkflowCreateNestedManyWithoutPurchaseOrdersInput } from "./ApprovalWorkflowCreateNestedManyWithoutPurchaseOrdersInput";

import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  MaxLength,
  IsEnum,
  IsNumber,
  Min,
  Max,
} from "class-validator";

import { Type } from "class-transformer";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { EnumPurchaseOrderStatus } from "./EnumPurchaseOrderStatus";

@InputType()
class PurchaseOrderCreateInput {
  @ApiProperty({
    required: false,
    type: () => ApprovalWorkflowCreateNestedManyWithoutPurchaseOrdersInput,
  })
  @ValidateNested()
  @Type(() => ApprovalWorkflowCreateNestedManyWithoutPurchaseOrdersInput)
  @IsOptional()
  @Field(() => ApprovalWorkflowCreateNestedManyWithoutPurchaseOrdersInput, {
    nullable: true,
  })
  approvalWorkflows?: ApprovalWorkflowCreateNestedManyWithoutPurchaseOrdersInput;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  items?: InputJsonValue;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  orderDate?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  orderNumber?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumPurchaseOrderStatus,
  })
  @IsEnum(EnumPurchaseOrderStatus)
  @IsOptional()
  @Field(() => EnumPurchaseOrderStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  totalAmount?: number | null;
}

export { PurchaseOrderCreateInput as PurchaseOrderCreateInput };