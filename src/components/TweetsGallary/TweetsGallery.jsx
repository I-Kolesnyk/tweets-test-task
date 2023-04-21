import { useFetchUsersQuery } from "redux/users/usersApi"

function TweetsGallery () {
    const tweets = useFetchUsersQuery();
    console.log(tweets)

    return (
        <ul>
      {/* {tweets &&
        tweets.map(({ id, user }) => {
          return <li key={id} id={id} name={user} />;
        })} */}
    </ul>
    )
}

export default TweetsGallery;