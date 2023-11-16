# open-ai-api

## Completion API

### Endpoint

**Endpoint URL:** `https://api.openai.com/v1/completions`

**Method:** POST

### Request Parameters

- **engine (String):** Required. ID of the engine for the task.
- **prompt (String/Array):** Optional. Text for completions generation.
- **max_tokens (Integer):** Optional. Maximum tokens in the completion. Default: 16.
- **temperature (Float):** Optional. Token sampling method. Default: 1.
- **top_p (Float):** Optional. Nucleus sampling. Default: 1.
- **suffix (String):** Optional. Text at the end for better generation.
- **n (Integer):** Optional. Number of completions. Default: 1.
- **logprobs (Integer):** Optional. Number of tokens with highest likelihood. Default: null.
- **best_of (Integer):** Optional. Server-side generates best_of completions. Default: 1.
- **presence_penalty (Integer):** Optional. Penalizes new tokens based on presence. Range: -2.0 to 2.0.
- **frequency_penalty (Integer):** Optional. Penalizes new tokens based on existing frequency. Range: -2.0 to 2.0.

### Response

- **choices (Array):** Array of objects with logprobs and generated text.

## Sample API Call

```javascript
// Define endpoint URL
const endpointUrl = "https://api.openai.com/v1/completions";

// Define Header Parameters
const headerParameters = {
  "Authorization": "Bearer {{SECRET_KEY}}",
  "Content-Type": "application/json"
};
    