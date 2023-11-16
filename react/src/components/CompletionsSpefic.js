import {useState} from 'react';
import useFetch from "./../lib/useFetch";
import ErrorMsg from "./alerts/Error";

const CompletionsSpefic = ({headerParameters}) => {

    const url = "https://api.openai.com/v1/completions";

    // Default values
    const [inputText, setInputText] = useState("");
    const [temperature, setTemperaturet] = useState(0.9);
    const [model, setModel] = useState("text-davinci-002");
    const [inputTextCustom, setInputTextCustom] = useState("");

    const options = {
        "method": 'POST',
        "headers": headerParameters,
        "body": JSON.stringify({
            "model": model,
            "prompt": inputTextCustom,
            "temperature": temperature
        })
    };

    const optionsStr = JSON.stringify(options);
    const {data, isLoading, status} = useFetch(url, optionsStr, inputTextCustom);

    const handleSubmit = (e) => {
        e.target.disabled = true;
        e.preventDefault();
        setInputText(e.target[0].value);
        setModel(e.target[2].value);
        setTemperaturet(parseInt(e.target[3].value));

        if (e.target[1].value === "1") {
            setInputTextCustom("What is the sentiment of the following text as positive, negative or neutral?\n" + e.target[0].value);
        } else if (e.target[1].value === "2") {
            setInputTextCustom("Classify the following text.\n" + e.target[0].value);
        } else if (e.target[1].value === "3") {
            setInputTextCustom("Translate to French.\n" + e.target[0].value);
        } else if (e.target[1].value === "4") {
            setInputTextCustom("Summarize the following text.\n" + e.target[0].value);
        } else if (e.target[1].value === "5") {
            setInputTextCustom("Complete the content.\n" + e.target[0].value);
        }
    }
    if (data) {
        if (status === 200) {
            document.getElementById("result").value = data.choices[0].text;
        }
    }
    return (
        <>
            <div className="mt-10 mx-auto w-50 p-3">
                <div className="card p-5 shadow bg-light rounded">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
              <textarea name="input" id="input" cols="30" rows="5" className="form-control"
                        placeholder="Enter your prompt text here..."
                        defaultValue={inputText} required></textarea>
                        </div>
                        <div className="form-group my-3">
                            <div className="row">
                                <div className="col">
                                    Operation
                                    <select name="task" id="task" defaultValue={"1"} className="form-control">
                                        <option value="1">Sentiment analysis (Positive, negative or neutral)</option>
                                        <option value="2">Text classification</option>
                                        <option value="3">Translate English to French</option>
                                        <option value="4">Summarize Text</option>
                                        <option value="5">Text completion</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-sm-6">
                                    Model
                                    <select name="model" id="model" defaultValue={model} className="form-control">
                                        <option value="text-davinci-002">text-davinci-002</option>
                                        <option value="text-curie-001">text-curie-001</option>
                                        <option value="text-babbage-001">text-babbage-001</option>
                                        <option value="text-ada-001">text-ada-001</option>
                                    </select>
                                </div>
                                <div className="col-sm-6">
                                    Temperature(0–1) <input type="number" className="form-control" name="temperature"
                                                            min="0" max="1" step="0.01"
                                                            defaultValue={temperature} required></input>
                                </div>
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <button className="form-control btn bg-warning">Get result</button>
                        </div>
                        {data && status !== 200 && <ErrorMsg message={data.error}/>}
                        {isLoading === 2 && (
                            <div className="text-center">
                                <div className="spinner-grow text-primary" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        )}
                        <div className="form-group">
                            <textarea name="result" id="result" cols="30" rows="5" className="form-control"
                                      placeholder="Result will be shown here..." readOnly></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default CompletionsSpefic;