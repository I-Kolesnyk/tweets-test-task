import { useState } from "react";

import { useUpdateUserMutation } from "redux/users/usersApi";
import logo from "../../assets/logo.svg";
import {
  Item,
  ItemWrapper,
  Logo,
  AvatarContainer,
  AvatarWrapper,
  Avatar,
  Text,
  TextWrapper,
  Button,
} from "./TweetItem.styled";

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

  function format(followers) {
    const n = followers.toString().split(".");
    return (
      n[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
      (n.length > 1 ? "." + n[1] : "")
    );
  }

  return (
    <Item>
      <ItemWrapper>
      <Logo src={logo} alt="go-it logo" />
      <AvatarContainer>
        <AvatarWrapper>
          <Avatar src={avatar} alt={user} />
        </AvatarWrapper>
      </AvatarContainer>
      <TextWrapper>
        <Text>{tweets} tweets</Text>
        <Text>{format(followers)} followers</Text>
      </TextWrapper>
      <Button type="button" onClick={() => handleClick(id, userData)} style={{backgroundColor : status==='following' ? '#5CD3A8' : '#EBD8FF'}}>
        {status}
      </Button>
      </ItemWrapper>
    </Item>
  );
}

export default TweetItem;
