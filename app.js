const fs = require ('fs');

// console.log(fs);

// try {
    
//     fs.writeFileSync('data/test.txt', 'Hello, World!');
// } catch (e) {
//     console.log(e);
// }


//asychornus

// fs.writeFile('data/test.txt', 'Hello, kontol!', (err) => {
//         console.log(err);

// });

// const data = fs.readFileSync('data/test.txt', 'utf8')
// console.log(data);

// fs.readFileSync('data/test.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('What is your name? ', (name) => {
    rl.question('What is your age? ', (age) => {
        const contact = { name, age };
        const file = fs.readFileSync('data/contact.json','utf8');
        const contacts =  JSON.parse(file);
        
        contacts.push(contact);
        console.log(contacts);

        fs.writeFileSync('data/contact.json', JSON.stringify(contacts))


        console.log('Terimakasih sudah memasukam data pinjol');
 rl.close() 
    })

})

