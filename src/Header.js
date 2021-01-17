import React from 'react'
import './Header.css'
import PinterestIcon from '@material-ui/icons/Pinterest';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import TextsmsRoundedIcon from '@material-ui/icons/TextsmsRounded';
import CopyrightRoundedIcon from '@material-ui/icons/CopyrightRounded';
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
function Header() {
    // const [blueBorder, setBlueBorder] = useState();
    return (
        <div className="header">
            <Router>
            <div className="header__wrapper">
                <div className="header__left">
                     <Link exact to="/" className="btn__logo">
                         <div className="header__logo">
                             <IconButton>
                    <PinterestIcon />
                             </IconButton>
                     </div>
                     </Link>
                     <div className="header__button homePage">
                    <Link className="btn home" exact to="/" >Home Page</Link>
                    </div>
                      <div className="header__button following">
                    <Link className="btn following" to="/following">Following</Link>    
                    </div>
                </div>
                <div className="header__center">
                    <div className="header__search__container">
                    <IconButton>
                    <SearchIcon />
                    </IconButton>

                    <form className="header__form">
                        <input type="text" placeholder="Search"/>
                        {/* <button className="btn">Submit</button> */}
                    </form>
                    </div>
                </div>
                <div className="header__right">
                    <div className="header__right__icon">
                        <IconButton>
                    <NotificationsIcon style={{color: '#333'}} />
                        </IconButton>

                    </div>
                    <div className="header__right__icon">
                        <IconButton>
                    <TextsmsRoundedIcon style={{color: '#777'}} />

                        </IconButton>
                    </div>
                    <div className="header__right__icon">
                        <IconButton>
                    <CopyrightRoundedIcon style={{color: '#333'}}/>
                        </IconButton>

                    </div>
                    <div className="header__right__icon icon-one">
                        <IconButton>
                    <KeyboardArrowDownRoundedIcon />
                        </IconButton>

                    </div>

                </div>
            </div>
            </Router>
        </div>
    )
}

export default Header
