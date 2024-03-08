import { NavLink } from "react-router-dom";

const Logo = () =>{
    return(
        <div className="logo h-12 w-12 flex items-center justify-center">
            <NavLink to="/"><h1 className="text-xl font-bold">TinyApps</h1></NavLink>
            
        </div>
    );
}

export default Logo;