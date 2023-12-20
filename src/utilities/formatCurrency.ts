const CURRENCY_FORMATTER = new Intl.NumberFormat('sl-SL', { 
    currency: "EUR", 
    style: "currency",
})


export function formatCurrency(number: number) {
    return CURRENCY_FORMATTER.format(number)
}