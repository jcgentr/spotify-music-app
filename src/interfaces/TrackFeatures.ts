export interface TrackFeaturesInterface {
  acousticness: number;
  analysis_url: string;
  danceability: number;
  duration_ms: number;
  energy: number;
  id: string;
  instrumentalness: number;
  key: number;
  liveness: number;
  loudness: number;
  mode: number;
  speechiness: number;
  tempo: number;
  time_signature: number;
  track_href: string;
  type: string;
  uri: string;
  valence: number;
}

export const defaultTrackFeatures: TrackFeaturesInterface = {
  acousticness: 0,
  analysis_url: "",
  danceability: 0,
  duration_ms: 0,
  energy: 0,
  id: "",
  instrumentalness: 0,
  key: 0,
  liveness: 0,
  loudness: 0,
  mode: 0,
  speechiness: 0,
  tempo: 0,
  time_signature: 0,
  track_href: "",
  type: "",
  uri: "",
  valence: 0,
};
