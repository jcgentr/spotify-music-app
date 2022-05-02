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

  return (
    <div>
      <h1>
        Logged in as <span className="font-bold">{user.display_name}</span>
      </h1>
      <div>
        <div>
          <img alt="profile" width="150" src={user.images[0].url} />
        </div>
        <div className="my-8 border p-1">
          <dl className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm">
            <dt className="font-bold">Display name:</dt>
            <dd>{user.display_name}</dd>

            <dt className="font-bold">Id:</dt>
            <dd>{user.id}</dd>

            <dt className="font-bold">Email:</dt>
            <dd>{user.email}</dd>

            <dt className="font-bold">Country:</dt>
            <dd>{user.country}</dd>

            <dt className="font-bold">Followers:</dt>
            <dd>{user.followers.total}</dd>

            <dt className="font-bold">Subscription Type:</dt>
            <dd>{user.type}</dd>
          </dl>
        </div>
      </div>
      <Playlists token={props.token} />
    </div>
  );
};

export default UserPage;
