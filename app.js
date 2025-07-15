const { argv } = require('process')
const yargs = require ('yargs')
//ambil argumen dari command line

yargs.command (
    'add',
    'Menambahkan kontak baru : ',
    () => {},
    (argv) => {
        console.log(argv.nama)
    }
)

yargs.parse()















