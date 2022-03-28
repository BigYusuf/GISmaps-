    
            
// charting analytics section
// declaring variables

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Yusuf', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [-11342220, 190, 3002002, 512344443, 2, 3000000],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
        options: {
            
        responsive: true,
        
    }
});

//routing capabilities
let map = L.map('map',{
    layers:MQ.maplayers(),
    center:(35.791188, -78.636755),
    zoom: 12
}) ;
function runDirections(start, end){
    //recreating new map layer
    map = L.map('map',{
        layers:MQ.maplayers(),
        center:(35.791188, -78.636755),
        zoom: 12
    }) ;
    var dir =MQ.routing.directions();
    dir.route({
        locations:[
            start,
            end
        ]
    });
    CustomRouteLayer=MQ.Routing.RouteLayer.extend({
        createStartMarker:(location)=>{
            var custom_icons;
            var marker;
            custom_icons=L.icon({
                iconUrl:'',//red marker
                iconSize: [20,29],
                iconAnchor:[10,29],
                popupAnchor:[0,-29]
            });
            marker=L.marker(location.latLong,{icon:custom_icons}).addTo(map);

            return marker;
        },
        createEndMarker: (location)=>{
            var custom_icons;
            var marker;
            custom_icons=L.icon({
                iconUrl:'',// blue marker
                iconSize: [20,29],
                iconAnchor:[10,29],
                popupAnchor:[0,-29]
            });
            marker=L.marker(location.latLong,{icon:custom_icons}).addTo(map);

            return marker;
        
        }
    });
    map.addLayer(new CustomRouteLayer({
        directions:dir,
        fitbounds:true
    }));
}

//function that run when forms suvmit
function submitForm(event){
    event.preventDefault();
    //delete current map layer
    map.remove();
    //getting form data
    start= document.getElementById("start").value;
    end= document.getElementById("destination").value;
    //run direction function
    runDirections(start,end);

    //reset form
    document.getElementById("form").reset();

}
//assign the form to a form variable
const form =document.getElementById('form');

//call the submitform function when submitting the form
form.addEventListener("submit",submitForm);
//routing ends
