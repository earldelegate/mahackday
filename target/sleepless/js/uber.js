// create placeholder variables
var uberClientId = "iIZurC1l2cfJ8K7XcyItsVljXk1Tl2SX"
	  , uberServerToken = "Z_MPUBA3XNDVKvV4O1qvK3m8qvTI8yZEj7D_D-lu";

var userLatitude
  , userLongitude
  , destLatitude = 40.73782260000001
  , destLongitude = -73.9924356;


navigator.geolocation.watchPosition(function(position) {
    
	 console.log(position);
	 
	// Update latitude and longitude
    userLatitude = position.coords.latitude;
    userLongitude = position.coords.longitude;
    
    
 // Query Uber API if needed
    getEstimatesForUserLocation(userLatitude, userLongitude);
});

function getEstimatesForUserLocation(latitude,longitude) {
	  $.ajax({
	    url: "https://api.uber.com/v1/estimates/price",
	    
	    headers: {
	        "Authorization: Token" : uberServerToken
	    },
	    
	    data: {
	      start_latitude: latitude,
	      start_longitude: longitude,
	      end_latitude: destLatitude,
	      end_longitude: destLongitude
	    },
	   
	    //console.log('Success');
	    
	    success: function(result) {
	      console.log(result);
	    }
})

};