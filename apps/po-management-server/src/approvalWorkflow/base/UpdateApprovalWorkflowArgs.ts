/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ApprovalWorkflowWhereUniqueInput } from "./ApprovalWorkflowWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ApprovalWorkflowUpdateInput } from "./ApprovalWorkflowUpdateInput";

@ArgsType()
class UpdateApprovalWorkflowArgs {
  @ApiProperty({
    required: true,
    type: () => ApprovalWorkflowWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ApprovalWorkflowWhereUniqueInput)
  @Field(() => ApprovalWorkflowWhereUniqueInput, { nullable: false })
  where!: ApprovalWorkflowWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ApprovalWorkflowUpdateInput,
  })
  @ValidateNested()
  @Type(() => ApprovalWorkflowUpdateInput)
  @Field(() => ApprovalWorkflowUpdateInput, { nullable: false })
  data!: ApprovalWorkflowUpdateInput;
}

export { UpdateApprovalWorkflowArgs as UpdateApprovalWorkflowArgs };
