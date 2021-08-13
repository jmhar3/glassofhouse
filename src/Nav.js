import {Link} from 'react-router-dom';
import {Component} from 'react';

export default class Nav extends Component {
    openMenu() {

    }

    render() {
        return (
            <header>
                <div id="menu-head">
                    <img src="./images/NG.jpeg" id="user-icon" />
                    <img src="./images/list.png" onClick={this.openMenu} id="menu-button" />

                    
        <NavLinks />
        <DropMenu username={ this.state.username }/>
            
                    <div id="user-access" className="hidden">
                        <h5 className="user">{this.state.name}</h5>
                        <Link to="/accountaccess">Sign Up Now</Link>
                    </div>
                </div>
                <nav className="navbar hidden">
                    <Link to="/">Explore Swatches</Link>
                    <Link to="/creations">Your Creations</Link>
                    <Link to="/palette">Make Your Own</Link>
                </nav>
            </header>
        )
    }
}