import { useSelector } from "react-redux";
import { selectCurrentPage } from "redux/pagination/selectors";

export const useCurrentPage = () => useSelector(selectCurrentPage);