// No official type definitions from Digikala for the homepage data structure are publicly available,
// so these interfaces are created based on observed sample data and educated guesses,
// and may not be complete or fully accurate.
export interface CategoryData {
    id: number;
    image: string;
    title: string;
    url: {
        base: string | null;
        uri: string;
    };
}

export interface Widget {
    type: string;
    name: string;
    data: any[];
}

export interface SeoMeta {
    title: string;
    description: string;
    twitter_card: any;
    open_graph: any;
    header: any;
}

export interface InTrack {
    eventName: string;
    eventData: any;
    userId: string | null;
}

export interface HomePageData {
    intrack: InTrack;
    seo: SeoMeta;
    widgets: Widget[];
}

export interface HomePageDTO {
    data: HomePageData;
    status: number;
}
