import { useSelector, useDispatch } from "react-redux";

import {
  selectTweetsPerPage,
  selectCurrentPage,
} from "redux/pagination/selectors";
import { setTweetsPerPage, setCurrentPage } from "redux/pagination/slice";
import { setFilter } from "redux/filter/slice";

function LoadMoreButton() {
  //   const filteredUsers = useSelector(selectFilteredUsers);
  const tweetsAmount = useSelector(selectTweetsPerPage);
  const currentPage = useSelector(selectCurrentPage);
  const dispatch = useDispatch();

  const handleLoadMore = (number, page) => {
    dispatch(setTweetsPerPage(number + 3));
    dispatch(setCurrentPage(page + 1));
    dispatch(setFilter('all'));
  };

  return (
    <button onClick={() => handleLoadMore(tweetsAmount, currentPage)}>Load more</button>
  );
}

export default LoadMoreButton;
