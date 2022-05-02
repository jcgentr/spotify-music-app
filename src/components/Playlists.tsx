import { useEffect, useState } from "react";
import { defaultPlaylist, Playlist } from "../interfaces/Playlist";
import Tracks from "./Tracks";

type Props = {
  token: string;
};

const Playlists = (props: Props) => {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [selectedPlaylist, setSelectedPlaylist] =
    useState<Playlist>(defaultPlaylist);

  useEffect(() => {
    async function getUserPlaylists() {
      const response = await fetch("https://api.spotify.com/v1/me/playlists", {
        headers: { Authorization: "Bearer " + props.token },
      });
      const json = await response.json();
      setPlaylists(json.items);
      console.log(json.items);
    }

    getUserPlaylists();
  }, [props.token]);

  return (
    <div className="border p-1">
      {playlists.map((playlist) => (
        <div
          className="cursor-pointer hover:bg-slate-500"
          key={playlist.id}
          onClick={() => setSelectedPlaylist(playlist)}
        >
          {playlist.name}
        </div>
      ))}
      <Tracks token={props.token} tracksURL={selectedPlaylist.tracks.href} />
    </div>
  );
};

export default Playlists;
