import { useSelector } from "react-redux"
import type { RootState } from "~/features/App/types"

export const useAppSelector = useSelector.withTypes<RootState>()
