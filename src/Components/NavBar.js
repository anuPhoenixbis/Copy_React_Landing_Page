import logo from '../images/logo.svg';
import { pageLinks,socialLinks } from '../data.js';
import { SocialLinks } from './SocialLinks.js';
import { PageLink } from './PageLink.js';

export const Navbar = () => {
    return(
    <>
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className="nav-links" id="nav-links">
          {// this is how we will dynamically render the links using the data.js file
            pageLinks.map((link)=> {
              return (
                <PageLink key={link.id} {...pageLinks} itemClass='nav-links'/>
              );
            })
          }
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((link) => {
            return (
              <SocialLinks key={link.id} {...link} itemClass='nav-icon' />
            );
          })
          }
        </ul>
      </div>
    </nav>
    </>
    );
}