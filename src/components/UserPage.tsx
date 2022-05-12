import { useEffect, useState } from "react";
import { defaultUser, User } from "../interfaces/User";
import Playlists from "./Playlists";
import Avatar from '@mui/material/Avatar';

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
        <div className="ml-5 pt-5 mb-5">
          <Avatar id="profile-pic" alt="profile" src={user.images[0].url} />
          <span className="inline-block align-sub ml-2">{user.display_name}</span>
        </div>
      <Playlists token={props.token} />
    </div>
  );
};

export default UserPage;
