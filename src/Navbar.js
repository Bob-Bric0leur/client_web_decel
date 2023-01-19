import {Fragment} from 'react';

import './navbar.css';

function Navbar() {
    return (
        <Fragment> 
            <div class="nav">
                <div class="nav-header noselect">
                    <img src="DECEL_logo.png" alt="Logo-Decel"/>

                    <ul>
                        <li class="noselect">
                            Remote LAB
                        </li>
                        <li class="noselect">
                            Configuration
                        </li>
                    </ul>
                </div>
            </div>
        </Fragment>
    );  
}

export default Navbar;