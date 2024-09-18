
import { Link } from "react-router-dom";
import "./login.scss";

const login = () => {
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
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
    };
    
export default login;