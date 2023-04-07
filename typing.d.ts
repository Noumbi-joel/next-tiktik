export interface Post {
    _id: string;
    caption: string;
    likes: any;
    comments: any;
    postedBy: {
        _id: string;
        image: string;
        userName: string;
    },
    userId: string;
    video: any;
}