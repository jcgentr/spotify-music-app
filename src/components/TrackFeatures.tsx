import { useEffect, useState } from "react";
import {
  defaultTrackFeatures,
  TrackFeaturesInterface,
} from "../interfaces/TrackFeatures";

type Props = {
  token: string;
  trackId: string;
};

const TrackFeatures = (props: Props) => {
  const [trackFeatures, setTrackFeatures] =
    useState<TrackFeaturesInterface>(defaultTrackFeatures);

  useEffect(() => {
    async function getTrackFeatures() {
      if (props.trackId) {
        const response = await fetch(
          `https://api.spotify.com/v1/audio-features/${props.trackId}`,
          {
            headers: { Authorization: "Bearer " + props.token },
          }
        );
        const json = await response.json();
        console.log(json);
        setTrackFeatures(json);
      }
    }

    getTrackFeatures();
  }, [props.token, props.trackId]);

  return (
    <div className="border p-1 w-1/3">
      <div>Danceability: {trackFeatures.danceability}</div>
      <div>Energy: {trackFeatures.energy}</div>
      <div>Liveness: {trackFeatures.liveness}</div>
      <div>Loudness: {trackFeatures.loudness}</div>
      <div>Speechiness: {trackFeatures.speechiness}</div>
      <div>Tempo: {trackFeatures.tempo}</div>
      <div>Time signature: {trackFeatures.time_signature}</div>
      <div>Valence: {trackFeatures.valence}</div>
    </div>
  );
};

export default TrackFeatures;
