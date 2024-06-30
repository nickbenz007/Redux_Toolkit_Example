interface PhotoUrls {
  small: string;
  thumb: string;
}

interface CoverPhoto {
  id: string;
  urls: PhotoUrls;
}

interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

interface User {
  id: string;
  name: string;
  profile_image: ProfileImage;
}

interface Collection {
  id: number;
  title: string;
  description: string;
  cover_photo: CoverPhoto;
  user: User;
}

export interface GalleryState {
  isLoading: boolean;
  isError: boolean;
  data: Collection[];
}

export interface User {
  id: string;
  username: string;
  name: string;
  portfolio_url?: string;
  bio?: string;
  location?: string;
  total_likes: number;
  total_photos: number;
  total_collections: number;
  instagram_username?: string;
  twitter_username?: string;
  profile_image: {
    small: string;
    medium: string;
    large: string;
  };
  links: {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
  };
}

export interface Photo {
  id: string;
  created_at: string;
  updated_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  likes: number;
  liked_by_user: boolean;
  description?: string;
  user: User;
  current_user_collections: any[];
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
}

export interface PhotoState {
  data: Photo[];
  isLoading: boolean;
  isError: boolean;
}
