import { useSelector } from "react-redux";
import { selectTotalPages } from "redux/pagination/selectors";

export const useTotalPages = () => useSelector(selectTotalPages);