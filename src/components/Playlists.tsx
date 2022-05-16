import { useEffect, useState } from "react";
import { defaultPlaylist, Playlist } from "../interfaces/Playlist";
import PlaylistsTable from "./PlaylistsTable";
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
    <div>
      {selectedPlaylist.id === defaultPlaylist.id ? (
        <>
          <h1 className="p-6 text-xl">Playlists</h1>
          <PlaylistsTable
            playlists={playlists}
            handlePlaylistClick={(playlist: Playlist) =>
              setSelectedPlaylist(playlist)
            }
          />
        </>
      ) : (
        <>
          <h1 className="p-6 text-xl">
            <span
              className="underline hover:no-underline cursor-pointer"
              onClick={() => setSelectedPlaylist(defaultPlaylist)}
              style={{ color: "#a64bc7" }}
            >
              {selectedPlaylist.name}
            </span>{" "}
            {">"} Tracks
          </h1>
          <Tracks
            token={props.token}
            tracksURL={selectedPlaylist.tracks.href}
          />
        </>
      )}
    </div>
  );
};

export default Playlists;
