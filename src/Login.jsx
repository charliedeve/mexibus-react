import React, { useState } from "react";
import "./Login.css"
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import 'primeicons/primeicons.css';


export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [inputType, setInputType] = useState('password');
    const [iconButton, setIconButton] = useState('pi pi-eye')

    const capturaUsuario = (e) => {
        setUsername(e.target.value)
    }

    const capturaPassword = (e) => {
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
                <form>
                    <div className="input-text-username">
                        <FloatLabel>
                            <InputText
                                id="username"
                                onChange={capturaUsuario} />
                            <label htmlFor="username">Usuario</label>
                        </FloatLabel>
                    </div>
                    <div className="pass-input">
                        <FloatLabel>
                            <InputText
                                id="password"
                                type={inputType}
                                onChange={capturaPassword} />
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
                        type="Submit"
                        className="button-submit">
                    </Button>
                </form>
            </div>
        </>
    );
}

export default Login;