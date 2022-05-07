import { useEffect, useState } from "react";
import { Track } from "../interfaces/Track";
import TrackFeatures from "./TrackFeatures";

type Props = {
  token: string;
  tracksURL: string;
};

const Tracks = (props: Props) => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [selectedTrackId, setSelectedTrackId] = useState("");

  useEffect(() => {
    async function getPlaylistTracks() {
      if (props.tracksURL) {
        const response = await fetch(props.tracksURL, {
          headers: { Authorization: "Bearer " + props.token },
        });
        const json = await response.json();
        console.log(json.items);
        setTracks(json.items);
      }
    }

    getPlaylistTracks();
  }, [props.token, props.tracksURL]);

  return (
    <>
      <div className="border p-1 w-1/3">
        {tracks.map(({ track }) => (
          <div
            className={`${
              track.id === selectedTrackId && "text-black bg-slate-300"
            } cursor-pointer hover:bg-slate-500 hover:text-white`}
            key={track.id}
            onClick={() => setSelectedTrackId(track.id)}
          >
            {track.name}
          </div>
        ))}
      </div>
      <TrackFeatures token={props.token} trackId={selectedTrackId} />
    </>
  );
};

export default Tracks;
