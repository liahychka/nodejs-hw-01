import { createFakeContact } from "../utils/createFakeContact";
import * as fs from "node:fs/promises";

export const generateContacts = (number) => {
    try {
        let contacts = JSON.parse(fs.readFileSync('src/db/db.json', 'utf-8'));
        for (let i = 0; i < number; i++) {
            contacts.push(createFakeContact());
        }
        fs.writeFileSync('src/db/db.json', JSON.stringify(contacts));
    } catch (error) {
        console.error('An error occurred while generating contacts:', error);
    }
};

generateContacts(5);
