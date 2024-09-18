
import { Link } from "react-router-dom";
import "./register.scss";

const register = () => {
    return (
        <div className="register    ">
            <div className="card">
                <div className="left">
                    <center> <h2>universidad de san carlos de guatemala
                        facultad de ingenieria </h2></center>
                    <p>
                    </p>
                    <span>¿DESEA INICIAR SESION?</span>
                    <Link to="/login">
                      <button>Login</button>
                     </Link>
                </div>
                <div className="right">
                <center><h1>REGISTRARSE</h1> </center>
                    <form>
                        <input
                            type="text"
                            placeholder="REGISTRO O CUI"
                        />
                        <input
                            type="text"
                            placeholder="NOMBRE"
                        />
                        <input
                            type="text"
                            placeholder="APELLIDOS"
                        />
                        <input
                            type="password"
                            placeholder="CONTRASEÑA"
                        />
                        <input
                            type="text"
                            placeholder="EMAIL"
                        />
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
    };
    
export default register;