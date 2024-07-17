import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("userInfo")) || null);
    

    const axiosPublic = useAxiosPublic();

    const userRegister = (userData) => {

        const storeData = {
            name: userData.name,
            email: userData.email,
            number: userData.number,
            role: '',
            
        }

        axiosPublic.post("/users", userData)
        .then((res) => {
            console.log(res);
            setUser(storeData);
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

    console.log(user);
    useEffect(() => {
        if(user) {
            localStorage.setItem("userInfo", JSON.stringify(user));
            return;
        }

        localStorage.removeItem("userInfo");  
        
      }, [user]);


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