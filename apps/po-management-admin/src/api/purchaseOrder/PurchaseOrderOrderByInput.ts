import { SortOrder } from "../../util/SortOrder";

export type PurchaseOrderOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  items?: SortOrder;
  orderDate?: SortOrder;
  orderNumber?: SortOrder;
  status?: SortOrder;
  totalAmount?: SortOrder;
  updatedAt?: SortOrder;
};
