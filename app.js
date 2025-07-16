const yargs = require('yargs');
const contact = require('./contacts');

// Command untuk menambah kontak
yargs.command({
    command: 'add',
    describe: 'Menambahkan kontak baru',
    builder: {
        name: {
            describe: 'Nama lengkap',
            demandOption: true,
            type: 'string'
        },
        email: {
            describe: 'Email',
            demandOption: false,
            type: 'string'
        },
        nohp: {
            describe: 'Nomor HP',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        contact.simpanKontak(argv.name, argv.email, argv.nohp);
    }
});

// Command untuk menampilkan daftar kontak
yargs.command({
    command: 'list',
    describe: 'Menampilkan semua kontak',
    handler() {
        contact.listContact();
    }
});

// Jalankan yargs
yargs.parse(); // ini cukup, jangan kasih argumen
