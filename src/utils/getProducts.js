const getProducts = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();

        // Create an array from each item
        const itemsArray = data.map(item => {
            return {
                id: item.id,
                title: item.title,
                price: item.price,
                description: item.description,
                image: item.image,
            };
        });
        return itemsArray;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export default getProducts;
