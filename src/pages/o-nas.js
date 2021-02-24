import React from 'react';
import Layout from '../components/Layout'
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image"
//styles

const CssSpan1 = styled.span`
  float: left;
  clear: both;
`

//page
const IndexPage = () => {

  const data = useStaticQuery(graphql`
  query {
  oferta: file(relativePath: {eq: "about.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 1280) {
        ...GatsbyImageSharpFluid
      }}}
 about: file(relativePath: {eq: "allegro/about_us.jpg"}) {
    childImageSharp {
      fixed(width: 225) {
        ...GatsbyImageSharpFixed
      }}}
  }
`)

  return (
    <Layout>
      <div id="slides">
        <Img fluid={data.oferta.childImageSharp.fluid} alt="oferta biznesowa" />
      </div>

      <div class="bg about">
        <p>
          <Img fixed={data.about.childImageSharp.fixed} alt="historia pomocystatystycznej" />
          <br /><br />W skład naszego zespołu wchodzą specjaliści z zakresu <strong>statystyki</strong>, <strong>metodologii badań</strong>, <strong>matematyki</strong>, <strong>fizyki</strong>, <strong>informatyki</strong> oraz <strong>nauk społecznych</strong>, takich jak: <strong>ekonomia</strong>, <strong>socjologia</strong>, <strong>psychologia</strong>.<br />Już od ponad 7 lat wykonujemy analizy statystyczne dla studentów, pracowników naukowych polskich i zagranicznych uczelni oraz na zlecenie instytucji i firm. Posiadamy bogate doświadczenie w projektowaniu badań ilościowych, analizie danych i prezentacji uzyskanych rezultatów.<br />W naszych analizach wykorzystujemy zarówno tradycyjne techniki analityczne jak również nowe, zaawansowane metody analiz statystycznych. <CssSpan1>Zrealizowaliśmy projekty oraz wykonaliśmy analizy do prac dyplomowych i naukowych z rożnych dziedzin, m in.:</CssSpan1>
        </p>
        <ul>
          <li>Badania rynkowe i Marketing</li>
          <li>Ekonomia (w tym konstrukcja modeli prognostycznych)</li>
          <li>Medycyna, Farmakologia, Rehabilitacja, Ratownictwo Medyczne, Genetyka</li>
          <li>Chemia, Ochrona Środowiska, Fizyka, Botanika</li>
          <li>Turystyka i Wychowanie fizyczne</li>
          <li>Edukacja szkolna, wczesnoszkolna, Szkolenia, Rozwój Kompetencji</li>
          <li>Psychologia, Socjologia, Antropologia</li>
        </ul>
        <p>
          Współpracujemy z Portalem <a href="http://www.naukowiec.org/" title="zbiór wiedzy">naukowiec.org</a> w celu wymiany informacji, wiedzy i doświadczeń. Znaczna część artykułów ze statystyki i metodologi badań została przygotowana przez nasz zespół. Nieprzerwanie rozwijamy się i podnosimy swoje kompetencje dzięki czemu, możemy Państwu zagwarantować usługi na najwyższym poziomie.<br /><br />
Pozdrawiamy<br />
Zespół: PomocStatystyczna.pl
</p>
      </div>
    </Layout >
  )
}

export default IndexPage


