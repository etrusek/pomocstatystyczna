import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image"



const Slider = () => {

  const data = useStaticQuery(graphql`
  query {
indyvidual: file(relativePath: {eq: "indyvidual.jpg"}) {
  childImageSharp {
    fixed(width: 1280) {
      ...GatsbyImageSharpFixed
    }
  }
}
business: file(relativePath: {eq: "business.jpg"}) {
  childImageSharp {
    fixed(width: 1280) {
      ...GatsbyImageSharpFixed
    }
  }
}
questionaire: file(relativePath: {eq: "questionaire.jpg"}) {
  childImageSharp {
    fixed(width: 1280) {
      ...GatsbyImageSharpFixed
    }
  }
}
date: file(relativePath: {eq: "date.jpg"}) {
  childImageSharp {
    fixed(width: 1280) {
      ...GatsbyImageSharpFixed
    }
  }
}
map: file(relativePath: {eq: "map.jpg"}) {
  childImageSharp {
    fixed(width: 1280) {
      ...GatsbyImageSharpFixed
    }
  }
}
about: file(relativePath: {eq: "about.jpg"}) {
  childImageSharp {
    fixed(width: 1280) {
      ...GatsbyImageSharpFixed
    }
  }
}
}
  `
  )

  return (
    <div id="slides" className="home_s">
      <Img fixed={data.indyvidual.childImageSharp.fixed} alt="oferta indywidualna" />
      {/* <img src="images/indyvidual.jpg"  /> */}
      <Img fixed={data.business.childImageSharp.fixed} alt="oferta biznesowa" />
      {/* <img src="images/business.jpg"  /> */}
      <Img fixed={data.questionaire.childImageSharp.fixed} alt="badania opinii klientów" />
      {/* <img src="images/questionaire.gif"  /> */}
      <Img fixed={data.date.childImageSharp.fixed} alt="wprowadzanie danych" />
      {/* <img src="images/date.jpg"  /> */}
      <Img fixed={data.map.childImageSharp.fixed} alt="kontakt z pomocstatystyczna" />
      {/* <img src="images/map.jpg"  /> */}
      <Img fixed={data.about.childImageSharp.fixed} alt="o pomocystatystycznej" />
      {/* <img src="images/about.jpg"  /> */}
    </div>
  );
}

export default Slider;