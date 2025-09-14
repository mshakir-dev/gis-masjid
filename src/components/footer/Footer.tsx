import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="main-text">
        © 1995–{currentYear} GIS — In Service of ALLAH (S.W.T)
      </p>
      <p className="secondary-text">
        "Indeed, the Masjid of ALLAH (S.W.T) are only to be maintained by those who believe in ALLAH (S.W.T) and the Last Day..."
      </p>
      <p className="quran-reference">(Qur'an 9:18)</p>
    </footer>
  );
};

export default Footer;