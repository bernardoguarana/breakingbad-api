import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import styles from "./header.module.css"

export function Header(){
    
    return(                
        
        <header className={styles.header}>
            
            <img src={logo} alt="" />  
            <nav className={styles.menu}>
                <Link to="/">Home</Link>
                <Link to="/breaking-bad">Breaking Bad</Link>
                <Link to="/better-call-saul">Better Call Saul</Link>
            </nav>

        </header>
        
    )

}