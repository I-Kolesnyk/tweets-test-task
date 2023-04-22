import { useSelector } from "react-redux";
import { selectStatus } from "redux/tweets/selectors";

export const useStatus = () => {
  useSelector(selectStatus);
};
