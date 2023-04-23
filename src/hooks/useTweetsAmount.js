import { useSelector } from "react-redux";
import { selectTweetsPerPage } from "redux/pagination/selectors";

export const useTweetsAmount = () => useSelector(selectTweetsPerPage);