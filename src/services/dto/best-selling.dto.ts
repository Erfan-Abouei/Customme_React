// No official type definitions from Digikala for the best selling data structure are publicly available,
// so these interfaces are created based on observed sample data and educated guesses,
// and may not be complete or fully accurate.
export interface Product {
    id: string;
    title_fa: string;
    title_en: string;
    url: {
        base: string | null;
        uri: string;
    };
    status: string;
    has_quick_view: boolean;
    data_layer: DataLayer;
    product_type: string;
    test_title_fa: string;
    test_title_en: string;
    digiplus: DigiPlus;
    images: Images;
    colors: Color[];
    rating: Rating;
    default_variant: Variant;
    properties: Properties;
    badges: Badge[];
}

export interface Color {
    id: number;
    title: string;
    hex_code: string;
}


interface DataLayer {
    brand: string;
    category: string;
    metric6: number;
    dimension2: number;
    dimension6: number;
    dimension7: string;
    dimension9: number;
    dimension11: number;
    dimension20: string;
    item_category2: string;
    item_category3: string;
    item_category4: string;
    item_category5: string;
}

interface DigiPlus {
    services: string[];
    service_list: { title: string }[];
    services_summary: string[];
    is_jet_eligible: boolean;
    cash_back: number;
    is_general_location_jet_eligible: boolean;
    fast_shipping_text: string | null;
}

interface Images {
    main: ImageDetail;
}

interface ImageDetail {
    storage_ids: number[];
    url: string[];
    thumbnail_url: string | null;
    temporary_id: string | null;
    webp_url: string[];
}

interface Rating {
    rate: number;
    count: number;
}

interface Variant {
    id: number;
    lead_time: number;
    rank: number;
    rate: number;
    statistics: Statistics;
    status: string;
    properties: Properties;
    digiplus: DigiPlus;
    warranty: Warranty;
    seller: Seller;
    digiclub: DigiClub;
    price: Price;
    shipment_methods: ShipmentMethods;
    has_importer_price: boolean;
    manufacture_price_not_exist: boolean;
    has_best_price_in_last_month: boolean;
    buy_box_notices: any[];
    variant_badges: any[];
}

interface Statistics {
    totally_satisfied: RateCount;
    satisfied: RateCount;
    neutral: RateCount;
    dissatisfied: RateCount;
    totally_dissatisfied: RateCount;
    total_count: number;
    total_rate: number;
}

interface RateCount {
    rate_count: number;
    rate: number;
}

interface Properties {
    is_fast_shipping: boolean;
    is_ship_by_seller: boolean;
    is_multi_warehouse: boolean;
    has_similar_variants?: boolean;
    is_rural?: boolean;
    in_digikala_warehouse?: boolean;
    free_shipping_badge?: boolean;
    is_fake?: boolean;
    has_gift?: boolean;
    min_price_in_last_month?: number;
    is_non_inventory?: boolean;
    is_ad?: boolean;
    ad?: any[];
    is_jet_eligible?: boolean;
    is_medical_supplement?: boolean;
}

interface Warranty {
    id: number;
    title_fa: string;
    title_en: string;
}

interface Seller {
    id: number;
    title: string;
    code: string;
    url: string;
    rating: SellerRating;
    properties: SellerProperties;
    stars: number;
    grade: Grade;
    logo: string | null;
    registration_date: string;
}

interface SellerRating {
    total_rate: number;
    total_count: number;
    commitment: number;
    no_return: number;
    on_time_shipping: number;
}

interface SellerProperties {
    is_trusted: boolean;
    is_official: boolean;
    is_roosta: boolean;
    is_new: boolean;
}

interface Grade {
    label: string;
    color: string;
}

interface DigiClub {
    point: number;
}

interface Price {
    selling_price: number;
    rrp_price: number;
    order_limit: number;
    is_incredible: boolean;
    is_promotion: boolean;
    is_locked_for_digiplus: boolean;
    bnpl_active: boolean;
    discount_percent: number;
    badge: Badge;
    is_digiplus_promotion: boolean;
    is_digiplus_early_access: boolean;
    is_application_incredible: boolean;
    is_lightening_deal: boolean;
    is_plus_early_access: boolean;
}

interface Badge {
    title: string;
    color: string;
    icon: string | null;
}

interface ShipmentMethods {
    description: string;
    has_lead_time: boolean;
    providers: any[];
}

interface Category {
    id: number;
    title_fa: string;
    title_en: string;
    code: string;
    image?: CategoryImage;
}

interface CategoryImage {
    storage_ids: Record<string, number | string>;
    url: string[];
    thumbnail_url: string | null;
    temporary_id: string | null;
    webp_url: string[];
}

export interface BestSellingDTO {
    status: number;
    data: {
        products: Product[];
        categories: Category[];
    };
}