const person = {
  firstName: 'Thomas',
  lastname: 'Scharke',
  address: {
    street: 'Street 42',
    houseNumber: 42
  }
};

const shalloWCopiedPerson = {
  ...person
};

// Modifies the orignal object in line 5
shalloWCopiedPerson.address.street = 'Street2';

// Creates a new object and stores the reference
// in the key `address` of the object in line 10.
// Means: Doesn't modified the object in line 5
/*
shalloWCopiedPerson.address = {
  street: 'Street 23',
  houseNumber: 23
};
*/

console.log('[Shallow Copy Example]', person, shalloWCopiedPerson);
