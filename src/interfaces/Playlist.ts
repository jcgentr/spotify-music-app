export interface Playlist {
  collaborative: boolean;
  description: string;
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string;
    total: number;
  };
  href: string;
  id: string;
  images: [
    {
      url: string;
      height: number;
      width: number;
    }
  ];
  name: string;
  owner: {
    external_urls: {
      spotify: string;
    };
    followers: {
      href: string;
      total: number;
    };
    href: string;
    id: string;
    type: string;
    uri: string;
    display_name: string;
  };
  public: true;
  snapshot_id: string;
  tracks: {
    href: string;
    items: [];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
  };
  type: string;
  uri: string;
}

export const defaultPlaylist: Playlist = {
  collaborative: false,
  description: "",
  external_urls: {
    spotify: "",
  },
  followers: {
    href: "",
    total: 0,
  },
  href: "",
  id: "",
  images: [
    {
      url: "",
      height: 300,
      width: 300,
    },
  ],
  name: "",
  owner: {
    external_urls: {
      spotify: "",
    },
    followers: {
      href: "",
      total: 0,
    },
    href: "",
    id: "",
    type: "user",
    uri: "",
    display_name: "",
  },
  public: true,
  snapshot_id: "",
  tracks: {
    href: "",
    items: [],
    limit: 0,
    next: "",
    offset: 0,
    previous: "",
    total: 0,
  },
  type: "",
  uri: "",
};
