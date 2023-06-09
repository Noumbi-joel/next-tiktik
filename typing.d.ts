export interface Video {
  caption: string;
  video: {
    asset: {
      _id: string;
      url: string;
    };
  };
  _id: string;
  postedBy: {
    _id: string;
    userName: string;
    image: string;
  };
  likes: {
    postedBy: {
      _id: string;
      userName: string;
      image: string;
    };
  }[];
  comments: {
    comment: string;
    _key: string;
    postedBy: {
      _ref: string;
    };
  }[];
  userId: string;
}

export interface IUser {
  image: string;
  email: string;
  name: string;
}
export interface User {
  _id: string;
  _type: string;
  userName: string;
  image: string;
}

export interface IComment {
  comment: string;
  length?: number;
  _key: string;
  postedBy: {
    _ref: string;
    _id?: string;
  };
}
export interface ProfileData {
  data: {
    user: User;
    userVideos: Video[];
    userLikedVideos: Video[];
  };
}

export interface IStore {
  userProfile: User;
  allUsers: User[];
}
