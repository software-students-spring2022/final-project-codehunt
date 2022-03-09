import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../public/img/Code}{unt-logos_transparent.png'
import nav_icon from '../public/img/Code}{unt-nav-icon_transparent.png'
import profile_icon from '../public/img/Code}{unt-profile-icon_transparent.png'

const Header = props => {
    return (
        <Header className = "Header-header">
            <nav className="Header-nav">
                <ul className="Header-nav-links">
                    <li className="Header-nav-logo">
                        <Link to="/">
                               <img src={logo}/>
                        </Link>
                    </li>
                    <li className="Header-nav-nav">
                        <Link to="/Navigation">
                            <img src={nav_icon}/>
                        </Link>
                    </li>
                    <li className="Header-nav-profile">
                        <Link to="/UserSettings">
                            <img src={profile_icon}/>
                        </Link>
                    </li>
                </ul>
            </nav>
        </Header>
    )
}