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
}).demandCommand()

// Command untuk menampilkan daftar kontak
yargs.command({
    command: 'list',
    describe: 'Menampilkan semua kontak',
    handler() {
        contact.listContact();
    }
});


//menampilkan detail sebuah kontak
yargs.command({
    command: 'detail',
    describe: 'Menampilkan detail semua kontak berdasarkan nama',
    builder: {
        name: {
            describe: 'Nama lengkap',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        contact.detailContact(argv.name);
    }
});


//menghapus kontak berdasarkan nama

yargs.command({
    command: 'delete',
    describe: 'menghapus kontak berdasarkan nama',
    builder: {
        name: {
            describe: 'Nama lengkap',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        contact.deleteContact(argv.name);
    }
});


// Jalankan yargs
yargs.parse(); // ini cukup, jangan kasih argumen
