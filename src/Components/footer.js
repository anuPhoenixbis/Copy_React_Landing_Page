import { pageLinks,socialLinks } from '../data.js';
import { PageLink } from './PageLink.js';
import { SocialLinks } from './SocialLinks.js';
export const Footer = () => {
  return (
    <>
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((link)=> {
          return (
            <PageLink key={link.id} {...pageLinks} itemClass="footer-links" />
          )
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          return (
            <SocialLinks key={link.id} {...link} itemClass='footer-icon' />
          );
        })
        }
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
    </>
  )
}