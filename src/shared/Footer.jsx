import SocialLink from "../components/SocialLink"
import { socialLinks } from "../utils/website_data"

const Footer = () => {
  return (
    <footer className="main-footer">
  <div className="footer-content container">
    <p>Copyright © 2019. All Rights Reserved</p>
    <div className="social">
      {socialLinks.map(({id, icon}) => <SocialLink key={id} icon={icon} />)}
    </div>
  </div>
</footer>

  )
}

export default Footer