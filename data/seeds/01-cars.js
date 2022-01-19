// STRETCH
const cars = [
    {
        vin: '77777777777777777',
        make: 'Ford',
        model: 'Bronco',
        mileage: 20,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: '55555555555555555',
        make: 'Toyota',
        model: 'Camry',
        mileage: 40,
        title: 'salvage',
        transmission: 'automatic'
    },
    {
        vin: '11111111111111111',
        make: 'Dodge',
        model: 'Dart',
        mileage: 30,
        title: 'clean',
        transmission: 'manual'
    }
]

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}