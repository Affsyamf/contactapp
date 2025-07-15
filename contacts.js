const fs = require ('fs');


const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

const dirPath = './data';
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

const filePath = './data/contact.json';
if (!fs.existsSync(filePath)) { 
    fs.writeFileSync(filePath,'[]','utf8')
}


const tulispertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan, (name) => {
        resolve(name);
    })
})
}

const simpanKontak = (name, age) => {
    const contact = { name, age };
         const file = fs.readFileSync('data/contact.json','utf8');
         const contacts =  JSON.parse(file);
        
         contacts.push(contact);
         console.log(contacts);

         fs.writeFileSync('data/contact.json', JSON.stringify(contacts))


         console.log('Terimakasih sudah memasukan data pinjol');
          rl.close() 
}

module.exports = { tulispertanyaan, simpanKontak }