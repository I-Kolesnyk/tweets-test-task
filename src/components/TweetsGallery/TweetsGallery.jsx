import { useFetchUsersQuery } from "redux/users/usersApi";

import TweetItem from "components/TweetItem/TweetItem";
import { List } from "./TweetsGallery.styled";

function TweetsGallery() {
  const { data: users } = useFetchUsersQuery(1);
  // const length = users.length;
  // console.log(users.length);

  return (
    <>
    <List>
      {users &&
        users.map((userData) => {
          return <TweetItem key={userData.id} userData={userData} />;
        })}
    </List>
    <button type='button'></button>
    </>
  );
}

export default TweetsGallery;
