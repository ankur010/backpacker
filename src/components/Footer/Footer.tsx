import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="info">
        <a
          href="https://www.backpackertrail.de/?utm_source=wapp&amp;utm_medium=referral&amp;utm_campaign=app_footer"
          target="_blank"
          rel="noreferrer"
        >
          <span>www.backpackertrail.de</span>
        </a>
      </div>

      <div className="copyright">
        <p>
          <a
            href="https://backpackertrail.atlassian.net/servicedesk/customer/portal/1/article/93716481?utm_source=wapp&amp;utm_medium=referral&amp;utm_campaign=app_data_footer"
            target="_blank"
            rel="noreferrer"
          >
            Datenschutzerklärung
          </a>
          &nbsp;
          <a
            href="https://www.backpackertrail.de/impressum/?utm_source=app&amp;utm_medium=referral&amp;utm_campaign=wapp_imp"
            target="_blank"
            rel="noreferrer"
          >
            Impressum
          </a>
        </p>
      </div>
    </div>
  );
};
export default Footer;
