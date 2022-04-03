import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div className='navbar-dark bg-dark shadow'>
        
        <div className="container">
          <div className="row">

            <div className="col-md-12">
                  <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid ">
                
                
                <Link class="navbar-brand"  to={'/'}>Logo</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
                  
                            
                                   <Link class="nav-link "   to={'/'}>Home</Link>
        </li>
        <li class="nav-item">
                  
                            
                                   <Link class="nav-link "   to={'/about'}>About</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link"   to={'/contact'}>Contact</Link>

        </li>
        
      
        
      </ul>
     
    </div>
  </div>
</nav>
            </div>
          </div>
</div>

   </div>
    );
};

export default Header;