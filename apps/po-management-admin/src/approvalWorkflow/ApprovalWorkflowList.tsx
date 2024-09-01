import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PURCHASEORDER_TITLE_FIELD } from "../purchaseOrder/PurchaseOrderTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ApprovalWorkflowList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ApprovalWorkflows"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="level" source="level" />
        <ReferenceField
          label="PurchaseOrder"
          source="purchaseorder.id"
          reference="PurchaseOrder"
        >
          <TextField source={PURCHASEORDER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
