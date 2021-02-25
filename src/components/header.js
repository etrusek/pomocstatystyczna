import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled from "@emotion/styled"
import Img from "gatsby-image"
// import plImg from '../images/pl.png'
const Cssh1 = styled.h1`
padding: 10px 0;
`

const CssLi1 = styled.li`
height: auto;
margin: 10px 5px 0;
`

const CssA1 = styled.a`
padding: 5px 10px;
`

const Header = (props) => {
  const data = useStaticQuery(graphql`
    query {
  flagaEN: file(relativePath: {eq: "en.png"}) {
    childImageSharp {
      fixed(width: 24) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  flagaPL: file(relativePath: {eq: "pl.png"}) {
    childImageSharp {
      fixed(width: 24) {
        ...GatsbyImageSharpFixed
      }
    }
  }
}
    `
  )

  return (
    <div id="header">
      <Link to="/" title="strona główna" className="logo" >
        <Cssh1 >Pomoc<span>Statystyczna</span></Cssh1>
      </Link>

      <ul id="flag">
        <CssLi1 className="flag">
          <CssA1 to="/" className="flag active">
            <Img fixed={data.flagaPL.childImageSharp.fixed} alt="language pl" />
          </CssA1>
        </CssLi1>
        <CssLi1 className="flag"><CssA1 to="/" className="flag" >
          <Img fixed={data.flagaEN.childImageSharp.fixed} alt="language en" />
        </CssA1></CssLi1>
      </ul>

      <ul className="menu">
        <li className="home"><Link to="/" title="pomoc statystyczna" activeClassName="active" >strona główna</Link></li>
        <li><Link to="/o-nas" title="informacje o firmie" activeClassName="active">o nas</Link></li>
        <li><Link to="/oferta-indywidualna" title="oferta indywidualna" activeClassName="active">analizy do prac <br /> dyplomowych</Link></li>
        <li><Link to="/oferta-biznesowa" title="oferta biznesowa" activeClassName="active">Doradztwo<br />raportowanie</Link></li>
        <li><Link to="/badania-onLine" title="Ankiety" activeClassName="active">Badania <br />on-line</Link></li>
        <li><Link to="/wprowadzanie-danych" title="wprowadzanie danych" activeClassName="active">wprowadzanie<br /> danych</Link></li>
        <li><Link to="/kontakt" title="napisz do nas" activeClassName="active">kontakt</Link></li>
      </ul>
    </div >
  );
}

export default Header;
