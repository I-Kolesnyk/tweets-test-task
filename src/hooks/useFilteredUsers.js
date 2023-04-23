import { useSelector } from "react-redux";
import { selectFilteredUsers } from "redux/pagination/selectors";

export const useFilteredUsers = () => useSelector(selectFilteredUsers);