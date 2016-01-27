<script type="text/javascript">
$.getScript("ajax/vehicle_data.json", function(){
 console.log("Script loaded but not necessarily executed.");
 console.log(carInfo);
 var length = carInfo.length;
 var html = "";
 for(var i = 0; i < length; i++){
    if(i%2 === 0)
        html  = '<li class = "carlistrow white">';
    else
        html  = '<li class = "carlistrow black">';        
    html += '<ul class = "carlistrowcolumns">';
    html += ' <li class = "fees">';
    html += '<div>';
    html += '<p>' + carInfo[i]['fees'] + '</p>';
    html += '<p>' + carInfo[i]['carRate'] + '</p>';
    html += '<p><img src="images/select_gr_btn.gif" alt=""></p>';
    html += '<p>Total ' + carInfo[i]['carPrice'] + '</p>';
    html += '</div>';
    html += '</li>';
    html += '<li class = "image">';
    html += '<img src="images/vehicles/car' + (i+1) + '.gif" alt="car1">';
    html += '<p class = "carsize">' + carInfo[i]['carSize'] + '</p>';
    html += '</li>';
    html += '<li class = "capacity">';
    html += '<div>';
    html += '<img src="images/icon_man.gif" alt="man">  ' + carInfo[i]['passengers'] + ' passengers<br>';
    html += ' <img src="images/icon_sm_scase.gif" alt="man">  ' + carInfo[i]['smallSuitcase'] + ' Small Suitcases<br>';
    html += '<img src="images/icon_lg_scase.gif" alt="man">  ' + carInfo[i]['largeSuitcase'] + ' Large Suitcase<br>';
    html += '</div>';
    html += '</li>';
    html += '<li class = "features">';
    html += '<div id = "features">';
    var features = carInfo[i]['carFeatures'];
    for(var j = 0; j < features.length; j++){
        html += features[j] + '<br>';
    }
    html += '</div>';
    html += '</li>';
    html += '</ul>';
    html += '</li>';
    document.getElementById('carmainlist').innerHTML += html;
};
});
</script>