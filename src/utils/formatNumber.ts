export const formatNumber = (number: number) => {
    if (number > 1_000_000) return (number / 1_000_000).toFixed(1) + ' میلیون'
    else if (number < 1_000_000 && number >= 10_000) return (number / 1_000).toFixed(1) + ' هزار'
    else if (number < 10_000) return String(number.toLocaleString())
}