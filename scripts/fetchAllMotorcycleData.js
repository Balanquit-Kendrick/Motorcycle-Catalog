// This Function will load motorcycle data from a JSON file and display it on the page
// It uses the Fetch API to retrieve the data and dynamically generates HTML content for each motorcycle
async function fetchAllMotorcycleData() {
  try {
    // Fetch the JSON data
    const response = await fetch("./JSON/motorcycleDetails.json");

    // Check if the response is successful
    if (!response.ok) {
      throw new Error("File not found or inaccessible.");
    }

    //The response will use the json function and return the data to the variable named "data"
    const data = await response.json();
     
    // Check if the data is valid
    // If the data is not available or in the wrong format, throw an error
    if (
      !data ||
      !data.motorcycle ||
      !Array.isArray(data.motorcycle) ||
      data.motorcycle.length === 0
    ) {
      throw new Error("Motorcycle data is not available");
    }

    // This will look for the tag with an element Id of "page-content" and store it to a variable
    const container = document.getElementById("page-content");

    // This will clean the innerHTML of the variable named "container"
    container.innerHTML = "";

    // Iterate through the motorcycle data
    // This will create a card for each motorcycle
    data.motorcycle.forEach((motorcycle) => {
      const motorcycleCard = `
    <div class="card" id="motorcycle-card">
      <a href="./motorcycle-pages/${motorcycle.Link}" class="card-link">
      <div class="badge">HOT SALE</div>
      <div class="tilt">
          <div class="img">
          <img
              id="motorcycle-image"
              src="./motorcycle-images/${motorcycle.Image}"
              alt="Motorcycle"
          />
          </div>
      </div>
      <div class="info">
        <div class="cat" id="motorcycle-type">${motorcycle.Motorcycle_type}</div>
          <h2 class="title" id="motorcycle-name">${motorcycle.Name}</h2>
          <h4 class="product_number" id="motorcycle-product-number">${motorcycle.Product_Number}</h4>
          <p class="desc" id="motorcycle-description">
              ${motorcycle.Short_Description}
          </p>
          <div class="feats" id="motorcycle-features">
              <span class="feat">${motorcycle.Specifications.Engine_Type}</span>
              <span class="feat">${motorcycle.Specifications.Displacement}</span>
              <span class="feat">${motorcycle.Specifications.Fuel_Consumption}</span>
          </div>
          <div class="bottom">
          <div class="price">
              <span class="old">${motorcycle.Old_Price}</span>
              <span class="new" id="motorcycle-price">${motorcycle.Price}</span>
          </div>
          <button class="btn">
              <span>More Details</span>
          </button>
          </div>
          <div class="meta">
            <div class="rating">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="#FFD700"
                stroke="#FFD700"
                stroke-width="0.5"
              >
              <polygon
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
              />
              </svg>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="#FFD700"
                stroke="#FFD700"
                stroke-width="0.5"
              >
              <polygon
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
              />
              </svg>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="#FFD700"
                stroke="#FFD700"
                stroke-width="0.5"
              >
              <polygon
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
              />
              </svg>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="#FFD700"
                stroke="#FFD700"
                stroke-width="0.5"
              >
              <polygon
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
              />
              </svg>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="#FFD700"
                stroke="#FFD700"
                stroke-width="0.5"
              >
              <polygon
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
              />
              </svg>
              <span class="rcount">${motorcycle.Reviews} Reviews</span>
            </div>
          <div class="stock">In Stock</div>
        </div>
      </div>
      </a>
    </div>
    `;
      // Append the motorcycle card to the container
      // This will display the motorcycle cards on the page
      container.innerHTML += motorcycleCard;
    });
  } catch (error) {
    console.error("Error loading motorcycle data:", error);
    // Show error message in case of failure
    document.getElementById("motorcycle-name").textContent =
      "Error loading data";
    document.getElementById("motorcycle-description").textContent =
      "Unable to load motorcycle details.";
  }
}

// Load the data when the page loads
document.addEventListener("DOMContentLoaded", fetchAllMotorcycleData);

export { fetchAllMotorcycleData };
