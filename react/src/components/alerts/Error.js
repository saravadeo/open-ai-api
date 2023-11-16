const ErrorMsg = ({message}) => {
    return (
        <div className="col-md-12">
            <div className="alert alert-danger alert-dismissible">
                {message}
                <button className="close" data-dismiss="alert" aria-label="close">&times;</button>
            </div>
        </div>
    );
}

export default ErrorMsg;