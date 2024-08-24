const fs = require('fs');

function generateRandomCoordinate(min, max) {
    return (Math.random() * (max - min) + min).toFixed(6);
}

function generateRandomRatings() {
    const numberOfRatings = Math.floor(Math.random() * 6) + 1;
    return Array.from({ length: numberOfRatings }, () => Math.floor(Math.random() * 5) + 1);
}

function generateRestaurantData() {
    const names = [
        "The Culinary Spot", "Ocean View Diner", "Mountain Peak Cafe", "Urban Street Eatery",
        "Green Valley Grill", "Sunset Terrace", "Downtown Delights", "The Rustic Barn",
        "Lakeside Bistro", "Cultural Bites", "Gourmet Junction", "Bistro 360", "The Spice Trail",
        "Cafe Roma", "Grill House", "Artisan's Table", "Harvest Table", "Bayside Eatery",
        "Taste of the Orient", "Sunrise Cafe", "The Seafood Shack", "The Garden Grill",
        "The Chef's Table", "The Noodle House", "The Steakhouse", "The Vegan Delight", "The Pizza Parlor"
    ];
    const descriptions = [
        "A cozy place offering a wide range of local and international dishes.",
        "A perfect spot with a stunning view of the ocean, known for seafood.",
        "A quiet place at the top of the hill, famous for its coffee and desserts.",
        "A trendy urban eatery known for its street food fusion dishes.",
        "A farm-to-table restaurant offering organic and fresh dishes.",
        "An open-air restaurant with a view of the sunset, offering a variety of grills.",
        "A popular spot in the heart of the city, known for its fusion cuisine.",
        "A charming restaurant with a rustic ambiance, serving comfort food.",
        "A relaxed dining experience by the lake, offering continental cuisine.",
        "A cultural hotspot serving authentic local cuisine with a twist.",
        "An upscale restaurant with a focus on gourmet meals.",
        "A trendy rooftop bistro offering panoramic city views.",
        "A vibrant restaurant known for its flavorful spices and dishes.",
        "A cozy Italian cafe offering a variety of coffees and pastries.",
        "A casual restaurant specializing in grilled meats and seafood.",
        "An elegant restaurant offering artisan-crafted dishes.",
        "A restaurant with a focus on fresh, locally sourced ingredients.",
        "A casual eatery with a view of the bay, offering seafood and more.",
        "A restaurant offering a wide range of authentic Asian cuisine.",
        "A bright and airy cafe known for its breakfast and brunch menu.",
        "A laid-back eatery offering a variety of fresh seafood dishes.",
        "A garden-themed restaurant offering fresh and healthy meals.",
        "An exclusive dining experience with a rotating seasonal menu.",
        "A casual spot offering a wide range of noodle dishes from around the world.",
        "A high-end steakhouse offering premium cuts of meat.",
        "A popular vegan restaurant known for its creative plant-based dishes.",
        "A lively spot known for its wood-fired pizzas and cozy ambiance."
    ];

    const restaurants = [];

    for (let i = 0; i < 100; i++) {
        const name = names[Math.floor(Math.random() * names.length)];
        const description = descriptions[Math.floor(Math.random() * descriptions.length)];
        const latitude = generateRandomCoordinate(17.340000, 17.350000);
        const longitude = generateRandomCoordinate(78.340000, 78.350000);
        const ratings = generateRandomRatings();

        restaurants.push({
            name,
            description,
            location: {
                latitude: parseFloat(longitude),
                longitude: parseFloat(latitude)
            },
            ratings
        });
    }

    return restaurants;
}

const restaurantData = generateRestaurantData();

fs.writeFileSync('restaurants.json', JSON.stringify(restaurantData, null, 2), 'utf-8');
console.log('Generated 100 restaurant data entries and saved to restaurants.json');