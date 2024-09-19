import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.scss";
import axios from "axios";


const Register = () => {
const [inputs, setInputs] = useState({
    registro: "",
    nombre: "",
    apellidos: "",
    contraseña: "",
    email: "",
    });
    
    const [err, setErr] = useState(null);

    const handleChange = (e) => {
      setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
  
    const handleClick = async (e) => {
      e.preventDefault();
  
      try {
        await axios.post("http://localhost:8800/api/auth/register", inputs);
      } catch (err) {
        setErr(err.response.data);
      }
    };
  
    console.log(err)
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
                            name="registro"
                           onChange={handleChange}
                        />
                        <input
                            type="text"
                            placeholder="NOMBRE"
                            name = "nombre"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            placeholder="APELLIDOS"
                            name = "apellidos"
                            onChange={handleChange}

                        />
                        <input
                            type="password"
                            placeholder="CONTRASEÑA"
                            name = "contraseña"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            placeholder="EMAIL"
                            name = "email"
                            onChange={handleChange}
                        />
                        {err && err}
                        <button onClick={handleClick}>Registrarse</button>
                    </form>
                </div>
            </div>
        </div>
    );
    };
    
export default Register;