// This function fetches a specific motorcycle's data from a JSON file
// and updates the page content with the motorcycle details.
// It is designed to be used in a web application where the motorcycle name
// is passed as an argument to fetch the relevant data.
// This function makes the system more modular and reusable.
async function fetchSpecificMotorcycleData(motorcycleName) {
  try {
    // Fetch the JSON data
    const response = await fetch("../JSON/motorcycleDetails.json");

    //The response will use the json function and return the data to the variable named "data"
    const data = await response.json();
    
    // Find the specific motorcycle data
    const motorcycle = data.motorcycle.find(m => m.Name === motorcycleName);

    // If motorcycle data is not found, this will throw an error
    if (!motorcycle) {
      throw new Error("Motorcycle data is not available");
    }

    // This will look for the tag with an element Id of "page-content" and store it to a variable
    const container = document.getElementById("page-content");

    // This will clean the innerHTML of the variable named "container"
    container.innerHTML = "";
    
    // This will be the main content for the motorcycle details page
    // This will be sent to the container which is the page-content div in the html file
    const motorcycleMainContent = `
      <div class="motorcycle-details">
          <div class="motorcycle-image">
            <img src="../motorcycle-images/${motorcycle.Image}" alt="${motorcycle.Name}" onerror="this.style.display=none;"/>
          </div>
          <div class="motorcycle-info">
            <h2 id="motorcycle-name">${motorcycle.Name}</h2>
            <div class="motorcycle-details-header">
              <div class="header-details">
                <p><strong>Product Number:&nbsp;</strong>${motorcycle.Product_Number}</p>
                <p><strong>Model:&nbsp;</strong>${motorcycle.Model}</p>
                <p><strong>Price:&nbsp;</strong>${motorcycle.Price}</p>
              </div>
              <div class="description">
                <p><strong>Description</strong></p>
                <p>${motorcycle.Long_Description}</p>
              </div>
            </div>
            <div class="motorcycle-details-content">
              <div class="details-content">
                <p class="space"><strong>Engine Type:</strong>${motorcycle.Specifications.Engine_Type}</p>
                <p class="space"><strong>Displacement:</strong>${motorcycle.Specifications.Displacement}</p>
                <p class="space"><strong>Starting System:</strong>${motorcycle.Specifications.Starting_System}</p>
                <p class="space"><strong>Ignition System:</strong>${motorcycle.Specifications.Ignition_System}</p>
                <p class="space"><strong>Brake Type Front:</strong>${motorcycle.Specifications.Brake_Type_Front}</p>
                <p class="space"><strong>Brake Type Back:</strong>${motorcycle.Specifications.Brake_Type_Back}</p>
                <p class="space"><strong>Tire Size Front:</strong>${motorcycle.Specifications.Tire_Size_Front}</p>
                <p class="space"><strong>Wheel Type:</strong>${motorcycle.Specifications.Wheel_Type}</p>
              </div>
              <div class="details-content">
                <p class="space"><strong>Overall Dimensions:</strong>${motorcycle.Specifications.Overall_Dimensions}</p>
                <p class="space"><strong>Seat Height:</strong>${motorcycle.Specifications.Seat_Height}</p>
                <p class="space"><strong>Wheelbase:</strong>${motorcycle.Specifications.Wheel_Base}</p>
                <p class="space"><strong>Fuel Tank Capacity:</strong>${motorcycle.Specifications.Fuel_Tank_Capacity}</p>
                <p class="space"><strong>Fuel System:</strong>${motorcycle.Specifications.Fuel_System}</p>
                <p class="space"><strong>Fuel Consumption:</strong>${motorcycle.Specifications.Fuel_Consumption}</p>
                <p class="space"><strong>Transmission Type:</strong>${motorcycle.Specifications.Transmission_Type}</p>
              </div>
            </div>
          </div>
        </div>
    `
    // Update the container with the motorcycle details
    // This will replace the content of the page-content div with the motorcycle details
    container.innerHTML = motorcycleMainContent;
  } 
  // Catch any errors that occur during the fetch or processing
  // If the motorcycle data is not found, it will log an error message
  catch (error) {
    console.error("Error fetching motorcycle data:", error);
  }
}

export { fetchSpecificMotorcycleData };
