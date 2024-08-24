const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const radius = 6371; // Earth's radius in kilometers

    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    // console.log('the dlat and dlon', dLat, dLon);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    // console.log(a);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    // console.log(c);

    const distance = radius * c; // Distance in kilometers
    // console.log(distance);

    return distance;
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

module.exports = { calculateDistance };