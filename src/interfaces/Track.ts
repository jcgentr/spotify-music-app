export interface Track {
  // there is more but i'm lazy; add as needed
  track: {
    id: string;
    name: string;
    popularity: number;
    external_urls: {
      spotify: string;
    };
  };
}

export const defaultTrack: Track = {
  track: {
    id: "",
    name: "",
    popularity: 0,
    external_urls: {
      spotify: "",
    },
  },
};
