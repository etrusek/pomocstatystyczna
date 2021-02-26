import React, { useState } from 'react';
import Layout from '../components/Layout'
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image"
import ContactData from '../components/contactData'



const CssUl1 = styled.ul`
  padding-left: 20px;

`

const CssUl2 = styled.ul`
  margin: 20px;
`



const BadaniaOnLine = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(!isOpen);
  }
  const Cssdiv1 = styled.div((isOpen) ? ({ maxWidth: 900, }) : ({ maxWidth: 0, }))

  const data = useStaticQuery(graphql`
  query {
  file(relativePath: {eq: "questionaire.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 1280) {
        ...GatsbyImageSharpFluid_tracedSVG
      }}}
  }
`)

  return (
    <Layout>
      <div id="slides">
        <Img fluid={data.file.childImageSharp.fluid} alt="wprowadzanie danych" />
      </div>

      <div id="offer" className="bg">

        <div>
          <h3 className="title border">Badania on-line</h3>
          <p>
            Wykorzystaj dzisiejsze możliwości i przeprowadź z nami profesjonalne badanie w formie elektronicznej. Możliwości, jakie dają badania on-line przewyższają możliwości badań w tradycyjnej formie.<br /><br />
        Przeprowadzając z nami badanie mają Państwo zagwarantowaną opiekę metodologiczną i analityczną nad całym projektem. Nasi graficy skonstruują ankietę w wymarzony przez Państwa sposób (rysunki, logo, zdjęcia, unikalny wygląd) – zgodnie z Państwa potrzebami.<br /><br />
        Nasze umiejętności pozwalają nam zaprojektować różnego rodzaju badania w formie ankiety elektronicznej, dla przykładu:<br /><br />
          </p>

          <CssUl1>
            <li>zadawanie pytań zamkniętych, otwartych, jednokrotnego lub wielokrotnego wyboru</li>
            <li>pomiar czasu reakcji / udzielania odpowiedzi</li>
            <li>prezentacja pytań w formie obrazów / rysunków, wykresów</li>
            <li>zadawanie pytań na mapach preferencyjnych</li>
            <li>lateralizacja przekazu oraz prezentacja pytań w czasie podprogowym</li>
            <li>ocena kolorystyki dowolnego przedmiotu bądź logo</li>
          </CssUl1>

          <br />
          <p>
            Projektujemy dla Państwa idealnie skomponowane ankiety badania opinii klientów, z wykorzystaniem zaawansowanych języków programowania. Pomagamy dobrać odpowiednią treść i formę pytania dla każdego aspektu, który chcą Państwo w badaniu zbadać.<br /><br />
        Wszystkie dane zbierane są do bazy danych. Następnie opracowujemy raport z badania wedle planu, który wspólnie z Państwem ustalimy.<br /><br />
        Stosujemy metody zabezpieczające wypełnianie ankiet przez te same osoby wielokrotnie, stosujemy hasła dostępu, aby żadna z niepowołanych osób nie udzielała odpowiedzi.<br /><br />
        Konstruując ankietę otrzymują Państwo od nas unikalny link z ankietą, którą przesyłają Państwo swoim badanym klientom. Jedyne, czego nie podejmujemy się to dotarcie do badanych klientów. Możemy na Państwa życzenie rozesłać linki z badaniem do wybranej grupy osób, których listę Państwa nam dostarczą.

    </p>

          <h3 className="title border">Nasze doświadczenie</h3>

          <button id="work_button" onClick={handleClick}>Zobacz nasze doświadczenie</button>

        </div>

        <div className="questionaire">

          <p>W ramach przeprowadzenia z nami badania oferujemy Państwu:<br /></p>

          <CssUl2 >
            <li>opiekę metodologiczną i analityczną nad całym projektem,</li>
            <li>konsultacje dotyczące treści i formy zadawanych pytań,</li>
            <li>konsultacje dotyczące sposobu badania i ilości badanych osób,</li>
            <li>konstrukcję, zaprogramowanie, zabezpieczenie ankiety,</li>
            <li>dostosowanie „layoutu” ankiety zgodnie z życzeniem klienta,</li>
            <li>konstrukcja ankiety „responsywnej” – dostosowanej wizualnie do urządzenia</li>
            <li>zebranie danych wraz z monitorowaniem nietypowych zachowań badanych osób,</li>
            <li>przeprowadzenie analiz statystycznych,</li>
            <li>przygotowanie pełnego raportu z badania</li>
          </CssUl2>

          <h3 className="title border" >Kontakt:</h3>

          <ContactData />
        </div>


      </div>

      <Cssdiv1 id="work_bg">
        <ul id="work_list" className="business">
          <li>2RC Consulting Sp. J. </li>
          <li>Agencja PSYCHE S.C. </li>
          <li>Akademia Wychowania Fizycznego im. E. Piaseckiego </li>
          <li>Akademia Wychowania Fizycznego Józefa Piłsudskiego w Warszawie </li>
          <li>ARKA-TECH D. FOTEK Sp. J </li>
          <li>Akzo Nobel Car Refinishes Polska Sp. z o.o.</li>
          <li>BAYER Sp. z o.o.</li>
          <li>beeline GmbH Cologne, Germany</li>
          <li>Biznes Partner Płock Sp. J.</li>
          <li>Cargill (Polska) Sp. z o.o.</li>
          <li>Centrum Medyczne Damiana Sp. z o.o.</li>
          <li>Centrum Medyczne Kształcenia Podyplomowego w Warszawie</li>
          <li>Centrum Medyczne. Niepubliczny Zakład Opieki Zdrowotnej S.C. </li>
          <li>Centrum Rozwoju Kompetencji Michał Ziemann</li>
          <li>Dermostica Institute</li>
          <li>Europejskie Centrum Kształcenia Podyplomowego</li>
          <li>Fundacja Best Place – Europejski Instytut Marketingu Miejsc</li>
          <li>Fundacja Wspierania i Rozwoju Edukacji</li>
          <li>Future Processing Sp. z o.o.</li>
          <li>Edukacja, Promocja, Badania B.S. </li>
          <li>Ghelamco Poland Sp. z o.o.</li>
          <li>Instytut „Centrum Zdrowia Matki Polki”</li>
          <li>MapaZdrowia.pl </li>
          <li>MINISTERSTWO ROZWOJU REGIONALNEGO </li>
          <li>Oferteo sp. z o.o.</li>
          <li>Paszport Do Eksportu Sp z o.o.</li>
          <li>Powiatowy Urząd Pracy w Rudzie Śląskiej</li>
          <li>PRO-MED S.C.</li>
          <li>Szkoła Główna Gospodarstwa Wiejskiego. Wydział Nauk Ekonomicznych</li>
          <li>Taxonity Sp. z o.o.</li>
          <li>Uniwersytet Gdański</li>
          <li>Uniwersytet im. Adama Mickiewicza w Poznaniu</li>
          <li>Uniwersytet Kazimierza Wielkiego</li>
          <li>Uniwersytet Medyczny w Lublinie</li>
          <li>Uniwersytet Medyczny im. Piastów Śląskich we Wrocławiu</li>
          <li>Uniwersytet Szczeciński</li>
          <li>Uniwersytet Warmińsko-Mazurski w Olsztynie</li>
          <li>Warszawski Uniwersytet Medyczny </li>
          <li>Wodne Ochotnicze Pogotowie Ratunkowe </li>
          <li>Wyższa Szkoła Edukacji i Terapii w Poznaniu</li>
        </ul>

        <button id='hide_button' onClick={handleClick}>x</button>
      </Cssdiv1>






    </Layout>
  );
}

export default BadaniaOnLine;