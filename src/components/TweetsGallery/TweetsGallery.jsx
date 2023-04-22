import { useFetchUsersQuery } from "redux/users/usersApi";

import TweetItem from "components/TweetItem/TweetItem";

function TweetsGallery() { 
  const { data: users } = useFetchUsersQuery();

  return (
    <ul>
      {users &&
        users.map((userData) => {        
          return <TweetItem key={userData.id} userData={userData} />;
        })}
    </ul>
  );
}

export default TweetsGallery;
