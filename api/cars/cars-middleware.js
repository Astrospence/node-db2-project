const Cars = require('./cars-model')
const vinValidator = require('vin-validator')
const db = require('../../data/db-config')

const checkCarId = (req, res, next) => {
  Cars.getById(req.params.id)
    .then(car => {
      if (!car) {
        next({ status: 404, message: `car with id ${req.params.id} is not found` })
      } else {
        req.car = car
        next()
      }
    })
    .catch(next)
}

const checkCarPayload = (req, res, next) => {
  const { vin, make, model, mileage } = req.body
  if (!vin) {
    next({ status: 400, message: 'vin is missing' })
  } else if (!make) {
    next({ status: 400, message: 'make is missing' })
  } else if (!model) {
    next({ status: 400, message: 'model is missing' })
  } else if (!mileage) {
    next({ status: 400, message: 'mileage is missing' })
  } else {
    next()
  }
}

const checkVinNumberValid = (req, res, next) => {
  const validated = vinValidator.validate(`${req.body.vin}`)
  if (validated === false) {
    next({ status: 400, message: `vin ${req.body.vin} is invalid` })
  } else {
    next()
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  const existingVin = await db('cars').where('vin', req.body.vin).first()
  if (existingVin) {
    next({ status: 400, message: `vin ${req.body.vin} already exists` })
  } else {
    next()
  }
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
}