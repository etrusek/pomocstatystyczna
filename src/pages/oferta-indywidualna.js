import React from 'react';
import Layout from '../components/Layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled from "@emotion/styled"
import Img from "gatsby-image"


const CssUl1 = styled.ul`
padding-left: 20px;
`

const OfertaIndywidualna = () => {

  const data = useStaticQuery(graphql`
query {
oferta: file(relativePath: {eq: "indyvidual.jpg"}) {
childImageSharp {
fluid(maxWidth: 1280) {
...GatsbyImageSharpFluid_tracedSVG
}}}
przyklad: file(relativePath: {eq: "przyklad.jpg"}) {
childImageSharp {
fixed(width: 420) {
...GatsbyImageSharpFixed_tracedSVG
}}}
}`)

  return (
    <Layout>
      <div id="slides">
        <Img fluid={data.oferta.childImageSharp.fluid} alt="oferta indywidualna" />
      </ div >

      <div id="offer" className="bg">
        <div>
          <h3 className="title">Oferta</h3>
          <p>Badania do pracy dyplomowej czy pracy naukowej realizują Państwo z wielkim nakładem swojego czasu, sił a niekiedy również środków finansowych. Ukoronowaniem ich jest analiza statystyczna zebranych danych. Nasze profesjonalne podejście sprawi, że Państwa wysiłek nie pójdzie na marne. <br /><br />
Oferujemy opracowanie <strong>analiz statystycznych</strong> w pełnej, przystępnej dla każdego formie, wprowadzanie danych,pomoc w projektowaniu badań i opisie metodologii badania. Korzystając z naszych usług otrzymują Państwo nie tylko gotową analizę, ale również pomoc merytoryczną, wytłumaczenie wykonanej pracy, pomoc w kontakcie z promotorem, recenzentem, czasopismem naukowym. Jeżeli trzeba, podpowiadamy co zmienić i co poprawić zanim zlecą nam Państwo pracę. Pytania po wykonanej analizie mogą Państwo bezpłatnie zadawać nawet po kilku miesiącach po jej realizacji.<br /><br />Przy <strong>analizie statystycznej</strong> korzystamy z takich technik i metod analiz jak:</p>
          <ul>
            <li>sprawdzenie poprawności postawionych hipotez/pytań badawczych</li>
            <li>statystyki opisowe: rozkłady częstości, sprawdzanie normalności rozkładów zmiennych, średnie, mediany, wariancje, odchylenia standardowe i inne</li>
            <li>analizy chi-kwadrat, Phi, V-Crammer, McNemar, współczynnik kontyngencji, analiza ilorazu szans, ryzyka wsględnego</li>
            <li>porównania grup: testy t, analizy wariancji: międzyobiektowe, wewnątrzobiektowe, mieszane; testy nieparametryczne</li>
            <li>analizy związków: korelacje parametryczne (r-Pearson, kanoniczna) i nieparametryczne (np. tau-b Kendalla; rho Spearmana), cząstkowe, semicząstkowe, autokorelacje</li>
            <li>analizy regresji: (liniowa, wieloraka, logistyczna, porządkowa)</li>
            <li>analizy czynnikowe, analizy rzetelności i analizy mocy dyskryminacyjnych narzędzi badawczych</li>
            <li>analizy skupień, skalowanie wielowymiarowe, MINNISA i PINDIS, mapy preferencji, analizy dyskryminacyjne</li>
            <li>analizy szeregów czasowych, autokorelacji</li>
            <li>analizy modeli strukturalnych, tzw analiza ścieżek</li>
            <li>analizy przeżycia Kaplana-Meiera, modele regresyjne Coxa</li>
            <li>analizy krzywej ROC</li>
            <li>analizy korespondencji i skalowania optymalnego</li>
          </ul>
          <p><br />Projektujemy i tworzymy rzetelne i wartościowe <strong>modele statystyczne</strong> i ekonometryczne dla różnych dziedzin nauki <br /><br />
Oferujemy również <strong>kontrolę statystyczną</strong>, czyli pomoc osobom, które zleciły prace komuś innemu i nie są zadowolone z wyników, które otrzymały. Poprawiamy prace innych, sprawdzamy, czy słusznie wydali Państwo swoje pieniądze. Sprawdzamy również poprawność wykonywanych przez Państwa analiz. <br /><br />
Oferujemy pomoc w <strong>zaplanowaniu badan ilościowych</strong>, opisie metody badawczej oraz w zaprojektowaniu i zaprogramowaniu badania. Posiadamy bogate doświadczenie w <em>tworzeniu</em> rzetelnych, poprawnych metodologicznie <strong>ankiet i kwestionariuszy</strong>.

</p>
          <h3 className="title">Część przykładowego opracowania</h3>
          <Img fixed={data.przyklad.childImageSharp.fixed} alt="przykład" />
        </div>
        <div>
          <p>Przeprowadzamy analizy statystyczne na poziomie:<br /></p>

          <CssUl1 >
            <li>pracy licencjackiej</li>
            <li>pracy magisterskiej</li>
            <li>rozprawy doktorskiej</li>
            <li>publikacji naukowych (polskich i zagranicznych czasopism)</li>
          </CssUl1>

          <p><br />Podane poniżej ceny dotyczą standardowych analiz. Jednak cena może być mniejsza bądź większa i uzależniona jest od obszerności pracy i ilości przeprowadzonych analiz.Cena (mniejsza bądź większa) jest przedstawiana przez nas mailowo bądź telefonicznie jeszcze przed podjęciem pracy, ale już po zapoznaniu się z poszczególnymi przypadkami. Aby rozwiać swoje wątpliwości <Link to="/kontakt" title="kontakt">zobacz przebieg kontraktu</Link></p>
          <table>
            <tr className="title"><td>Rodzaj usługi</td><td>Opis usługi</td><td>Cena</td></tr>
            <tr>
              <td rowSpan="3" className="title" >Analizy<br />statystyczne</td>
              <td >Analiza statystyczna (wykonanie analiz oraz sporządzenie całego rozdziału, raportu, w zrozumiałym języku dla czytelników, z tabelami, wykresami - kompletny charakter, gotowe do przedstawienia)
</td>
              <td><meta itemProp="currency" content="PLN" /> <span itemProp="price">250</span>zł</td>
            </tr>
            <tr >
              <td >Wykonanie samej analizy statystycznej (w formie raportu SPSS, Statistica, MS Excel, Ms Word lub innych)</td>
              <td><meta itemProp="currency" content="PLN" /> <span itemProp="price">120</span>zł</td>
            </tr>
            <tr >
              <td >Wykonanie samego opracowania z analizy statystycznej na podstawie dostarczonych wyników statystycznych</td>
              <td>200zł</td>
            </tr>
            <tr >
              <td className="title">Modele statystyczne</td>
              <td >Stworzenie modelu statystycznego, ekonometrycznego</td>
              <td >do uzgodnienia</td>
            </tr>
            <tr >
              <td rowSpan="3" className="title">Projektowanie<br />badań</td>
              <td >Przygotowanie planu badawczego wraz z hipotezami</td>
              <td ><meta itemProp="currency" content="PLN" /> <span itemProp="price">170</span>zł</td>
            </tr>

            <tr >
              <td >Przygotowanie kwestionariusza, ankiety</td>
              <td >do uzgodnienia</td>
            </tr>
            <tr >
              <td >Opisanie gotowej części pracy: metoda badawcza</td>
              <td ><meta itemProp="currency" content="PLN" /> <span itemProp="price">200</span>zł</td>
            </tr>
            <tr >
              <td rowSpan="2" className="title">Kontrola<br />statystyczna</td>
              <td >Sprawdzenie poprawności wykonanych analiz statystycznych (standardowe analizy)</td>
              <td >do uzgodnienia</td>
            </tr>
            <tr >
              <td >Poprawa przeprowadzonych analiz statystycznych</td>
              <td >do uzgodnienia</td>
            </tr>
            <tr >
              <td rowSpan="2" className="title">Język<br />opracowania</td>
              <td >Opracowanie w języku angielskim</td>
              <td >+70%</td>
            </tr>
            <tr >
              <td >Tłumaczenie gotowej pracy / projektu na język angielski</td>
              <td >do uzgodnienia</td>
            </tr>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export default OfertaIndywidualna;

