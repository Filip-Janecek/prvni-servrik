const http = require("http");
let fs = require("fs");
const PORT = 8080;
function main(req, res) { //hlavní funkčnost mého serveru
    res.writeHead(200, {"Content-type":"text/html"}); //hodnota 200 - file je v pořádku
    let s = fs.readFileSync("index.html").toString();//readFile bez Sync funguje výrazně složitějším způsobem
    console.log(s); // funkce main se začne zpracovávat teprve až když přijde požadavek z prohlížeče (tedy refresh)
    res.end(s);

}

let srv = http.createServer(main);
srv.listen(PORT);

console.log("server běží na adrese http://localhost:" + PORT);
//\WebstormProjects\prvni-servrik>npm install ngrok -g                  ngrok - název balíčku, -g = ma všechny projekty na tomto počítači
// cts\prvni-servrik> ngrok http 8080 spusť ngrok na portu 8080 a restartuji webstorm
//lt --port 8080