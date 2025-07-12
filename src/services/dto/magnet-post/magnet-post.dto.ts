type Badge = {
    id: number;
    title: string;
    code: string;
    logo: string;
};

type Author = {
    id: string;
    name: string;
    username: string;
    photo: string;
    badge: Badge;
};

type Media = {
    id: number;
    status: string;
    type: string;
    url: string;
    ratio: number;
    cover_small: string;
    cover_medium: string;
    cover_big: string;
};

type Tag = {
    id: number;
    title: string;
};

type ProductImages = {
    main: string;
};

type ProductPrice = {
    selling_price: number;
    rrp_price: number;
    discount_percent: number;
};

type Product = {
    id: number;
    title_fa: string;
    images: ProductImages;
    price: ProductPrice;
};

export type Post = {
    id: number;
    title: string;
    caption?: string;
    type?: string;
    status?: string;
    category_ids?: number[];
    user_setting_id?: string;
    related_product_ids?: number[];
    views_count?: number;
    likes_count?: number;
    comments_count?: number;
    created_at?: string;
    updated_at?: string;
    author: Author;
    media: Media[];
    products?: Product[];
    share_url?: string;
    circle_cover?: string;
    tags?: Tag[];
};

export type MagnetPostsResponse = {
    status: number;
    data: { posts: Post[]; } | []
};
