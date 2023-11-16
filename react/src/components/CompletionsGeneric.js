import {useState} from 'react';
import useFetch from "./../lib/useFetch";
import ErrorMsg from "./alerts/Error";

const CompletionsGeneric = ({headerParameters}) => {
    const url = "https://api.openai.com/v1/completions";
    let placeholder = "Classify the Text’s label as positive, neutral, or negative.\nText: I loved this course! It was an interactive and helpful learning experience.\n\nSentiment:";
    let initialInputText = placeholder;
    // Default values
    const [inputText, setInputText] = useState("");
    const [temperature, setTemperaturet] = useState(0.9);
    const [length, setLength] = useState(32);
    const [model, setModel] = useState("text-davinci-002");

    const options = {
        "method": 'POST',
        "headers": headerParameters,
        "body": JSON.stringify({
            "model": model,
            "prompt": inputText,
            "max_tokens": length,
            "temperature": temperature
        })
    };

    const optionsStr = JSON.stringify(options);
    let {data, isLoading, status} = useFetch(url, optionsStr, inputText);

    const handleSubmit = (e) => {
        e.target.disabled = true;
        e.preventDefault();

        setInputText(e.target[0].value);
        setModel(e.target[1].value);
        setTemperaturet(parseInt(e.target[2].value));
        setLength(parseInt(e.target[3].value));
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
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="form-group">
              <textarea name="input" id="input" cols="30" rows="8" className="form-control" placeholder={placeholder}
                        defaultValue={initialInputText} required></textarea>
                        </div>
                        <div className="form-group my-3">
                            <div className="row">
                                <div className="col-sm-4">
                                    Model
                                    <select name="model" id="model" defaultValue={model} className="form-control">
                                        <option value="text-davinci-002">text-davinci-002</option>
                                        <option value="text-curie-001">text-curie-001</option>
                                        <option value="text-babbage-001">text-babbage-001</option>
                                        <option value="text-ada-001">text-ada-001</option>
                                    </select>
                                </div>
                                <div className="col-sm-4">
                                    Temperature(0–1) <input type="number" className="form-control" name="temperature"
                                                            min="0" max="1" step="0.01"
                                                            defaultValue={temperature} required></input>
                                </div>
                                <div className="col-sm-4">
                                    Max. Length <input type="number" className="form-control" name="length" min="1"
                                                       max="4000" step="1"
                                                       defaultValue={length}></input>
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

export default CompletionsGeneric;