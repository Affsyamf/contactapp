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

// const pertanyaan2 = () => {
//     return new Promise((resolve, reject) => {
//         rl.question('What is your age? ', (age) => {
//         resolve(age);
//     })
// })
// }

const main = async () => {

    const name = await tulispertanyaan('Masukan nama anda : ')
    const age = await tulispertanyaan('Masukan umur anda : ')


     const contact = { name, age };
         const file = fs.readFileSync('data/contact.json','utf8');
         const contacts =  JSON.parse(file);
        
         contacts.push(contact);
         console.log(contacts);

         fs.writeFileSync('data/contact.json', JSON.stringify(contacts))


         console.log('Terimakasih sudah memasukam data pinjol');
          rl.close() 
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

