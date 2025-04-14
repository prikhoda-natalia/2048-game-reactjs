import { useDispatch } from "react-redux";
import type { AppDispatch } from "~/features/App/types";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
