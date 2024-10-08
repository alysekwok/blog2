
import { Link, useLocation } from 'react-router-dom'; 
import "./NavBar.css"

export const NavBar = () => {
    const location = useLocation();
    const pathname = location.pathname;

    const navigationArray = [
        {title: "Home", link: "/"},
        {title: "Blog", link: "/blog"},
        {title: "Resume", link: "/resume"},
        {title: "Contact", link: "/contact"}
    ];

    return (
        <>
            <div className="nav-container">
                <div className='logo-container'>
                    <Link to={"/"} className="logo">Alyse Kwok</Link>
                </div>
                
                <div className="nav-links-container">
                    {
                        navigationArray.map(({title, link}) => (
                            <Link to={link} key={link}>
                                <p>
                                    {title}
                                </p>
                            </Link>

                        ))}
                </div>
            </div>
 
        </>

    );
}

