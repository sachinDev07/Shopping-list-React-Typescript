export type ItemListType = {
  id?: string;
  name?: string;
  quantity?: number;
};

export enum ActionType {
  ADD_ITEM = "ADD_ITEM",
  ADD_QUANTITY = "ADD_QUANTITY",
  DEC_QUANTITY = "DEC_QUANTITY",
}

export interface Action {
  type: ActionType;
  payload: ItemListType;
}
