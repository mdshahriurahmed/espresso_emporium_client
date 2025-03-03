import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { EspressoContext } from "../ContextApi/Context";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import auth from "./firebaseconfig";


const Signup = () => {
    const navigate = useNavigate()
    const { handleRegisterwithEmail } = useContext(EspressoContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const newevent = e.target;
        const name = newevent.name.value
        const email = newevent.email.value
        const pass = newevent.pass.value
        const role = "customer"
        handleRegisterwithEmail(email, pass)
            .then((userCredential) => {
                // Signed up 

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                    navigate('/dashboard')
                    toast.success('Registration successful!');
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    toast.error(error.message);
                    // An error occurred
                    // ...
                });


                // ...
            })
            .catch((error) => {
                toast.error(error.message);
            });


    }
    return (
        <div className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box mx-auto mt-36">
            <form onSubmit={handleRegister}>
                <legend className="fieldset-legend text-2xl">Signup</legend>


                <label className="fieldset-label">Name</label>
                <input type="text" className="input" placeholder="Name" name="name" />
                <label className="fieldset-label">Email</label>
                <input type="email" className="input" placeholder="Email" name="email" />

                <label className="fieldset-label">Password</label>
                <input type="password" className="input" placeholder="Password" name="pass" />

                <button className="btn btn-neutral mt-4">Submit</button>
            </form>

            <p>Already have an account? <Link className="text-amber-950 font-bold" to='/login'>Login</Link></p>
        </div>
    );
};

export default Signup;