export default function formatNumber(str) {
    const firstSymbol = str[0] === '+' ? '+' : '+7';
    return `${firstSymbol}${str.slice(1).replace(/\D/g, '')}`;
}
