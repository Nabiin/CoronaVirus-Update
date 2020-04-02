async function getdata(){
    try {
      var data = await fetch("https://nepalcorona.info/api/v1/data/world?fbclid=IwAR0HMHtkVYdHYgVw28DceOwlgFgc4oAqsUSeGlAbe7HXMqkvoxUfEHRH79c");
       jsondata = await data.json();
        //var obj=Text();
        //return obj;
        return jsondata[0]
    } catch (error) {
        console.log(error);
    }
}
getdata().then(obj =>{
  console.log(obj)
  document.getElementById('country').textContent = `${obj.country}`;
  document.getElementById('totalCases').textContent = `${obj.totalCases}`;
  document.getElementById('newCases').textContent = `${obj.newCases}`;
  document.getElementById('totalDeaths').textContent = `${obj.totalDeaths}`;
  document.getElementById('newDeaths').textContent = `${obj.newDeaths}`;
  document.getElementById('activeCases').textContent = `${obj.activeCases}`;
  document.getElementById('totalRecovered').textContent = `${obj.totalRecovered}`;
  document.getElementById('criticalCases').textContent = `${obj.criticalCases}`;
  colorloop();
});

function Text(){
  var obj;
  jsondata.forEach(element => {
    if(element.country === "Nepal"){
     obj = element;
    }
  });
  return obj;
}


function colorloop(){

}