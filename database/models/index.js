const mongodb = require('../connection')

// const Pupils = mongodb.get('alunos')
const Trainings = mongodb.get('trainings')
// const Adresses = mongodb.get('enderecos')
// const Registrations = mongodb.get('matricula')
const Persons = mongodb.get('persons')
const trainingClass = mongodb.get('trainingClasses')
const Users = mongodb.get('users')
// const Rules = mongodb.get('permissoes')
const Companies = mongodb.get('companies')

module.exports = {
    // Pupils,
    Trainings,
    // Adresses,
    // Registrations,
    Persons,
    Users,
    // Rules,
    Companies,
    trainingClass
}