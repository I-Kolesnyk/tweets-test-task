import { useFetchAllUsersQuery } from "redux/users/usersApi";

import TweetItem from "components/TweetItem/TweetItem";
import LoadMoreButton from "components/LoadMoreButton";
import { List } from "./TweetsGallery.styled";
import { useEffect } from "react";
import {
  setAllUsers,
  setShownUsers,
  setTotalPages,
} from "redux/pagination/slice";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllUsers,
  selectFilteredUsers,
  selectTweetsPerPage,
  selectTotalPages,
  selectCurrentPage
} from "redux/pagination/selectors";

import { selectFilterValue } from "redux/filter/selectors";

function TweetsGallery() {
  const { data } = useFetchAllUsersQuery();
  const dispatch = useDispatch();
  const tweetsAmount = useSelector(selectTweetsPerPage);
  const totalPages = useSelector(selectTotalPages);
  const currentPage = useSelector(selectCurrentPage);
  const filter = useSelector(selectFilterValue)

  useEffect(() => {
    if (data) {
      dispatch(setAllUsers(data));
    }
  }, [data, dispatch]);

  const allUsers = useSelector(selectAllUsers);
  const filteredUsers = useSelector(selectFilteredUsers);

  useEffect(() => {
    if (allUsers) {
      const shownUsers = allUsers.slice(0, tweetsAmount);
      dispatch(setShownUsers(shownUsers));
      dispatch(setTotalPages(Math.ceil(allUsers.length / 3)));
    }
  }, [allUsers, dispatch, tweetsAmount]);

  return (
    <>
      <List>
        {filteredUsers &&
          filteredUsers.map((userData) => {
            return <TweetItem key={userData.id} userData={userData} />;
          })}
      </List>
      {(totalPages > 1 && currentPage < totalPages && filter === 'all') && <LoadMoreButton />}
    </>
  );
}

export default TweetsGallery;
