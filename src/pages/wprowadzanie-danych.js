import React from 'react';
import Layout from '../components/Layout'
import { graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image"
import ContactData from '../components/contactData'

const WprowadzanieDanych = () => {

  const data = useStaticQuery(graphql`
  query {
  file(relativePath: {eq: "date.jpg"}) {
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

      <div id="contact" class="wrapper" >
        <ContactData />
        <div>
          <h3 class="title border">Wprowadzanie danych</h3>
          <p>
            Wprowadzamy dane do baz danych szybko, dokładnie i w formie przygotowanej do dalszychanaliz. Nikomu nie udostępniamy powierzonych nam danych. Przeprowadzamy kategoryzację pytań otwartych, wprowadzamy dane zarówno w formie liczbowej, jak również w postaci słów jak również mowy (transkrypcja nagrań). <br /><br />

    Wprowadzanie danych do baz jest żmudną i bardzo nudną pracą. Wprowadzanie danych wymaga skupienia i koncentracji, co może stanowić wyczerpujące zadanie umysłowe. To sprawia, że jest duża szansa na pojawienie się błędów przy wprowadzaniu danych. Błędy popełniane na tym etapie mają poważne konsekwencje na etapie analizy i interpretacji wniosków.<br /><br />



            <b>Dokładność</b> - Lepiej powierzyć te zadanie profesjonalistom. Oszczędzasz czas, nerwy oraz obawę, że zdarzyły się pomyłki. Stosujemy szereg metod analitycznych, które pomagają nam wykryć ewentualne pomyłki przy wprowadzeniu danych.<br /><br />

            <b>Dostosowanie do potrzeb klientów</b> - Oferujemy Państwu profesjonalną pomoc przy wprowadzaniu danych z ankiet lub innych materiałów badawczych, np. notatniki, zapiski do baz danych. Wprowadzamy dane zarówno z wersji „papierowych” jak i „elektronicznych”. Oferujemy Państwu również pomoc przy wprowadzaniu danych o charakterze nie tylko ilościowym (liczby, odpowiedzi), ale również jakościowych (tekst). Dodatkowo, mogą Państwo zlecić nam wykonanie kategoryzacji danych jakościowych (przypisanie kategorii odpowiedzi dla wpisanego przez badane osoby tekstu), co pomoże Państwu przyspieszyć cały proces analizy wyników. Oferujemy Państwu również usługę transkrypcji (zapis rozmów w formie tekstu) wywiadów, badań przeprowadzanych w formie rozmów. Konstruujemy różnego rodzaju bazy, które są przygotowane do wszelkich dalszych analiz statystycznych.<br /><br />

            <b>Doświadczenie</b> - Posiadamy wieloletnie doświadczenie przy wprowadzaniu danych oraz konstrukcji baz danych na potrzeby analiz, co sprawia, że wiemy, na jakie elementy zwracać uwagę.<br /><br />

            <b>Bezpieczeństwo</b> - Jesteśmy legalnie działającą firmą, co sprawia, że przekazując nam dane mają Państwo zagwarantowane prawnie nie przekazywanie ich osobom trzecim, nie możemy ich ani publikować, ani korzystać z nich dla własnych celów. To jest Państwa własność i my nie możemy nią dysponować. Wszelkie materiały papierowe odsyłamy do klientów z zachowaniem wszelkich ostrożności (odpowiedni sposób wysyłki).<br /><br />

            <b>Konkurencyjna cena</b> - Cena uzależniona jest od liczby ankiet i kwestionariuszy, w tym od ilości pozycji w ankietach oraz rodzaju stawianych pytań (otwarte, zamknięte, pytania jednokrotnego lub wielokrotnego wyboru). Abyśmy mogli podać cenę wprowadzenia Państwa danych prosimy o przesłanie wzoru ankiety, kwestionariusza wraz z liczbą przebadanych osób.
    </p>
        </div>



      </div>
    </Layout>
  );
}

export default WprowadzanieDanych;