import React from 'react';

const Opinions = () => {
  return (
    <div class="bg opinion">
      <h3 class="title">Opinie naszych klientów</h3>
      <div>
        <div class="box">
          <div itemScope itemType="http://data-vocabulary.org/Review">
            <p><span itemprop="reviewer">Orto-med.com.pl</span>
              <span itemprop="itemreviewed" class="name">pomocstatystyczna</span>
              <span itemprop="description">Potrzebowałem obliczeń statystycznych do pracy doktorskiej. Po wysłaniu danych w ciągu paru dni, za przystępną cenę, otrzymałem obliczenia z profesjonalnym komentarzem. Szczerze polecam</span>
            </p>
          </div>

          <div itemScope itemType="http://data-vocabulary.org/Review">
            <p><span itemprop="reviewer">Łukasz</span>
              <span itemprop="itemreviewed" class="name">pomocstatystyczna</span>
              <span itemprop="description">Analizy zostały zweryfikowane przez specjalistów w Londynie i ocenione bardzo korzystnie</span>
            </p>
          </div>

          <div itemScope itemType="http://data-vocabulary.org/Review">
            <p><span itemprop="reviewer">Ghelamco Poland Sp. z o.o.</span>
              <span itemprop="itemreviewed" class="name">pomocstatystyczna</span>
              <span itemprop="description">Zadanie zostało wykonane rzetelnie i w bardzo krótkim, szybszym niż przewidywała umowa w terminie Przedstawiony raport pod względem merytorycznym i estetycznym był na bardzo wysokim poziomie</span>
            </p>
          </div>

          <div itemScope itemType="http://data-vocabulary.org/Review">
            <p><span itemprop="reviewer">Kasia</span>
              <span itemprop="itemreviewed" class="name">pomocstatystyczna</span>
              <span itemprop="description">Współpraca na wysokim poziomie, szybki, sprawny kontakt, doskonała znajomość tematu. Jednym słowem praca przygotowana profesjonalnie, zgodnie z moimi wymaganiami.</span>
            </p>
          </div>

          <div itemScope itemType="http://data-vocabulary.org/Review">
            <p><span itemprop="reviewer">Mateusz</span>
              <span itemprop="itemreviewed" class="name">pomocstatystyczna</span>
              <span itemprop="description">Gorąco polecam "PomocStatystyczna.pl". Mila i kompetentna obsługa, doskonały kontakt przy konsultacjach przed i w trakcie wykonywania analizy;last-but-not-least: usługa wykonana została terminowo i po przystępnej cenie</span>
            </p>
          </div>

          <div itemScope itemType="http://data-vocabulary.org/Review">
            <p><span itemprop="reviewer">Warsztaty rozwoju osobistego</span>
              <span itemprop="itemreviewed" class="name">pomocstatystyczna</span>
              <span itemprop="description">Efekt końcowy był absolutnie satysfakcjonujący i umożliwił mi ukończenie pracy badawczej bez stresu i wątpliwości, że analizy zawierają jakiekolwiek błędy czy niedociągnięcia.</span>
            </p>
          </div>

          <div itemScope itemType="http://data-vocabulary.org/Review">
            <p><span itemprop="reviewer">2R Consulting Sp.J.</span>
              <span itemprop="itemreviewed" class="name">pomocstatystyczna</span>
              <span itemprop="description">Zespół PomocStatystyczna.pl kilkukrotnie wykonywał dla Spółki w sposób rzetelny
zaawansowane analizy statystyczne na potrzeby realizowanych projektów.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Opinions;