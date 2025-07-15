const fs = require ('fs');
const chalk = require ('chalk')
const validator = require ('validator')

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
            console.log(chalk.red.inverse.bold('cari nama lain '))
            return false
         }

         //cek email
         if(email) {
            if(!validator.isEmail(email)) {
                console.log(chalk.red.inverse.bold('Email tidak valid'))
                return false
            }
         }

         //cek no hp
         if(nohp) {
            if(!validator.isMobilePhone(nohp, 'id-ID')) {
                console.log(chalk.red.inverse.bold('Nomor hp tidak valid'))
                return false
            }
         }
        
         contacts.push(contact);
         console.log(contacts);

         fs.writeFileSync('data/contact.json', JSON.stringify(contacts))


         console.log(chalk.green.inverse.bold('Terimakasih sudah memasukan data pinjol')
        )   
}

module.exports = { simpanKontak }