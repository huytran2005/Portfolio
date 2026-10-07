export interface SocialLink {
  name: string;
  url: string;
  icon?: string;
}

export interface Profile {
  name: string;
  role: string;
  headline: string;
  bio: string;
  avatar: string;
  email: string;
  location: string;
  socialLinks: SocialLink[];
}
