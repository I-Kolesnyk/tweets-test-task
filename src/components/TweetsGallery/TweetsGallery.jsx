import { useFetchUsersQuery } from "redux/users/usersApi";

import TweetItem from "components/TweetItem/TweetItem";
import { List } from "./TweetsGallery.styled";
import { useState } from "react";

function TweetsGallery() {
  const [page, setPage] = useState(1);
  const {data: users} = useFetchUsersQuery();
  // const aaa = useFetchUsersQuery();
  // console.log(aaa)
  // const length = users.length;
  // console.log(users.length);
  // const [updateUser] = useUpdateUserMutation();

  const handleLoadMore = (currentPage) => {
    setPage( currentPage + 1);
    try {
      // fetchUsers(page)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
      <List>
        {users &&
          users.map((userData) => {
            return <TweetItem key={userData.id} userData={userData} />;
          })}
      </List>
      <button type="button" onClick={() => handleLoadMore(page)}>Load more</button>
    </>
  );
}

export default TweetsGallery;
