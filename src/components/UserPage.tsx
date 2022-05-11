import { useEffect, useState } from "react";
import { defaultUser, User } from "../interfaces/User";
import Playlists from "./Playlists";

interface Props {
  token: string;
}

const UserPage = (props: Props) => {
  const [user, setUser] = useState<User>(defaultUser);

  useEffect(() => {
    async function getUserInfo() {
      const response = await fetch("https://api.spotify.com/v1/me", {
        headers: { Authorization: "Bearer " + props.token },
      });
      const json = await response.json();
      setUser(json);
    }

    getUserInfo();
  }, [props.token]);

  if (user === defaultUser) return <div>Loading...</div>;

  return (
    <div>
      <div>
        <div id="profile-info-container">
          <img alt="profile" id="profile-pic" src={user.images[0].url} />
          <span id="profile-name">{user.display_name}</span>
        </div>
      </div>
      <Playlists token={props.token} />
    </div>
  );
};

export default UserPage;
