// 🛡️ Safety Wrapper: Forces the script to wait until all CDN dependencies are fully loaded
window.addEventListener('load', function () {
    
    // 1. Turn off caching for non-HTTPS IP deployment
    maptiler.config.caching = false;

    // 2. Set your API Key
    maptiler.config.apiKey = maptilerApiKey;

    // 3. Initialize your map container
    const map = new maptiler.Map({
        container: 'map',
        style: maptiler.MapStyle.STREETS,
        center: campground.geometry.coordinates,
        zoom: 10
    });

    // 4. Add your marker logic
    new maptiler.Marker()
        .setLngLat(campground.geometry.coordinates)
        .setPopup(
            new maptiler.Popup({ offset: 25 })
                .setHTML(`<h3>${campground.title}</h3><p>${campground.location}</p>`)
        )
        .addTo(map);
});
