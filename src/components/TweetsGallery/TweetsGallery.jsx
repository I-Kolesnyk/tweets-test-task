import { useFetchAllUsersQuery } from "redux/users/usersApi";

import TweetItem from "components/TweetItem/TweetItem";
import LoadMoreButton from "components/LoadMoreButton";
import { List } from "./TweetsGallery.styled";
import { useEffect } from "react";
import { setAllUsers, setShownUsers } from "redux/pagination/slice";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers, selectFilteredUsers } from "redux/pagination/selectors";

function TweetsGallery() {


const {data} = useFetchAllUsersQuery();
const dispatch = useDispatch();

useEffect(() => {
  if (data) {
    dispatch(setAllUsers(data))
  }
 
}, [data, dispatch]);

  // const[tweetsPerPage, setTweetsPerPage] = useState(3)
  // let [searchParams, setSearchParams] = useSearchParams({ page : 1 });
  // const [users, setUsers] = useState(null);
  // const [page, setPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(0);
  // console.log(searchParams.toString());

 const allUsers = useSelector(selectAllUsers);
//  const shownUsers = useSelector(selectShownUsers)
 const filteredUsers = useSelector(selectFilteredUsers);
 console.log(filteredUsers)


 useEffect (() => {
  if (allUsers) {
    const shownUsers = allUsers.slice (0, 3);   
    dispatch(setShownUsers(shownUsers))
  }
 }, [allUsers, dispatch])





//  const shownUsers = allUsers.splice (0, 3)

  // console.log(searchParams.toString())

  // const {data: users} = useFetchUsersQuery ();



  

// const users = allUsers.splice(0, 3)


 




  return (
    <>
      <List>
        {filteredUsers &&
        filteredUsers.map((userData) => {
            return <TweetItem key={userData.id} userData={userData} />;
          })}
      </List>
    <LoadMoreButton/>
    </>
  );
}

export default TweetsGallery;
