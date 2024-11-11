import { PATH_DB } from "../constants/contacts.js";
import { generateContacts } from "./generateContacts.js";
import fs from "node:fs/promises";

export const addOneContact = async () => {
    try {
        let contacts = JSON.parse(await fs.readFile(PATH_DB, 'utf8'));
        let newContact = generateContacts();
        contacts.push(newContact);
    
        await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    } catch (error) {
        console.log('An error occurred:', error);
    }
};

addOneContact();