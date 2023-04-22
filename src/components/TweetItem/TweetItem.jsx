import { useState } from "react";

import { useUpdateUserMutation } from "redux/users/usersApi";

function TweetItem({ userData: { id, avatar, user, tweets, followers } }) {
  const [status, setStatus] = useState(
    localStorage.getItem(`${id}`) || "follow"
  );
  const [updateUser] = useUpdateUserMutation();

  const getCounter = (followers) => {
    if (status === "follow") {
      return followers + 1;
    }
    if (status === "following") {
      return followers - 1;
    } else {
      return followers;
    }
  };

  const currentStatus = localStorage.getItem(`${id}`);

  const userData = {
    user,
    tweets,
    avatar,
    followers: getCounter(followers),
    id,
  };

  const handleClick = (tweetId, user) => {
    if (currentStatus === null) {
      setStatus("following");
      localStorage.setItem(`${tweetId}`, "following");
      updateUser(user);
    }
    if (currentStatus === "following") {
      setStatus("follow");
      localStorage.setItem(`${tweetId}`, "follow");
      updateUser(user);
    }
    if (currentStatus === "follow") {
      setStatus("following");
      localStorage.setItem(`${tweetId}`, "following");
      updateUser(user);
    }
  };

  return (
    <div>
      <img src={avatar} alt={user} />
      <p>{user}</p>
      <p>{tweets} tweets</p>
      <p>{followers} followers</p>
      <button type="button" onClick={() => handleClick(id, userData)}>
        {status}
      </button>
    </div>
  );
}

export default TweetItem;
