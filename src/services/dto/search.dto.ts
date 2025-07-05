export interface CategoryItem {
    keyword: string;
    category: {
        id: number;
        title_fa: string;
        title_en: string;
        code: string;
    };
}

interface AutoCompleteItem {
    keyword: string;
}

interface AdvanceLinkItem {
    keyword: string;
    category: {
        id: number;
        title_fa: string;
        title_en: string;
        code: string;
        url: {
            base: string | null;
            uri: string;
        };
    };
}

export interface TrendItem {
    keyword: string;
    url: {
        base: string | null;
        uri: string;
    };
}

export default interface SearchDTO {
    status: number;
    data: {
        categories: CategoryItem[];
        auto_complete: AutoCompleteItem[];
        advance_links: AdvanceLinkItem[];
        trends: TrendItem[];
        trending_version: string;
        banner?: any[];
        promotion_banner?: any[];
        is_text_lenz_eligible?: boolean;
        text_lenz_eligibility?: string;
        search_version?: string;
    };
}
