import { useEffect, useState } from "react";
import { Track } from "../interfaces/Track";

type Props = {
  token: string;
  tracksURL: string;
};

const Tracks = (props: Props) => {
  const [tracks, setTracks] = useState<Track[]>([]);

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
      //   const tracks = json2.items.map((item: any) => item.track);
      //   console.log(tracks[0]);
      //   const r3 = await fetch(
      //     `https://api.spotify.com/v1/audio-features/${tracks[0].id}`,
      //     {
      //       headers: { Authorization: "Bearer " + props.token },
      //     }
      //   );
      //   const json3 = await r3.json();
      //   console.log(json3);
    }

    getPlaylistTracks();
  }, [props.token, props.tracksURL]);

  return (
    <div className="border p-1">
      {tracks.map(({ track }) => (
        <div
          className="cursor-pointer hover:bg-slate-500"
          key={track.id}
          onClick={() => console.log("clicked", track.id)}
        >
          {track.name}
        </div>
      ))}
      {/* <TrackFeatures token={props.token} trackId={selectedTrack.id} /> */}
    </div>
  );
};

export default Tracks;
