export interface IRoute {
  path: string;
  element: any;
  layout: any;
  isAdmin?: boolean;
  exact?: boolean;
  subRoutes?: {
    path?: string;
    element: any;
    index?: boolean;
  }[];
}

export interface IImagesData {
  data: [];
}

export interface IImageHit {
  collections: number;
  comments: number;
  downloads: number;
  id: number;
  imageHeight: number;
  imageSize: number;
  imageWidth: number;
  largeImageURL: string;
  likes: number;
  pageURL: string;
  previewHeight: number;
  previewURL: string;
  previewWidth: number;
  tags: string;
  type: string;
  user: string;
  userImageURL: string;
  user_id: number;
  views: number;
  webformatHeight: number;
  webformatURL: string;
  webformatWidth: number;
}
