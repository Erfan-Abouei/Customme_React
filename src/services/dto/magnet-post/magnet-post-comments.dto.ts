type CommentAuthor = {
    username: string;
    photo: string;
    name: string;
    marketplace_seller_id: number | null;
};

type MentionedUser = {
    username?: string;
    [key: string]: any;
};

export type CommentReply = {
    id: number;
    comment: string;
    author: CommentAuthor;
    likes_count: number;
    created_at: string;
    replies_count: number | null;
    mentioned_users: MentionedUser[];
};

export type Comment = {
    id: number;
    comment: string;
    author: CommentAuthor;
    likes_count: number;
    created_at: string;
    replies_count: number;
    mentioned_users: MentionedUser[];
    top_replies: CommentReply[];
};

type CommentPager = {
    current_page: number;
    total_pages: number;
    total_items: number;
};

type CommentsData = {
    comments: Comment[];
    mentioned_comment: Comment | null;
    replied_comments: Comment[];
    pager: CommentPager;
};

export type CommentsResponse = {
    status: number;
    data: CommentsData;
};
