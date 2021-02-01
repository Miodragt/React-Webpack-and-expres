# React-webpack
 Izrada node react aplikacije upotrebom Express-a i Webpack-a. 
 Aplikacija radi sa serverom na portu 80, sto je povoljno za
 pokretanje aplikacije na Apache serveru. Ali, je moguce i 
 pokrenuti potpuno jednako aplikaciju iz foldera dist u obicnom prikazu 
 bilo kog brovsera. 
 Za prikaz na server hostu je moguce kada
 se prekopiraju failovi iz foldera dist na host bez ikavih problema,
 jer je testran rad u Wamp okruzenju 
 
 Ono sto je potrebno jos dodati posto je ovo eksperimentalni rad
 putanje u failu index.js kojima bi se upucivao zahtev iz korisnickog dela.
 Cime bi se omogucila komunikacija korisnika sa na primer bazom podataka
 ili poslao email.
 
 Ono sto je mozda vazno ovom prilikom mogu istaknuti da nije potrebno
 uvek praviti vise foldera, to jest folder za koricnika i serverski.
 Gde bi se posebno vrsila izrada oba dela aplikacije, i kasnije bile 
 pokretane posebno ili uz upotrebu node paketa concurrently.
 https://www.npmjs.com/package/concurrently
 
 Cime se omogucava istovremeni start i servera i corisnicnog dela sa
 unosom podatak u package.json fail.
 Usage

Remember to surround separate commands with quotes:

concurrently "command1 arg" "command2 arg"

Otherwise concurrently would try to run 4 separate commands: command1, arg, command2, arg.

In package.json, escape quotes:

"start": "concurrently \"command1 arg\" \"command2 arg\""

NPM run commands can be shortened:

concurrently "npm:watch-js" "npm:watch-css" "npm:watch-node"
 
# Equivalent to: 
concurrently -n watch-js,watch-css,watch-node "npm run watch-js" "npm run wa
