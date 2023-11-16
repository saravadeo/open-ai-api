// Define endpoint URL here
const SECRET_KEY = ""; //<<SECRET_KEY>>;
const endpointUrl = "https://api.openai.com/v1/completions";

// Define Header Parameters here
const headerParameters = {
    "Authorization": "Bearer "+SECRET_KEY,
    "Content-Type": "application/json"
};

// Body Parameters
const bodyParameters = JSON.stringify({
    model: "text-davinci-002",
    prompt: "Write a tagline about artificial intelligence.",
    temperature: 0.9
});

// Setting API call options
const options = {
    method: "POST",
    headers: headerParameters,
    body: bodyParameters
};

// Function to make API call
async function createCompletion() {
    try {
        const response = await fetch(`${endpointUrl}`, options);
        // Printing response
        console.log(response);
    } catch (error) {
        // Printing error message
        console.log(error);
    }
}

// Calling function to make API call
createCompletion();