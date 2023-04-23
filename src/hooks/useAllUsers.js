import { useSelector } from "react-redux";
import { selectAllUsers } from "redux/pagination/selectors";

export const useAllUsers = () => useSelector(selectAllUsers);
