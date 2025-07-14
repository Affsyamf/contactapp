const contacts = require ('./contacts')

const main = async () => {

    const name = await contacts.tulispertanyaan('Masukan nama anda : ')
    const age = await contacts.tulispertanyaan('Masukan umur anda : ')


    contacts.simpanKontak(name, age)     
}

main();


// rl.question('What is your name? ', (name) => {
//     rl.question('What is your age? ', (age) => {
//         const contact = { name, age };
//         const file = fs.readFileSync('data/contact.json','utf8');
//         const contacts =  JSON.parse(file);
        
//         contacts.push(contact);
//         console.log(contacts);

//         fs.writeFileSync('data/contact.json', JSON.stringify(contacts))


//         console.log('Terimakasih sudah memasukam data pinjol');
//  rl.close() 
//     })

// })

