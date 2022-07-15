export type profileType = {
  name: string;
  login: string;
  avatar_url: string;
  blog: string;
  bio: string;
  public_repos: number;
  public_gists: number;
};

export const defaultProfiles: profileType[] = [
  {
    name: "Hansol",
    login: "katf101",
    avatar_url: "https://avatars.githubusercontent.com/u/102638663?v=4",
    blog: "https://mayank-chaudhari.web.app",
    bio: "Javascript 정복하기",
    public_repos: 17,
    public_gists: 1,
  },
];
