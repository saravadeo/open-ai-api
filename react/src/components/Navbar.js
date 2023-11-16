import logo from '../images/openai.jpeg';

const Navbar = () => {
    return (
        <nav className="navbar navbar-light" style={{"backgroundColor": "#e3f2fd"}}>
            <li className="navbar-brand">
                <img src={logo} width="35" height="40" className="d-inline-block align-top" alt="OpenAI"></img>
                <a className="navbar-brand" style={{"paddingLeft": "10px", "fontWeight": "bold"}} href="/">OpenAI API
                    Demo Application</a>
            </li>
        </nav>
    );
}

export default Navbar;