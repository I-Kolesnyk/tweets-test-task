import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { useFetchUsersQuery } from "redux/users/usersApi";
import {
  setAllUsers,
  setShownUsers,
  setTotalPages,
} from "redux/pagination/slice";

import {
  useAllUsers,
  useTotalPages,
  useTweetsAmount,
  useCurrentPage,
  useFilterValue,
  useFilteredUsers,
} from "hooks";

import TweetItem from "components/TweetItem/TweetItem";
import LoadMoreButton from "components/LoadMoreButton";
import Loader from "components/Loader";
import { ToastWrapper } from "components/ToastContainer/ToastContainer";

import { List, Wrapper, Title } from "./TweetsGallery.styled";

function TweetsGallery() {
  const { data, isFetching, isError, isSuccess } = useFetchUsersQuery();
  const allUsers = useAllUsers();
  const totalPages = useTotalPages();
  const tweetsAmount = useTweetsAmount();
  const currentPage = useCurrentPage();
  const filter = useFilterValue();
  const filteredUsers = useFilteredUsers();

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setAllUsers(data));
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (allUsers) {
      const shownUsers = allUsers.slice(0, tweetsAmount);
      dispatch(setShownUsers(shownUsers));
      dispatch(setTotalPages(Math.ceil(allUsers.length / 3)));
    }
  }, [allUsers, dispatch, tweetsAmount]);

  useEffect(() => {
    if (isError) {
      toast.error("Something has happened. Please try again later.");
    }
  }, [isError]);

  return (
    <>
      {isFetching && <Loader />}

      {isSuccess && data.length ? (
        <List>
          {filteredUsers &&
            filteredUsers.map((userData) => {
              return <TweetItem key={userData.id} userData={userData} />;
            })}
        </List>
      ) : (
        <Wrapper>
          <Title>
            Great! You are the first user! <br/> Wait for a little for someone to join
            you.
          </Title>
        </Wrapper>
      )}

      {totalPages > 1 && currentPage < totalPages && filter === "all" && (
        <LoadMoreButton />
      )}
      <ToastWrapper />
    </>
  );
}

export default TweetsGallery;
