import RootReducer from "./Reducer";
import { createStore } from "redux";

const Store = createStore(
    RootReducer
)
export default Store;