import "../styles/style1.css"
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Sign = () => {

    const [login, setLogin] = useState<string>("")

    const changeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value)
    }

    return (
        <div className="sign-container">
            <div className="sign-in-block">
                <div>
                    <p>Username:</p>
                    <input value={login} onChange={changeLogin} ></input>
                </div>
                <div>
                    <p>Password: </p>
                    <input type="password"></input>
                </div>
                <div className="btn">
                    <Link to={login === "admin" ? "/admin-tournaments" : "/" } state={login === "admin" ? null : "user" } className="submit-btn">Login</Link>
                </div>
            </div>
        </div>
    );
}