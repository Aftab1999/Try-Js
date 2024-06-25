const myVehicle = {
    brand: 'Ford',
    model: 'Mustand',
    color: 'red',
}

const updateMyVehicle ={
    type: 'car',
    year: '2021',
    color: 'yellow',
}

const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}

console.log(myUpdatedVehicle);