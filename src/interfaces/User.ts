export interface User {
  country: string;
  display_name: string;
  email: string;
  explicit_content: {
    filter_enabled: true;
    filter_locked: true;
  };
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
  product: string;
  type: string;
  uri: string;
}

export const defaultUser: User = {
  country: "",
  display_name: "",
  email: "",
  explicit_content: {
    filter_enabled: true,
    filter_locked: true,
  },
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
  product: "",
  type: "",
  uri: "",
};
