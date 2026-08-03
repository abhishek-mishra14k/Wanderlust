
// const map = L.map("map").setView([26.8500, 80.9499], 9);

// L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//     attribution: "&copy; OpenStreetMap contributors"
// }).addTo(map);

// // L.marker([26.8500, 80.9499]).addTo(map);

// const marker = L.marker([coordinates[1], coordinates[0]]).addTo(map);


const map = L.map("map").setView([coordinates[1], coordinates[0]], 10);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

L.marker([coordinates[1], coordinates[0]])
    .addTo(map)
    .bindPopup(`
        <h4>${coordinates[1]}, ${coordinates[0]}</h4>
        <p>Exact location will be provided after booking.</p>
    `);
