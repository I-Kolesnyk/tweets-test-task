import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

import { useUpdateUserMutation } from "redux/users/usersApi";
import {
  setLocalStorage,
  getLocalStorage,
  getCounter,
  formatNumber,
} from "helpers";

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
  const [status, setStatus] = useState(getLocalStorage(id) || "follow");
  const [updateUser, { isError }] = useUpdateUserMutation();
  const currentStatus = getLocalStorage(id);

  useEffect(() => {
    setLocalStorage(id, status);
  });

  useEffect(() => {
    if (isError) {
      toast.error("Something has happened. Please try again later.");
    }
  }, [isError]);

  const userData = {
    user,
    tweets,
    avatar,
    followers: getCounter(status, followers),
    id,
  };

  const handleClick = (tweetId, user) => {
    if (currentStatus === null) {
      setStatus("following");
      setLocalStorage(tweetId, "following");
      updateUser(user);
    }
    if (currentStatus === "following") {
      setStatus("follow");
      setLocalStorage(tweetId, "follow");
      updateUser(user);
    }
    if (currentStatus === "follow") {
      setStatus("following");
      setLocalStorage(tweetId, "following");
      updateUser(user);
    }
  };

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
          <Text>{formatNumber(tweets)} tweets</Text>
          <Text>{formatNumber(followers)} followers</Text>
        </TextWrapper>
        <Button
          type="button"
          onClick={() => handleClick(id, userData)}
          style={{
            backgroundColor: status === "following" ? "#5CD3A8" : "#EBD8FF",
          }}
        >
          {status}
        </Button>
      </ItemWrapper>
    </Item>
  );
}

TweetItem.propTypes = {
  userData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
  }),
};

export default TweetItem;
