import SocialLink from "../components/SocialLink"
import { socialLinks } from "../utils/website_data"

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="main-footer">
  <div className="footer-content container">
    <p>Copyright © {year}. All Rights Reserved</p>
    <div className="social">
      {socialLinks.map(({id, icon, awesomeClass}) => <SocialLink key={id} icon={icon} />)}
    </div>
  </div>
</footer>

  )
}

export default Footer