import SpecialItemBox from "./SpecialItemBox"

const SpecialSellContainer = () => {
    return (
        <div className="mt-6 max-md:mt-3 grid grid-cols-12 max-md:grid-cols-4 gap-x-6 max-md:gap-x-4 items-center">
            <SpecialItemBox discountNumber={20} className="relative col-span-6 max-md:col-span-2 h-144 max-lg:h-100 max-md:h-33.5 max-md:rounded-lg rounded-2xl special-sell__item overflow-hidden" boxImage="/images/Special-Item-Image.png" boxTitle="تست" />
            <div className="col-span-6 max-md:col-span-2 h-full max-md:rounded-lg flex items-center justify-center flex-col gap-y-4 max-md:gap-y-1.5">
                <div className="size-full flex items-center gap-x-6 max-md:gap-x-4">
                    <SpecialItemBox discountNumber={20} className="size-full rounded-2xl max-md:rounded-lg relative special-sell__item overflow-hidden" boxImage="/images/Special-Item-Image.png" boxTitle="تست" />
                    <SpecialItemBox discountNumber={20} className="size-full rounded-2xl max-md:rounded-lg relative special-sell__item overflow-hidden" boxImage="/images/Special-Item-Image.png" boxTitle="تست" />
                </div>
                <div className="size-full flex items-center gap-x-6 max-md:gap-x-4">
                    <SpecialItemBox discountNumber={20} className="size-full rounded-2xl max-md:rounded-lg relative special-sell__item overflow-hidden" boxImage="/images/Special-Item-Image.png" boxTitle="تست" />
                    <SpecialItemBox discountNumber={20} className="size-full rounded-2xl max-md:rounded-lg relative special-sell__item overflow-hidden" boxImage="/images/Special-Item-Image.png" boxTitle="تست" />
                </div>
            </div>
        </div>
    )
}

export default SpecialSellContainer