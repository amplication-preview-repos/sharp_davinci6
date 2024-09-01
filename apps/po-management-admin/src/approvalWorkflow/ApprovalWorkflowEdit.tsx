import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PurchaseOrderTitle } from "../purchaseOrder/PurchaseOrderTitle";
import { UserTitle } from "../user/UserTitle";

export const ApprovalWorkflowEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="level" source="level" />
        <ReferenceInput
          source="purchaseOrder.id"
          reference="PurchaseOrder"
          label="PurchaseOrder"
        >
          <SelectInput optionText={PurchaseOrderTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
