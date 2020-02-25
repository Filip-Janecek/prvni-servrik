const http = require("http");
let fs = require("fs");
const PORT = 8080;
const API_HEAD = {
    "Content-type": "text/html",
    "Access-Control-Allow-Origin": "*"
};

let citac = 0;
function main(req, res) { //hlavní funkčnost mého serveru
    console.log(req.url);
    if(req.url === "/") {
        citac++;
        res.writeHead(200, API_HEAD); //hodnota 200 - file je v pořádku
        let s = fs.readFileSync("index.html");//readFile bez Sync funguje výrazně složitějším způsobem
        //console.log(s); // funkce main se začne zpracovávat teprve až když přijde požadavek z prohlížeče (tedy refresh)
        res.end(s);
    } else  if(req.url === "/citac") {
        citac++;
        let obj = {};
        obj.citacinan = citac;
        obj.popis = "muj prvni citac";
        res.writeHead(200,{ "Content-type": "application/json"});
        res.end(JSON.stringify(obj));
    } else {
        res.writeHead(404, API_HEAD);
        res.end();
    }
}

let srv = http.createServer(main);
srv.listen(PORT);

console.log("server běží na adrese http://localhost:" + PORT);
//\WebstormProjects\prvni-servrik>npm install ngrok -g                  ngrok - název balíčku, -g = ma všechny projekty na tomto počítači
// cts\prvni-servrik> ngrok http 8080 spusť ngrok na portu 8080 a restartuji webstorm
//lt --port 8080