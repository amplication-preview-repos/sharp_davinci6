import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { MaterialList } from "./material/MaterialList";
import { MaterialCreate } from "./material/MaterialCreate";
import { MaterialEdit } from "./material/MaterialEdit";
import { MaterialShow } from "./material/MaterialShow";
import { ApprovalWorkflowList } from "./approvalWorkflow/ApprovalWorkflowList";
import { ApprovalWorkflowCreate } from "./approvalWorkflow/ApprovalWorkflowCreate";
import { ApprovalWorkflowEdit } from "./approvalWorkflow/ApprovalWorkflowEdit";
import { ApprovalWorkflowShow } from "./approvalWorkflow/ApprovalWorkflowShow";
import { PurchaseOrderList } from "./purchaseOrder/PurchaseOrderList";
import { PurchaseOrderCreate } from "./purchaseOrder/PurchaseOrderCreate";
import { PurchaseOrderEdit } from "./purchaseOrder/PurchaseOrderEdit";
import { PurchaseOrderShow } from "./purchaseOrder/PurchaseOrderShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"PO Management"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Material"
          list={MaterialList}
          edit={MaterialEdit}
          create={MaterialCreate}
          show={MaterialShow}
        />
        <Resource
          name="ApprovalWorkflow"
          list={ApprovalWorkflowList}
          edit={ApprovalWorkflowEdit}
          create={ApprovalWorkflowCreate}
          show={ApprovalWorkflowShow}
        />
        <Resource
          name="PurchaseOrder"
          list={PurchaseOrderList}
          edit={PurchaseOrderEdit}
          create={PurchaseOrderCreate}
          show={PurchaseOrderShow}
        />
      </Admin>
    </div>
  );
};

export default App;
