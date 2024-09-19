import { Link } from "react-router-dom";
import "./login.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Login = () => {

    const {login} = useContext(AuthContext);

    const handleLogin = () => {
        login();
    };

    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <center> <h2>universidad de san carlos de guatemala
                        facultad de ingenieria </h2></center>
                    <p>
                    </p>
                    <span>¿DESEA CREAR UNA CUENTA?</span>
                    <Link to="/register">
                    <button>Register</button>
                    </Link>
                </div>
                <div className="right">
                <center><h1>iniciar sesion ingenieria</h1> </center>
                    <form>
                        <input
                            type="text"
                            placeholder="REGISTRO"
                        />
                        <input
                            type="password"
                            placeholder="CONTRASEÑA"
                        />
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
    };
    
export default Login;