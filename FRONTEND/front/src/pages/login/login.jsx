import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {

    const [inputs, setInputs] = useState({
        registro: "",
        contraseña: "",
        });
        const [err, setErr] = useState(null);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/")
    } catch (err) {
      setErr(err.response.data);
    }
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
                            name = "registro"
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            placeholder="CONTRASEÑA"
                            name = "contraseña"
                            onChange={handleChange}
                        />
                        {err && err}
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
    };
    
export default Login;