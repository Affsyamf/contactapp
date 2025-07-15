const { type } = require('os')
const { argv } = require('process')
const yargs = require ('yargs')
//ambil argumen dari command line

yargs.command ({
    command: 'add',
    describe: 'Menambahkan kontak baru',
    builder: {
        nama: {
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
        const contact = {
            nama: argv.nama,
            email: argv.email,
            nohp: argv.nohp,
        }
        console.log(contact)
    }
})

yargs.parse()















