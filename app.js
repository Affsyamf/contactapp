const { type } = require('os')
const { argv } = require('process')
const yargs = require ('yargs')
const contact = require('./contacts')
//ambil argumen dari command line

yargs.command ({
    command: 'add',
    describe: 'Menambahkan kontak baru',
    builder: {
        name: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string'
        },
        email: {
            describe: 'Isi Email',
            demandOption: true,
            type: 'email'
        }, 
        nohp: {
            describe: 'Isi nomor',
            demandOption: true,
            type: 'integer'
        },
    },
    handler(argv) {
       contact.simpanKontak(argv.name, argv.email, argv.nohp)
    }
})

yargs.parse()















