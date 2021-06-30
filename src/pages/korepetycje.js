import React from 'react';
import '../components/korepetycje.css'



//page
const IndexPage = () => {

  return (
    <div classNameName="bg about">
      <section>
        <h1>Korepetycje w tym roku (od września) :</h1>
        <div className="tbl-header">
          <table cellpadding="0" cellspacing="0" border="0">
            <thead>
              <tr>
                <th colspan="2">NIEDZIELA 50zł za godzinę</th>
                <th colspan="2">PONIEDZIAŁEK 50zł za godzinę</th>
                <th colspan="2">WTOREK 50zł za godzinę</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="tbl-content">
          <table cellpadding="0" cellspacing="0" border="0">
            <tbody>
              <tr>
                <td>9:45 - 10:45</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>11:00 - 12:00</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>12:15 - 13:15</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>14:00 - 15:00</td>
                <td></td>
                <td>14:00 - 15:00</td>

                <td></td>
              </tr>
              <tr>
                <td>15:15 - 16:15</td>
                <td></td>
                <td>15:15 - 16:15</td>
                <td>Zajęte</td>
                <td>15:15 - 16:15</td>
                <td>Zajęte</td>
              </tr><tr>
                <td>16:30 - 17:30</td>
                <td></td>
                <td>16:30 - 17:30</td>
                <td>Zajęte</td>
                <td>16:30 - 17:30</td>
                <td>Zajęte</td>
              </tr><tr>
                <td></td>
                <td></td>
                <td>17:45 - 18:45</td>
                <td>Zajęte</td>
                <td>17:45 - 18:45</td>
                <td>Zajęte</td>
              </tr><tr>
                <td></td>
                <td></td>
                <td>19:00 - 20:00</td>
                <td>Zajęte</td>
                <td>19:00 - 20:00</td>
                <td>Zajęte</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    </div>

  )
}

export default IndexPage


