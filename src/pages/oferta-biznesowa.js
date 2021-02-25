import React from 'react';
import Layout from '../components/Layout'
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image"
import ContactData from '../components/contactData'

const CssUl1 = styled.ul`
padding-left:20px;
`
const CssUl2 = styled.ul`
padding: 10px 0 10px 20px;
font-size: 1em;
color: #5f5f5f;
`

const OfertaBiznesowa = () => {

  const data = useStaticQuery(graphql`
  query {
  file(relativePath: {eq: "business.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 1280) {
        ...GatsbyImageSharpFluid_tracedSVG
      }}}
  }
`)

  return (
    <Layout>
      <div id="slides">
        <Img fluid={data.file.childImageSharp.fluid} alt="oferta biznesowa" />
      </div>

      <div id="offer" class="bg">
        <div class="business">
          <p><strong>PomocStatystyczna.pl</strong> już od 11 lat działa na rynku, udzielając profesjonalnego doradztwa w zakresie przeprowadzenia badań oraz analizy zebranych wyników dla naukowców, instytucji i firm. W tym czasie zrealizowaliśmy różnego rodzaju projekty badawcze i analityczne. Doradzaliśmy podmiotom gospodarczym jak również instytucjom państwowym w zakresie przeprowadzania badań, konstrukcji narzędzi, analizy danych czy budowy wskaźników analitycznych. </p>
          <h3 class="title">Dlaczego my?</h3>
          <CssUl1>
            <li>ponieważ jesteśmy interdyscyplinarnym zespołem
                <CssUl2><li>statystyka, matematyka, informatyka, ekonomia, psychologia, socjologia, marketing, inżynieria</li></CssUl2></li>
            <li>ponieważ posiadamy bogatą wiedzę i potrafimy ją przekazać
                <CssUl2><li>większa część artykułów na portalu NAUKOWIEC.ORG jest naszego autorstwa</li></CssUl2></li>
            <li>ponieważ zaufały nam też inne podmioty
                <CssUl2><li>zobacz nasze doświadczenie w spisie po prawo</li></CssUl2></li>
            <li>ponieważ działamy szybko i kreatywnie
                <CssUl2><li>z recenzji Ghelamco Poland Sp. z o.o.
                „Zadanie zostało wykonane rzetelnie i w bardzo krótkim, szybszym niż przewidywała umowa terminie. Przedstawiony raport pod względem merytorycznym i estetycznym był na bardzo wysokim poziomie”</li></CssUl2></li>
            <li>ponieważ to tania, skuteczna i profesjonalna pomoc
                <CssUl2><li>Prześlij do nas zapytanie – wycena jest darmowa</li></CssUl2></li>
          </CssUl1>

          <h3 class="title">W czym możemy pomóc?</h3>
          <CssUl1>
            <li>Doradztwo w zakresie metodologii badań</li>
            <li>Doradztwo w zakresie analizy danych i raportowania wyników </li>
            <li>Analiza statystyczna danych dostosowana do potrzeb klienta (weryfikacja pytań badawczych)</li>
            <li>Budowa wskaźników pomiarowych, analitycznych, syntetycznych</li>
            <li>Tworzenie statystycznych modeli prognostycznych, modeli scoringowych</li>
            <li>Tworzenie narzędzi badawczych dla Państwa potrzeb (ankiety, kwestionariusze, badania eksperymentalne, dzienniki obserwacyjne)</li>
            <li>Walidacja statystyczna narzędzi</li>
            <li>Tworzenie aplikacji / kalkulatorów / przeliczników statystycznych na potrzeby klienta w różnych programach i językach programowania i na różne urządzenia</li>
            <li>Wizualizacja danych w specjalnie zaplanowanej przez klienta formie (programy graficzne, prezentacja wyników na mapach)</li>
            <li>Sprawdzenie poprawności wykonanych (własnych lub zleconych) projektów, analiz, zastosowanej metodologii w badaniach </li>
          </CssUl1>

          <h3 class="title">Rady dla naszych klientów:</h3>
          <CssUl1>
            <li>Najpierw dokładnie ustal, czego chcesz się z badania dowiedzieć – dopiero badaj – niektórych błędów w metodologii badania nie da się naprawić</li>
            <li>Zadbaj o losowość próby badawczej – im bardziej losowa tym większa wiarygodność do uzyskanych wyników</li>
            <li>Nie wydłużaj i nie komplikuj badania niepotrzebnie – badana osoba może się znudzić i odpowiadać automatycznie – skup się na najważniejszych celach badania</li>
            <li>Taniej jest zapłacić za poradę niż robić badanie od nowa</li>
            <li>Dobierz metodę analizy danych do celów badawczych – nie na odwrót – to zawsze lepiej wygląda</li>
            <li>Nie nadinterpretuj wyników – możesz odkryć to, co w rzeczywistości nie występuje</li>
          </CssUl1>
          <ContactData />

        </div>

        <div class="business blist">
          <h3 class="title">Zrealizowaliśmy projekty i analizy dla:</h3>
          <ul class="business">
            <li>2RC Consulting Sp. J. </li>
            <li>Agencja PSYCHE S.C. </li>
            <li>Akademia Wychowania Fizycznego Józefa Piłsudskiego w Warszawie </li>
            <li>Akademia Wychowania Fizycznego im. E. Piaseckiego </li>
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
            <li>Edukacja, Promocja, Badania B.S. </li>
            <li>Europejskie Centrum Kształcenia Podyplomowego</li>
            <li>Fundacja Best Place – Europejski Instytut Marketingu Miejsc</li>
            <li>Fundacja Wspierania i Rozwoju Edukacji</li>
            <li>Future Processing Sp. z o.o.</li>
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
            <li>Uniwersytet Medyczny im. Piastów Śląskich we Wrocławiu</li>
            <li>Uniwersytet Medyczny w Lublinie</li>
            <li>Uniwersytet Szczeciński</li>
            <li>Uniwersytet Warmińsko-Mazurski w Olsztynie</li>
            <li>Warszawski Uniwersytet Medyczny </li>
            <li>Wodne Ochotnicze Pogotowie Ratunkowe </li>
            <li>Wyższa Szkoła Edukacji i Terapii w Poznaniu</li>
          </ul>
        </div>

      </div>
    </Layout>
  );
}

export default OfertaBiznesowa;