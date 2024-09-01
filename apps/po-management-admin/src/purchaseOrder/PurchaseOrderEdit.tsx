import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  TextInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { ApprovalWorkflowTitle } from "../approvalWorkflow/ApprovalWorkflowTitle";

export const PurchaseOrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="approvalWorkflows"
          reference="ApprovalWorkflow"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ApprovalWorkflowTitle} />
        </ReferenceArrayInput>
        <div />
        <DateTimeInput label="orderDate" source="orderDate" />
        <TextInput label="orderNumber" source="orderNumber" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="totalAmount" source="totalAmount" />
      </SimpleForm>
    </Edit>
  );
};
