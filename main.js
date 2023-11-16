// Endpoint URL
const SECRET_KEY = ""; //<<SECRET_KEY>>;
const endpointUrl = "https://api.openai.com/v1/models";

// Header Parameters
const headerParameters = {
  "Authorization": "Bearer "+SECRET_KEY
};

// Setting API call options
const options = {
  method: "GET",
  headers: headerParameters
};

// Function to make API call
async function getModels() {
  try {
    const response = await fetch(endpointUrl, options);

    // Printing response
    console.log(response);
  } catch (error) {
    // Printing error message
    console.log(error);
  }
}

// Calling function to make API call
getModels();
