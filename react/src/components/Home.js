import logo1 from './../images/openai.jpeg';

const Home = () => {
    return (
        <>
            <div className="row mt-10 mx-auto w-75 p-3">
                <div className="col-sm-6">
                    <div className="pt-4">
                        <figure className="figure">
                            <img src={logo1} className="figure-img img-fluid rounded" width="300" height="300"
                                 alt="..."/>
                            <figcaption className="figure-caption text-right"></figcaption>
                        </figure>
                    </div>
                </div>
                The completions endpoint can be used to perform many tasks on a text, including classification,
                generation, transformation,
                completion of incomplete text, factual responses, and others.
            </div>

            <div className="row mt-10 mx-auto w-75 p-3">
                <div className="col-sm-6">
                    <div className="card text-white bg-secondary mb-3 border-dark">
                        <div className="card-body">
                            <h5 className="card-title">Design Your Own Prompt</h5>
                            <p className="card-text">The completions endpoint needs instructions in the form of a prompt
                                to process the request. Click the button below to design your own prompt and get results
                                from the OpenAI API.</p>
                            <a href="/completions-generic" className="btn btn-primary">Completions</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card text-white bg-secondary mb-3 border-dark">
                        <div className="card-body">
                            <h5 className="card-title">Specific Tasks with Completions</h5>
                            <p className="card-text">The completion endpoint can perform tasks like sentiment analysis,
                                classification, translation, summarization, and text completion. Click the button below
                                to perform any of these operations and get results from the OpenAI API.</p>
                            <a href="/completions-specific" className="btn btn-primary">Specific Tasks</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;