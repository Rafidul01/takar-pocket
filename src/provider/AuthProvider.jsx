import { createContext } from "react";
import PropTypes from "prop-types";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {

    const axiosPublic = useAxiosPublic();

    const userRegister = (user) => {

        axiosPublic.post("/users", user)
        .then((res) => {
            console.log(res);
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Registered successfully",
                showConfirmButton: false,
                timer: 1500
              });
        })
        .catch((err) => {
            console.log(err);  
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                
              }); 
        })
    }


    const authInfo = {
        userRegister,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,   
}
export default AuthProvider;