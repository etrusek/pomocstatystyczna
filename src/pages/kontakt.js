import React from 'react';
import Layout from '../components/Layout'
import { graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image"

const Kontakt = () => {

  const data = useStaticQuery(graphql`
  query {
  file(relativePath: {eq: "map.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 1280) {
        ...GatsbyImageSharpFluid
      }}}
  }
`)

  return (
    <Layout>
      <div id="slides">
        <Img fluid={data.file.childImageSharp.fluid} alt="kontakt z pomocstatystyczna" />
      </div>

      <div id="contact" className="wrapper">

        <div>
          <p>
            Otrzymają Państwo to, czego oczekują. Zapewniamy Państwu pełną kontrolę na tym co przygotujemy dla Państwa. Wspólnie z klientem ustalamy szczegółowy plan pracy i termin realizacji. Po wykonaniu zlecenia wyjaśniamy wszelkie wątpliwości związane z pracą nawet po kliku miesiącach od jego wykonania.<br /><br />

Realizacja zlecenia (czyli to, za co Państwo płacą) następuje dopiero wtedy, gdy potwierdzą Państwo ustalone warunki: termin i koszt realizacji. Nigdy wcześniej! W celu uniknięcia jakichkolwiek nieporozumień na wstępie ustalamy zakres analiz, termin i koszt. Dopiero, gdy zaakceptują Państwo te warunki przystępujemy do realizacji.<br /><br />

Anonimowość naszych klientów jest dla nas priorytetem. Nie udostępniamy osobom trzecim żadnych danych, nazwisk czy adresów mailowych naszych klientów. Materiały przesyłane do nas stanowią Państwa własność – my nie możemy i nie chcemy ich nikomu więcej udostępniać i prezentować.
</p>
          <h3 className="title border">Przebieg zlecenia</h3>
          <ol>
            <li>Kontaktują się Państwo z nami mailowo bądź telefonicznie</li>
            <li>Przesyłają nam Państwo opis swojego problemu, badania, zlecenia</li>
            <li>Na ogół, w ciągu 24 godzin (za wyjątkiem dni wolnych i świąt) otrzymują Państwo od Nas propozycję rozwiązania Państwa problemu, plan pracy, opis tego, co Państwo otrzymają od nas i w jakim terminie i za jaką kwotę</li>
            <li>Akceptują Państwo plan bądź wspólnie nanosimy poprawki do planu.</li>
            <li>Wykonujemy pracę - minimum 48h (w zależności od wielkości pracy, istnieje możliwość przyspieszenia zlecenia) </li>
            <li>Po skończonej pracy przesyłamy mailowo kompletną pracę.</li>
            <li>Jeżeli nastąpi taka potrzeba tłumaczymy i wyjaśniamy niezrozumiałe dla Państwa fragmenty opracowania, nawet do kliku miesiącach od jego wykonania</li>
            <li>Ewentualne poprawki wynikające z naszych błędów poprawiamy na ogół w przeciągu 48h</li>
            <li>Ewentualne dalsze bądź niezaplanowane analizy realizujemy po niższych cenach niż pierwsze zlecenie – cenimy naszych stałych klientów</li>
            <li>Służymy własną wiedzą i doświadczeniem przy dalszych konsultacjach w sprawie zrealizowanego zlecenia (w przypadku klientów indywidualnych: przy rozmowach z promotorem, recenzentem, czasopismem naukowym; w przypadku klientów biznesowych: przy ustalaniu dalszych działań firmy na podstawie otrzymanych wyników)</li>
          </ol>
        </div>

      </div>
    </Layout>
  );
}

export default Kontakt;