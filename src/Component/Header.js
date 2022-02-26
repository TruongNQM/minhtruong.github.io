import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <header className="header">
                    <div className="header__navbar">
                        <div className="header__navbar-logo">
                            <img src="./image/logo.jpg" alt="" />
                        </div>
                        <div className="header__navbar-item">
                            <div className="header__navbar-item-listItem">
                                <ul>
                                    <li><a href>All Animals</a></li>
                                    <li><a href>Animal Lists</a></li>
                                    <li><a href>Pet Animals</a></li>
                                    <li><a href>Reviews</a></li>
                                    <li><a href>Reference</a></li>
                                    <li><a href>Articles</a></li>
                                </ul>
                            </div>
                            <div className="header__navbar-item-find">
                                <input type="text" placeholder="Search ..." />
                                <button>Search</button>
                            </div>
                        </div>
                    </div>
                </header>

            </div>
        );
    }
}

export default Header;