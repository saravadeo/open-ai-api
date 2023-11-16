const Success = ({message}) => {
    return (
        <div className="col-md-12">
            <div className="alert alert-success alert-dismissible">
                {message}
                <button className="close" onClick={message = null} data-dismiss="alert"
                        aria-label="close">&times;</button>
            </div>
        </div>
    );
}

export default Success;