import React, { useState, useRef } from "react";
import "./Login.css"
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import 'primeicons/primeicons.css';
import { Toast } from 'primereact/toast';
import { useNavigate} from 'react-router-dom';


export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [inputType, setInputType] = useState('password');
    const [iconButton, setIconButton] = useState('pi pi-eye');
    const toast = useRef(null);
    const navigate = useNavigate();


    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.token);  // Guarda el token JWT en localStorage
                navigate('/primeraLinea');  // Redirige a una ruta protegida
            } else {
                toast.current.show({ severity: 'warn', summary: 'Error', detail: 'Usuario o Contraseña Incorrecto' });
            }
        } catch (error) {
          }
    };

    const getUsuario = (e) => {
        setUsername(e.target.value)
    }

    const getPassword = (e) => {
        setPassword(e.target.value)
    }

    const showPassword = () => {
        setInputType(inputType == 'password' ? 'text' : 'password')
        setIconButton(iconButton == 'pi pi-eye' ? 'pi pi-eye-slash' : 'pi pi-eye')
    }

    return (
        <>
            <div className="container-form">
                <h1>Iniciar Sesión</h1>
                <div className="header-container">
                </div>
                <Toast ref={toast} />
                <form onSubmit={handleLogin}>
                    <div className="input-text-username">
                        <FloatLabel>
                            <InputText
                                id="username"
                                onChange={getUsuario} />
                            <label htmlFor="username">Usuario</label>
                        </FloatLabel>
                    </div>
                    <div className="pass-input">
                        <FloatLabel>
                            <InputText
                                id="password"
                                type={inputType}
                                onChange={getPassword} />
                            <label htmlFor="password">Contraseña</label>
                        </FloatLabel>
                        <Button
                            id="eye-password"
                            icon={iconButton}
                            type="button"
                            onClick={showPassword}
                            className="show-pass-button"
                        />
                    </div>
                    <Button
                        label="Ingresar"
                        type="submit"
                        className="button-submit">
                    </Button>
                </form>
            </div>
        </>
    );
}

export default Login;