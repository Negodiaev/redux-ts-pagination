import { TypedUseSelectorHook, useSelector } from "react-redux";
import { TRootState } from "../store/reducers";

export const useTypedSelector: TypedUseSelectorHook<TRootState> = useSelector;
