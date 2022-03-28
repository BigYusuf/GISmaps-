        //loading data from geojson to table
        $(document).ready(function() {
          $('#jsoncontent').DataTable( {
            "ajax":{
              "url":"/data/Nigeria geojson4.geojson",
              "dataSrc": "features"
            },
            "columns": [
              { data: "properties.NigeriaCases_States" },
              { data: "properties.NigeriaCases_Confirmed" },
            //  { data: "properties.NigeriaCases_Discharged" },
              { data: "properties.NigeriaCases_Deaths" }
          
            ]
          });
        }); 
        const windowsOnload = window.onload = () => {
         //   loadtabledata();
            chartting();
        };
        //filter and search table function
        function myFunction() {
            var input, filter, table, tr, td, i, txtValue;
            input = document.getElementById("myInput");
            filter = input.value.toUpperCase();
            table = document.getElementById("myTable");
            tr = table.getElementsByTagName("tr");
            for (i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[0];
                if (td) {
                    txtValue = td.textContent || td.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                    } else {
                        tr[i].style.display = "none";
                    }
                }
            }
        }


    
        //toggle menu
        let toggle = document.querySelector('.toggle');
        let nav = document.querySelector('.nav');
        let main = document.querySelector('.main');

        toggle.onclick = function () {
            nav.classList.toggle('active')
            main.classList.toggle('active')
        }

        //hover class in selected list items
        let list = document.querySelectorAll('.nav li');
        function activeLink() {
            list.forEach((item) =>
                item.classList.remove('hovered'));
            this.classList.add('hovered');
        }
        list.forEach((item) =>
            item.addEventListener('mouseover', activeLink));
    
         if (displaytxt1=="Governorship Election"&& displaytxt2 =="Abia"){
            document.getElementById('datainfo23').innerHTML = displaytxt1;// for label
            $.getJSON("/map data/Abia.geojson", function (data) {
            //geojson retrieved
              geojson = L.geoJson(data, {
                style: style,
                onEachFeature: onEachFeature
              }).addTo(map);
             });
           }
           else if (displaytxt1=="Governorship Election"&& displaytxt2 =="Adamawa"){
            document.getElementById('datainfo23').innerHTML = displaytxt1;// for label
            $.getJSON("/map data/Adamawa.geojson", function (data) {
            //geojson retrieved
              geojson = L.geoJson(data, {
                style: style,
                onEachFeature: onEachFeature
              }).addTo(map);
             });
           }
           else if (displaytxt1=="Governorship Election"&& displaytxt2 =="Delta"){
            document.getElementById('datainfo23').innerHTML = displaytxt1;// for label
            $.getJSON("/map data/delta.geojson", function (data) {
            //geojson retrieved
              geojson = L.geoJson(data, {
                style: style,
                onEachFeature: onEachFeature
              }).addTo(map);
             });
           }
           else if (displaytxt1=="Governorship Election"&& displaytxt2 =="Gombe"){
            document.getElementById('datainfo23').innerHTML = displaytxt1;// for label
            $.getJSON("/map data/Gombe.geojson", function (data) {
            //geojson retrieved
              geojson = L.geoJson(data, {
                style: style,
                onEachFeature: onEachFeature
              }).addTo(map);
             });
           }
           else if (displaytxt1=="Governorship Election"&& displaytxt2 =="Kaduna"){
            document.getElementById('datainfo23').innerHTML = displaytxt1;// for label
            $.getJSON("/map data/Gombe.geojson", function (data) {
            //geojson retrieved
              geojson = L.geoJson(data, {
                style: style,
                onEachFeature: onEachFeature
              }).addTo(map);
             });
           }
           else if (displaytxt1=="Governorship Election"&& displaytxt2 =="Kano"){
            document.getElementById('datainfo23').innerHTML = displaytxt1;// for label
            $.getJSON("/map data/Kano.geojson", function (data) {
            //geojson retrieved
              geojson = L.geoJson(data, {
                style: style,
                onEachFeature: onEachFeature
              }).addTo(map);
             });
           }
           else if (displaytxt1=="Governorship Election"&& displaytxt2 =="Lagos"){
            document.getElementById('datainfo23').innerHTML = displaytxt1;// for label
            $.getJSON("/map data/Lagos.geojson", function (data) {
            //geojson retrieved
              geojson = L.geoJson(data, {
                style: style,
                onEachFeature: onEachFeature
              }).addTo(map);
             });
           }
           else if (displaytxt1=="Governorship Election"&& displaytxt2 =="Niger"){
            document.getElementById('datainfo23').innerHTML = displaytxt1;// for label
            $.getJSON("/map data/Niger.geojson", function (data) {
            //geojson retrieved
              geojson = L.geoJson(data, {
                style: style,
                onEachFeature: onEachFeature
              }).addTo(map);
             });
           }
           else if (displaytxt1=="Governorship Election"&& displaytxt2 =="Oyo"){
            document.getElementById('datainfo23').innerHTML = displaytxt1;// for label
            $.getJSON("/map data/oyo.geojson", function (data) {
            //geojson retrieved
              geojson = L.geoJson(data, {
                style: style,
                onEachFeature: onEachFeature
              }).addTo(map);
             });
           }
           else if (displaytxt1=="Governorship Election"&& displaytxt2 =="Plateau"){
            document.getElementById('datainfo23').innerHTML = displaytxt1;// for label
            $.getJSON("/map data/Plateau.geojson", function (data) {
            //geojson retrieved
              geojson = L.geoJson(data, {
                style: style,
                onEachFeature: onEachFeature
              }).addTo(map);
             });
           }
           else if (displaytxt1=="Governorship Election"&& displaytxt2 =="Zamfara"){
            document.getElementById('datainfo23').innerHTML = displaytxt1;// for label
            $.getJSON("/map data/Zamfara.geojson", function (data) {
            //geojson retrieved
              geojson = L.geoJson(data, {
                style: style,
                onEachFeature: onEachFeature
              }).addTo(map);
             });
           }
           else if (displaytxt1=="Governorship Election" && displaytxt2 =="Whole Country"){
           // document.getElementById('datainfo23').innerHTML ='meet shit';// for label
            document.getElementById('datainfo23').innerHTML = displaytxt1;// for label
            $.getJSON("/data/Nigeria geojson.geojson", function (data) {
            //geojson retrieved
              geojson = L.geoJson(data, {
                style: style,
                onEachFeature: onEachFeature
              }).addTo(map);
             });
           }
           else if (displaytxt1=="Governorship Election"){
           // document.getElementById('datainfo23').innerHTML ='meet shit';// for label
            document.getElementById('datainfo23').innerHTML = displaytxt1;// for label
            $.getJSON("/data/Nigeria geojson.geojson", function (data) {
            //geojson retrieved
              geojson = L.geoJson(data, {
                style: style,
                onEachFeature: onEachFeature
              }).addTo(map);
             });
           }
