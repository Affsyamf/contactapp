const fs = require('fs');
const chalk = require('chalk');
const validator = require('validator');

const dirPath = './data';
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

const filePath = './data/contacts.json';
if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]', 'utf8');
}

const loadContact = () => {
    const file = fs.readFileSync(filePath, 'utf8');
    const contacts = JSON.parse(file);
    return contacts;
}

const simpanKontak = (name, email, nohp) => {
    const contact = { name, email, nohp };
    const contacts = loadContact();

    // Cek duplikasi
    const duplikasi = contacts.find((contact) => contact.name === name);
    if (duplikasi) {
        console.log(chalk.red.inverse.bold('Nama sudah digunakan. Cari nama lain.'));
        return false;
    }

    // Cek email
    if (email && !validator.isEmail(email)) {
        console.log(chalk.red.inverse.bold('Email tidak valid.'));
        return false;
    }

    // Cek no hp
    if (nohp && !validator.isMobilePhone(nohp, 'id-ID')) {
        console.log(chalk.red.inverse.bold('Nomor HP tidak valid.'));
        return false;
    }

    contacts.push(contact);

    fs.writeFileSync(filePath, JSON.stringify(contacts, null, 2)); // pretty print

    console.log(chalk.green.inverse.bold('Kontak berhasil disimpan!'));
}

const listContact = () => {
    const contacts = loadContact();
    console.log(chalk.cyan.inverse.bold('Daftar Kontak:'));
    contacts.forEach((contact, i) => {
        console.log(`${i + 1}. ${contact.name} - ${contact.nohp}`);
    });
}

const detailContact = (name) => {
    const contacts = loadContact()

    const contact = contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase())


if (!contact) {
    console.log(chalk.red.inverse.bold('Nama tidak ditemukan.'));
    return false;
}

console.log(chalk.cyan.inverse.bold(contact.name));
console.log(contact.nohp);
if (contact.email) {
    console.log(contact.email)
}
}
module.exports = { simpanKontak, listContact, detailContact };
