import React from 'react';
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <div id="footer">
      <ul>
        <li><Link to="/" title="pomoc statystyczna" >strona główna</Link></li>
        <li><Link to="/o-nas" title="informacje o firmie" >o nas</Link></li>
        <li><Link to="/oferta-biznesowa" title="oferta biznesowa" >klient biznesowy</Link></li>
        <li><Link to="/oferta-indywidualna" title="oferta indywidualna" >klient indywidualny</Link></li>
        <li><Link to="/badania-onLine" title="Ankiety" >Badanie on-line</Link></li>
        <li><Link to="/wprowadzanie-danych" title="wprowadzanie danych" >wprowadzanie danych</Link></li>
        <li><Link to="/kontakt" title="napisz do pomocstatystyczna" >kontakt</Link></li>
      </ul>

      <p>&copy; Copyright 2010 - 2021 by <Link to="/" title="właśiciel strony">pomocstatystyczna.pl</Link><br />All rights reserved !</p>
    </div>
  );
}

export default Footer;