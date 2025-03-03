import { useContext } from "react";
import { EspressoContext } from "./ContextApi/Context";
import { useNavigate } from "react-router";


const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    const { newuser } = useContext(EspressoContext);
    if (!newuser) {
        navigate('/')
    }

    return children


};

export default AuthProvider;