// const ADMIN = 0;
// const READ_ONLY_USER = 1;
// const AUTHOR = 2;

enum Role { ADMIN, READ_ONLY, AUTHOR }


const person = {
    name: 'Luigi',
    age: 24,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};


if (person.role === Role.AUTHOR) {
    console.log('is author');
}


console.log(person);