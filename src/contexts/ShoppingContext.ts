import { createContext } from "react";
import { Action, ItemListType } from "../components/reducers/types";


export const ShoppingItemContext = createContext<ItemListType[]>([]);

export const ShoppingDispatchContext = createContext<React.Dispatch<Action> | undefined>(undefined);