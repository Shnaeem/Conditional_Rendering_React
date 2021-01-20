import { useState} from "react";
import Greeting from "./Greetings";
import LoginButton from "./LoginButton";
import LogoutButton from"./LogoutButton";


function LoginControl(){

    const [IsLoggedIn, setIsLoggedIn] = useState(false)
    const handleLoginClick = () => {
        setIsLoggedIn(true);
    };
    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    };

    let button;

    if(IsLoggedIn){
        button = <LogoutButton onClick={handleLogoutClick}/>
    }else{
        button = <LoginButton onClick={handleLoginClick}/>
    }
    
    return(
        <div>
            <Greeting isLoggedIn={IsLoggedIn}/>
            {button}
        </div>
    )
    
}

export default LoginControl;