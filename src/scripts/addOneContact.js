export const addOneContact = async () => {
  const db = require('../db/db.json');
    
  for (let i = 0; i < number; i++) {
    const newContact = createFakeContact();
    db.push(newContact);
  }

  const fs = require('fs');
  fs.writeFileSync('./src/db/db.json', JSON.stringify(db));
};

addOneContact();
