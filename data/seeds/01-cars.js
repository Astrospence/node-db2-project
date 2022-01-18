// STRETCH
const cars = [
    {
        vin: '7777777777777',
        make: 'Ford',
        model: 'Bronco',
        mileage: 20,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: '7777777777777',
        make: 'Toyota',
        model: 'Camry',
        mileage: 40,
        title: 'salvage',
        transmission: 'automatic'
    },
    {
        vin: '7777777777777',
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