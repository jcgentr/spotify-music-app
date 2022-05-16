import { useEffect, useState } from "react";
import { Track } from "../interfaces/Track";
import TrackFeatures from "./TrackFeatures";
import TracksTable from "./TracksTable";

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
        console.log("tracks =>", json.items);
        setTracks(json.items);
      }
    }

    getPlaylistTracks();
  }, [props.token, props.tracksURL]);

  return (
    <div className="flex">
      <TracksTable
        tracks={tracks}
        handleTrackClick={(trackId: string) => setSelectedTrackId(trackId)}
      />
      {selectedTrackId !== "" && (
        <TrackFeatures token={props.token} trackId={selectedTrackId} />
      )}
    </div>
  );
};

export default Tracks;
