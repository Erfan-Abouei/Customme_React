import type { BestProductSellContainerProps } from "@/types/components-props.types"
import ProductCard from "@/components/shared/ProductCard"
import ProductCardLoader from "@/components/shared/ProductCardLoader"

const BestProductSellContainer = ({ productsData, isLoading }: BestProductSellContainerProps) => {
    const bestSellingProductLoader = Array.from({ length: 4 }).map((_, i: number) => <ProductCardLoader showAddToGalleryButton={false} key={i} />)

    const bestSellingProduct = productsData.map(product => (
        <ProductCard
            key={product.id}
            discount={product.default_variant.price.discount_percent || false}
        >
            <ProductCard.image colors={product.colors} imageUrl={product.images.main.webp_url[0]} />
            <ProductCard.information>
                <ProductCard.title title={product.title_fa} productId={product.id} />
                <ProductCard.caption>کپشن فیک برای {product.title_fa}</ProductCard.caption>
                <ProductCard.price
                    rrpPrice={
                        product.default_variant.price.rrp_price === product.default_variant.price.selling_price
                            ? null
                            : product.default_variant.price.rrp_price
                    }
                    price={product.default_variant.price.selling_price}
                />
            </ProductCard.information>
        </ProductCard>
    ))


    return (
        <div className="mt-6 max-md:mt-3 grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-6 max-md:gap-4">
            {isLoading ? bestSellingProductLoader : (productsData.length > 0 && bestSellingProduct)}
        </div>
    )
}

export default BestProductSellContainer