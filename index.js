// Simple Server Setup Using ExpressJS

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
/*app.use(express.json())
app.use(express.urlencoded({ extended: true }))
*/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

const path = require('path');

// konfigursanje porta servera gde se veb prikazuje
const port = process.env.PORT || 80;

// konfigurisanje statickog foldera
app.use(express.static(__dirname + '/dist'));

// odredjivanje faila koji ce se preuzeti za prikaza na serveru
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// Post metod
app.post('/process_post', function (req, res) {
    // Prepare output in JSON format
    response = {
        first_name:req.body.first_name,
        last_name:req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

app.listen(port, () => {
  console.log('Listening on port ' + port);
});

console.log('Varednost porta servera ', process.env.PORT);


/*
* u istom failu se moze dodati i JSON fail sa korisnicima u JSON formatu
 *
 *
 * const korisnici=[
 * {

 *   id:1,
 *   name:" bbb",
 *   satus:'activan'
 *   },
 *   ....
 *   ]
 *
 *
 *   a poziva se sa, gde se prikazuju svi korsnici sa podacima
 *
 *   app.get('api/korisnici, (req,res)=> res.json(korisnici));
 *
*   kada se koristi json konstanta Korisnici kao spoljni fail onda se napravi
 * spoljni fail na serveru Korisnici.js u kome se podaci isti unesu s time sto na kraju
   * se dodada deo koda koji eksportuje se u obliku modula koji ima jednakost nazivu
   * konstante sa JSON vrednostima koje se pozivaju
   *
   * module.exports = korisnici;
*
*   a pozivanje u inicijalni fail na serveru se pozivaju sa
*
 *   const korisnici = require('./Korisnici');
  *
  *
  *   https://youtu.be/L72fhGm1tfE
 *
* */