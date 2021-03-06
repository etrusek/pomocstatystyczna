import React from 'react';

const Opinions = () => {
  return (
    <div className="bg opinion">
      <h3 className="title">Opinie naszych klientów</h3>
      <div>
        <div className="box">
          <div itemScope itemType="http://data-vocabulary.org/Review">
            <p><span itemProp="reviewer">Orto-med.com.pl</span>
              <span itemProp="itemreviewed" className="name">pomocstatystyczna</span>
              <span itemProp="description">Potrzebowałem obliczeń statystycznych do pracy doktorskiej. Po wysłaniu danych w ciągu paru dni, za przystępną cenę, otrzymałem obliczenia z profesjonalnym komentarzem. Szczerze polecam</span>
            </p>
          </div>

          <div itemScope itemType="http://data-vocabulary.org/Review">
            <p><span itemProp="reviewer">Łukasz</span>
              <span itemProp="itemreviewed" className="name">pomocstatystyczna</span>
              <span itemProp="description">Analizy zostały zweryfikowane przez specjalistów w Londynie i ocenione bardzo korzystnie</span>
            </p>
          </div>

          <div itemScope itemType="http://data-vocabulary.org/Review">
            <p><span itemProp="reviewer">Ghelamco Poland Sp. z o.o.</span>
              <span itemProp="itemreviewed" className="name">pomocstatystyczna</span>
              <span itemProp="description">Zadanie zostało wykonane rzetelnie i w bardzo krótkim, szybszym niż przewidywała umowa w terminie Przedstawiony raport pod względem merytorycznym i estetycznym był na bardzo wysokim poziomie</span>
            </p>
          </div>

          <div itemScope itemType="http://data-vocabulary.org/Review">
            <p><span itemProp="reviewer">Kasia</span>
              <span itemProp="itemreviewed" className="name">pomocstatystyczna</span>
              <span itemProp="description">Współpraca na wysokim poziomie, szybki, sprawny kontakt, doskonała znajomość tematu. Jednym słowem praca przygotowana profesjonalnie, zgodnie z moimi wymaganiami.</span>
            </p>
          </div>

          <div itemScope itemType="http://data-vocabulary.org/Review">
            <p><span itemProp="reviewer">Mateusz</span>
              <span itemProp="itemreviewed" className="name">pomocstatystyczna</span>
              <span itemProp="description">Gorąco polecam "PomocStatystyczna.pl". Mila i kompetentna obsługa, doskonały kontakt przy konsultacjach przed i w trakcie wykonywania analizy;last-but-not-least: usługa wykonana została terminowo i po przystępnej cenie</span>
            </p>
          </div>

          <div itemScope itemType="http://data-vocabulary.org/Review">
            <p><span itemProp="reviewer">Warsztaty rozwoju osobistego</span>
              <span itemProp="itemreviewed" className="name">pomocstatystyczna</span>
              <span itemProp="description">Efekt końcowy był absolutnie satysfakcjonujący i umożliwił mi ukończenie pracy badawczej bez stresu i wątpliwości, że analizy zawierają jakiekolwiek błędy czy niedociągnięcia.</span>
            </p>
          </div>

          <div itemScope itemType="http://data-vocabulary.org/Review">
            <p><span itemProp="reviewer">2R Consulting Sp.J.</span>
              <span itemProp="itemreviewed" className="name">pomocstatystyczna</span>
              <span itemProp="description">Zespół PomocStatystyczna.pl kilkukrotnie wykonywał dla Spółki w sposób rzetelny
zaawansowane analizy statystyczne na potrzeby realizowanych projektów.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Opinions;