const {readFile}=require("fs/promises")

async function readText() {
   let texto1, texto2, texto4

   texto1="texto1";
   texto2="texto2";
   texto4="texto4";
   
   texto1=await readFile("./data/texto1.txt","utf-8");
   console.log(texto1)
   texto2 = readFile("./data/texto2.txt","utf-8");
   console.log(texto2)
   texto4=await readFile("./data/texto4.txt","utf-8");
   console.log(texto4)
}

readText()
