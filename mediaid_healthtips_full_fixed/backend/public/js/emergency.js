// Emergency page functionality
document.addEventListener('DOMContentLoaded', function() {
  // Initialize map
  if (document.getElementById('mapContainer')) {
    initMap();
  }
  
  // Cancel emergency button
  const cancelBtn = document.getElementById('cancelEmergency');
  if (cancelBtn) {
    cancelBtn.addEventListener('click', function() {
      if (confirm('Are you sure you want to cancel the emergency request?')) {
        // Simulate cancellation
        alert('Emergency request has been cancelled.');
        window.location.href = 'index.html';
      }
    });
  }
});

function initMap() {
  // Default coordinates (center of the map)
  const defaultCoords = [51.505, -0.09]; // London coordinates as example
  
  // Initialize the map
  const map = L.map('mapContainer').setView(defaultCoords, 13);
  
  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  // Add user location marker
  const userMarker = L.marker(defaultCoords, {
    icon: L.divIcon({
      className: 'ambulance-marker',
      html: '<i class="fas fa-user"></i>',
      iconSize: [40, 40]
    })
  }).addTo(map)
    .bindPopup('Your location')
    .openPopup();
  
  // Add ambulance marker (slightly offset for demo)
  const ambulanceCoords = [51.51, -0.1];
  const ambulanceMarker = L.marker(ambulanceCoords, {
    icon: L.divIcon({
      className: 'ambulance-marker',
      html: '<i class="fas fa-ambulance"></i>',
      iconSize: [40, 40]
    })
  }).addTo(map)
    .bindPopup('Ambulance - ETA: 8 minutes');
  
  // Add a line between user and ambulance
  const routeLine = L.polyline([defaultCoords, ambulanceCoords], {
    color: 'red',
    dashArray: '10, 10',
    weight: 4
  }).addTo(map);
  
  // Simulate ambulance movement (for demo)
  if (typeof simulateAmbulanceMovement === 'function') {
    simulateAmbulanceMovement(map, ambulanceMarker, defaultCoords);
  }
}

// Demo function to simulate ambulance movement
function simulateAmbulanceMovement(map, marker, destination) {
  const startPos = marker.getLatLng();
  const steps = 100;
  let step = 0;
  
  const moveInterval = setInterval(() => {
    if (step >= steps) {
      clearInterval(moveInterval);
      return;
    }
    
    step++;
    const newLat = startPos.lat + (destination[0] - startPos.lat) * (step / steps);
    const newLng = startPos.lng + (destination[1] - startPos.lng) * (step / steps);
    
    marker.setLatLng([newLat, newLng]);
    
    // Update ETA display
    const etaElement = document.getElementById('eta');
    if (etaElement) {
      const remainingTime = Math.max(0, 8 - Math.floor(step / (steps / 8)));
      etaElement.textContent = `${remainingTime} minute${remainingTime !== 1 ? 's' : ''}`;
    }
    
    // Update distance display
    const distanceElement = document.getElementById('distance');
    if (distanceElement) {
      const remainingDistance = (2.4 * (1 - step / steps)).toFixed(1);
      distanceElement.textContent = `${remainingDistance} km`;
    }
    
    // Center map on ambulance when close to arrival
    if (step > steps * 0.7) {
      map.setView(marker.getLatLng(), 15);
    }
  }, 300);
}