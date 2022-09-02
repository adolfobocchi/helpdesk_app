import { useState } from "react";
import Signin from "../../components/Signin";
import Signup from "../../components/Signup";

function Login() {
    const [openSignup, setOpenSignup] = useState(false);

    return(<div className="loginArea">
        {openSignup ?
            <Signup />
            :
            <Signin openSignup={openSignup} setOpenSignup={setOpenSignup}  />
        }   
        
    </div>)
}

export default Login;