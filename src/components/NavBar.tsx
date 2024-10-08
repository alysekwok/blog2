
import { Link, useLocation } from 'react-router-dom'; 
import "./NavBar.css"

export const NavBar = () => {
    const location = useLocation();
    const pathname = location.pathname;

    const navigationArray = [
        {title: "blog", link: "/blog"},
        {title: "resume", link: "/resume"},
        {title: "contact", link: "/contact"}
    ];

    return (
        <>
            <div className="nav-container">
                <div className='logo-container'>
                    <Link to={"/"} className="logo" style={{textDecoration: 'none'}}>alyse kwok</Link>
                </div>
                
                <div className="nav-links-container">
                    {
                        navigationArray.map(({title, link}) => (
                            <Link to={link} key={link} style={{textDecoration: 'none'}} className="links">
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

