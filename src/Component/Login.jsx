import { useContext } from "react";
import { Link } from "react-router";
import { EspressoContext } from "../ContextApi/Context";

const Login = () => {
    const { processLogin } = useContext(EspressoContext)
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.pass.value;
        processLogin(email, pass)
    }
    return (
        <div className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box mx-auto mt-36">
            <form onSubmit={handleLogin}>
                <legend className="fieldset-legend text-xl">Login</legend>


                <label className="fieldset-label">Email</label>
                <input type="email" className="input" placeholder="Email" name="email" />

                <label className="fieldset-label">Password</label>
                <input type="password" className="input" placeholder="Password" name="pass" />

                <button className="btn btn-neutral mt-4">Login</button>
            </form>
            <p>Forgot Password</p>
            <p>Don't have an account? <Link className="text-amber-950 font-bold" to='/signup'>Register</Link></p>
        </div>
    );
};

export default Login;