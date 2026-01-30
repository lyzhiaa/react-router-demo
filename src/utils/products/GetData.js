export default async function getProductData(endpoint) {
    const response = await fetch(`https://dummyjson.com/${endpoint}`);
    const data = await response.json();
    return data;
}
