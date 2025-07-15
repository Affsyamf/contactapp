const fs = require ('fs');

const dirPath = './data';
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

const filePath = './data/contact.json';
if (!fs.existsSync(filePath)) { 
    fs.writeFileSync(filePath,'[]','utf8')
}



const simpanKontak = (name, email, nohp) => {
    const contact = { name, email, nohp };
         const file = fs.readFileSync('data/contact.json','utf8');
         const contacts =  JSON.parse(file);


         //cek duplikasi
         const duplikasi = contacts.find((contact) => contact.name === name)
         if(duplikasi){
            console.log('cari nama lain')
            return false
         }
        
         contacts.push(contact);
         console.log(contacts);

         fs.writeFileSync('data/contact.json', JSON.stringify(contacts))


         console.log('Terimakasih sudah memasukan data pinjol');
        
}

module.exports = { simpanKontak }