
const contact = require ('./contacts')

const main = async () => {

    const name = await contact.tulispertanyaan('Masukan nama anda : ')
    const age = await contact.tulispertanyaan('Masukan umur anda : ')


    contact.simpanKontak(name, age)     
}

main();
