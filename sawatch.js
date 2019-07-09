function getCars() {  
  const url = 'https://api.sawatchlabs.com/models/13/2017';
  fetch(url)
    .then(response => response.json())
    .then(data => {
      buildCarsObj(data)
    })
    .catch(error => console.error(error))
}    
// retrieve api json using fetch 

function buildCarsObj(cars) {
  if (cars.data && cars.data.length) {
    cars.data.map(car => {
      buildTable(car);
    })
  }
}
// maps over the objects

function buildTable(car) {
  let table = document.querySelector('#swt-table');
  table.innerHTML += `
            <tr>
              <td><span class='year'>${car.vehicle_year}</span></td>
              <td><span class='make'>${car.make}</span></td>
              <td><span class='model'>${car.vehicle_model}</span></td>
              <td><span class='displacement'>${car.displacement}</span></td>
              <td><span class='cylinders'>${car.cylinders}</span></td>
              <td><span class='cls_id'>${car.class_id}</span></td>
            </tr>`
};
// displays the specified categories of data into the html table

getCars();

