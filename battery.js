// Get the battery percentage
navigator.getBattery().then(function(battery) {
    const batteryPercentage = Math.round(battery.level * 100);
  
    // Construct the RoboHash API URL
    const roboHashUrl = `https://robohash.org/${batteryPercentage}percent.png`;
  
    // Make a request to the RoboHash API
    fetch(roboHashUrl)
      .then(response => response.blob())
      .then(blob => {
        const imageUrl = URL.createObjectURL(blob);
        const batteryImage = document.getElementById('battery-image');
        batteryImage.src = imageUrl;
      })
      .catch(error => console.error('Error:', error));
  });