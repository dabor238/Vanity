window.onload = function(){
    var options = {
    zoom: 17,
    center: new google.maps.LatLng(-1.0355658, -79.4627859),
    mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById('map'), options);

    new google.maps.Marker({
    position: map.getCenter(),
    map: map,
    title: 'Dra Patricia Coello',
    icon: 'http://gmaps-samples.googlecode.com/svn/trunk/markers/green/blank.png',
    cursor: 'default',
    draggable: true
    });
    }; 