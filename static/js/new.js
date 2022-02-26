// initialize Leaflet
// console.log(myJSON);
// console.log(myJSON_poly);
// get reference points from the api
var coords = [];
coords[0] = [parseFloat(cord_data['coordinates'][0]['globalRef']['lng']), parseFloat(cord_data['coordinates'][0]['globalRef']['lat'])];
coords[1] = [parseFloat(cord_data['coordinates'][1]['globalRef']['lng']), parseFloat(cord_data['coordinates'][1]['globalRef']['lat'])];
coords[2] = [parseFloat(cord_data['coordinates'][2]['globalRef']['lng']), parseFloat(cord_data['coordinates'][2]['globalRef']['lat'])];
coords[3] = [parseFloat(cord_data['coordinates'][3]['globalRef']['lng']), parseFloat(cord_data['coordinates'][3]['globalRef']['lat'])];
// center of the building
var centre = [(coords[0][0] + coords[2][0]) / 2, (coords[0][1] + coords[2][1]) / 2];

console.log("reached here");
var maplocation={'lat':centre[1],'lng':centre[0]};

var building_marker=L.geoJson(myJSON,{
  filter: function (feature,layer) {
    return (feature.properties.floor == 'ground' && (feature.properties.type == 'main entry' || feature.properties.floorElement == 'Rooms'));
  },
  pointToLayer: function (feature, latlng) {
      latlng['lat']=centre[1]
      latlng['lng']=centre[0]
      maplocation=latlng;
    return L.marker(latlng,/*{icon:roomicon}*/);
  },
  onEachFeature: bindingPopup3
});


// L.marker({ lat: 28.545566236693578, lon: 77.19003561514704}).bindTooltip("Test Label", { permanent: true, direction: 'right'}).addTo(map);

// set view of the map to the center of the building
var map = L.map('map').setView([maplocation.lat, maplocation.lng], 20);


var myStyle = { //Style to display the non-walkable linestrings 
  "color": "#000000",
  "weight": 3,
  "opacity": 0.70,
};
var myStyle_background = { //Style to display the background tile
  "fillColor": "#dad1c8",//"#fcffe4",
  "fillOpacity": 1,
  "color": "#d3cabf",//"#fcffe4",
  "weight": 2,
  "opacity": 0.1,
};

  
var poly = {  // background tile for the building
  "type": "FeatureCollection",
  "features": [{
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [coords[0], coords[1], coords[2], coords[3], coords[0]]
      ]
    }
  }]
}
L.geoJson(poly, { style: myStyle_background }).addTo(map);


// add the OpenStreetMap tiles
// L.tileLayer('http://127.0.0.1/hot/{z}/{x}/{y}.png', { /*local host*/
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxNativeZoom: 19, //20 for localhost
  maxZoom: 23,
  attribution: '',
  id: 'base'
}).addTo(map);

L.control.scale().addTo(map); // show the scale bar 



//custom markers
female_toileticon = L.divIcon({
  className: 'custom-div-icon',
  html: "<div style='background-color:#4b85bb;' class='marker-pin'></div><i class='fa fa-female awesome'>",
  iconSize: [30, 42],
  iconAnchor: [15, 42],
  popupAnchor: [0, -30]
});
male_toileticon = L.divIcon({
  className: 'custom-div-icon',
  html: "<div style='background-color:#4b85bb;' class='marker-pin'></div><i class='fa fa-male awesome'>",
  iconSize: [30, 42],
  iconAnchor: [15, 42],
  popupAnchor: [0, -30]
});
watericon = L.divIcon({
  className: 'custom-div-icon',
  html: "<div style='background-color:#4b85bb;' class='marker-pin'></div><i class='fa fa-glass awesome'>",
  iconSize: [30, 42],
  iconAnchor: [15, 42],
  popupAnchor: [0, -30]
});
stairicon = L.divIcon({
  className: 'custom-div-icon',
  html: "<div style='background-color:#4b85bb;' class='marker-pin'></div><i class='fa fa-align-left awesome'>",
  iconSize: [30, 42],
  iconAnchor: [15, 42],
  popupAnchor: [0, -30]
});
lifticon = L.divIcon({
  className: 'custom-div-icon',
  html: "<div style='background-color:#4b85bb;' class='marker-pin'></div><i class='fa fa-street-view awesome'>",
  iconSize: [30, 42],
  iconAnchor: [15, 42],
  popupAnchor: [0, -30]
});
rampicon = L.divIcon({
  className: 'custom-div-icon',
  html: "<div style='background-color:#4b85bb;' class='marker-pin'></div><i class='fa fa-wheelchair awesome'>",
  iconSize: [30, 42],
  iconAnchor: [15, 42],
  popupAnchor: [0, -30]
});
escalatoricon = L.divIcon({
  className: 'custom-div-icon',
  html: "<div style='background-color:#4b85bb;' class='marker-pin'></div><i class='fa fa-level-up awesome'>",
  iconSize: [30, 42],
  iconAnchor: [15, 42],
  popupAnchor: [0, -30]
});
transportserviceicon = L.divIcon({
  className: 'custom-div-icon',
  html: "<div style='background-color:#4b85bb;' class='marker-pin'></div><i class='fa fa-motorcycle awesome'>",
  iconSize: [30, 42],
  iconAnchor: [15, 42],
  popupAnchor: [0, -30]
});
receptionicon = L.divIcon({
  className: 'custom-div-icon',
  html: "<div style='background-color:#4b85bb;' class='marker-pin'></div><i class='fa fa-group awesome'>",
  iconSize: [30, 42],
  iconAnchor: [15, 42],
  popupAnchor: [0, -30]
});
securityroomicon = L.divIcon({
  className: 'custom-div-icon',
  html: "<div style='background-color:#4b85bb;' class='marker-pin'></div><i class='fa fa-address-book-o awesome'>",
  iconSize: [30, 42],
  iconAnchor: [15, 42],
  popupAnchor: [0, -30]
});
informationcentericon = L.divIcon({
  className: 'custom-div-icon',
  html: "<div style='background-color:#4b85bb;' class='marker-pin'></div><i class='fa fa-address-book-o awesome'>",
  iconSize: [30, 42],
  iconAnchor: [15, 42],
  popupAnchor: [0, -30]
});
kioskicon = L.divIcon({
  className: 'custom-div-icon',
  html: "<div style='background-color:#4b85bb;' class='marker-pin'></div><i class='fa fa-newspaper-o awesome'>",
  iconSize: [30, 42],
  iconAnchor: [15, 42],
  popupAnchor: [0, -30]
});
foodndrinksicon = L.divIcon({
  className: 'custom-div-icon',
  html: "<div style='background-color:#4b85bb;' class='marker-pin'></div><i class='fa fa-cutlery awesome'>",
  iconSize: [30, 42],
  iconAnchor: [15, 42],
  popupAnchor: [0, -30]
});
babycareroomicon = L.divIcon({
  className: 'custom-div-icon',
  html: "<div style='background-color:#4b85bb;' class='marker-pin'></div><i class='fa fa-child awesome'>",
  iconSize: [30, 42],
  iconAnchor: [15, 42],
  popupAnchor: [0, -30]
});
dustbinicon = L.divIcon({
  className: 'custom-div-icon',
  html: "<div style='background-color:#4b85bb;' class='marker-pin'></div><i class='fa fa-cart-arrow-down awesome'>",
  iconSize: [30, 42],
  iconAnchor: [15, 42],
  popupAnchor: [0, -30]
});
beaconicon = L.divIcon({
  className: 'custom-div-icon',
  html: "<div style='background-color:#4b85bb;' class='marker-pin'></div><i class='fa fa-bullseye awesome'>",
  iconSize: [30, 42],
  iconAnchor: [15, 42],
  popupAnchor: [0, -30]
});
medicalroomicon = L.divIcon({
  className: 'custom-div-icon',
  html: "<div style='background-color:#4b85bb;' class='marker-pin'></div><i class='fa fa-hotel awesome'>",
  iconSize: [30, 42],
  iconAnchor: [15, 42],
  popupAnchor: [0, -30]
});
changeroomicon = L.divIcon({
  className: 'custom-div-icon',
  html: "<div style='background-color:#4b85bb;' class='marker-pin'></div><i class='fa fa-hotel awesome'>",
  iconSize: [30, 42],
  iconAnchor: [15, 42],
  popupAnchor: [0, -30]
});
breakroomicon = L.divIcon({
  className: 'custom-div-icon',
  html: "<div style='background-color:#4b85bb;' class='marker-pin'></div><i class='fa fa-hotel awesome'>",
  iconSize: [30, 42],
  iconAnchor: [15, 42],
  popupAnchor: [0, -30]
});
clockroomicon = L.divIcon({
  className: 'custom-div-icon',
  html: "<div style='background-color:#4b85bb;' class='marker-pin'></div><i class='fa fa-hotel awesome'>",
  iconSize: [30, 42],
  iconAnchor: [15, 42],
  popupAnchor: [0, -30]
});
roomicon = L.divIcon({
  className: 'custom-div-icon',
  html: "<div style='background-color:#4b85bb;' class='marker-pin'></div><i class='fa fa-user-circle awesome'>",
  iconSize: [30, 42],
  iconAnchor: [15, 42],
  popupAnchor: [0, -30]
});

// finding the number of floors in the building (max 10)
const myfloors= new Set()
for(let i=0;i<myJSON_poly.features.length;i++){
  myfloors.add(myJSON_poly.features[i].properties.floor)
}
const floormap = new Map([[0,'ground'],[1,'first'],[2,'second'],[3,'third'],[4,'fourth'],[5,'fifth'],[6,'sixth'],[7,'seventh'],[8,'eigth'],[9,'ninth'],[10,'tenth']])
const floors=[];
for(let i=0;i<myfloors.size;i++){
  if(myfloors.has(floormap.get(i))){
    floors.push(floormap.get(i))
  }
}

// adding floor buttons accordingly to switch floors
for(let i=0;i<myfloors.size;i++){
  const a='<button type="button" id="b'+i+'" class="btn btn-default">L'+i+'</button>'
  document.getElementById("floor-buttons").innerHTML+=a;
}

let floornum=0;
var cancelled=0;
var floorRoomsLayer = [];
var floorOtherLayer = [];
var nonWalkables = [];
var P1 = [];
var P2 = [];
var P3 = [];
var P4 = [];
var P5 = [];
var filterlist=[];
let userRating=0;
let audiofile=null;
let imagefile=null;


// Check Radio-box
// used for rating in the contribution form of a landmark
$(document).ready(function () {
  $(".rating input:radio").attr("checked", false);

  $('.rating input').click(function () {
    $(".rating span").removeClass('checked');
    $(this).parent().addClass('checked');
  });

  $('input:radio').change(function () {
    userRating = this.value;
  });
});

// reads the image file uploaded in the contribution form
function readURL(input) {
  if (input.files && input.files[0]) {
    imagefile = input.files[0];
    var reader = new FileReader();

    reader.onload = function (e) {
      $('#pic')
        .attr('src', e.target.result)
        .width(300)
        .height(150);
    };

    reader.readAsDataURL(input.files[0]);
    $("#removeImage").show();
    $(".preview-image").show();
  }
}

// enables audio control for the audio file uploaded in the contribution form
function playURL(event) {
  var files = event.target.files;
  if (files && files[0]) {
    audiofile = files[0];
    $("#src_audio").attr("src", URL.createObjectURL(files[0]));
    document.getElementById("audio_play").load();
    $("#removeAudio").show();
    $(".preview-audio").show();
    $("#audio_play").show();
  }
}

// removes image file uploaded on click of remove button
$("#removeImage").click(function (e) {
  e.preventDefault();
  $('#pic').attr('src', "");
  $('#pic').width(0);
  $('#pic').height(0);
  $("#image-input").val("");
  $("#removeImage").hide();
  $(".preview-image").hide();
  imagefile = null;
});

// removes audio file uploaded on click of remove button
$("#removeAudio").click(function (e) {
  e.preventDefault();
  $("#src_audio").attr("src", "");
  document.getElementById("audio_play").load();
  $("#removeAudio").hide();
  $(".preview-audio").hide();
  $("#audio_play").hide();
  audiofile = null;
});

// invokes click of image upload on click of image button in contribution form
function getcamera() {
  document.getElementById("image-input").click();
}

// invokes click of audio upload on click of audio button in contribution form
function getaudio() {
  document.getElementById("audio-input").click();
}

// opens contribution form
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

// closes contribution form
function closeForm() {
  document.getElementById("comment").value = "";
  $(".rating span").removeClass('checked');
  document.getElementById("removeImage").click();
  document.getElementById("removeAudio").click();
  document.getElementById("myForm").style.display = "none";
  imagefile = null
  audiofile = null
}

// prompts for confirmation to close form and invokes closeform if confirmed
function closef() {
  var res = confirm("Are you sure you want to close this feedback?");
  if (res) {
    closeForm();
    userRating = 0;
  }
}

// prompts for confirmation to submit form and invokes closeform if confirmed
function submitform() {
  var res = confirm("Are you sure you want to submit this feedback?");
  if (res) {
    alert("Submitted! Thanks for your review");
    var txt = document.getElementById("comment").value;
    var imageurl = "";
    var audiourl = "";
    if (imagefile !== null) {
      imageurl = URL.createObjectURL(imagefile);
    }
    if (audiofile !== null) {
      audiourl = URL.createObjectURL(audiofile);
    }
    var dataobj = { venue: venue_name, building: building_name, rating: userRating, audio: audiourl, image: imageurl, comment: txt };
    console.log(dataobj);
    userRating = 0;
    closeForm();
  }
}


// function to bind popup for building marker
function bindingPopup3(feature, featureLayer) {
  featureLayer.bindPopup(
    "Building: " + building_name/* + '</br>' + 
      "Floor: " + feature.properties.floor + '</br>' + 
      "Contact no: " + feature.properties.contactNo*/);
  featureLayer.on('mouseover', function (e) { this.openPopup(); });
  featureLayer.on('mouseout', function (e) { this.closePopup(); });
}


//function to bind popup on Each Feature for non-rooms
function bindingPopup1(feature, featureLayer) {
  featureLayer.bindPopup(
    "Name: " + feature.properties.name/* + '</br>' + 
    "Floor: " + feature.properties.floor + '</br>' + 
    "Contact no: " + feature.properties.contactNo*/);
  featureLayer.on('mouseover', function (e) { this.openPopup(); });
  featureLayer.on('mouseout', function (e) { this.closePopup(); });
}

//function to bind popup on Each Feature for rooms
function bindingPopup2(feature, featureLayer) {
  const info = '\n'
    + "Name :  " + feature.properties.name + '\n'
    + "Floor num. :  " + feature.properties.floor + '\n'
    + "Contact num. :  " + feature.properties.contactNo + '\n'
    + "Timings :  " + feature.properties.startTime + " - " + feature.properties.endTime;

  const access = '\n'
    + "Timings :  " + feature.properties.startTime + " - " + feature.properties.endTime;
  //+ "Days Open :  " + features.properties.daysOpen + '\n'

  const popupContent = `
      <div class="form-group">
        <label class="mb-0" for="comment">${feature.properties.name}</label>
      </div>
      <button id="info" class="btn"><i class="fa fa-info"></i></button>
      <button id="phn" class="btn"><i class="fa fa-phone"></i></button>
      <button id="net" class="btn"><i class="fa fa-internet-explorer"></i></button>
      <button id="wa" class="btn"><i class="fa fa-whatsapp"></i></button><br>
      <button id="mail" class="btn"><i class="fa fa-envelope"></i></button>
      <button id="add" class="btn"><i class="fa fa-upload "></i></button>
      <button id="history" class="btn"><i class="fa fa-history "></i></button>
      <button id="access" class="btn"><i class="fa fa-universal-access "></i></button>
     ` ;
  featureLayer.bindPopup(popupContent).on("popupopen", () => {
    //To handle null values  
    if ((feature.properties.contactNo == null) || !(feature.properties.contactNo)) {
      document.getElementById("phn").disabled = "true";
    }
    if ((feature.properties.url == null) || !(feature.properties.url)) {
      document.getElementById("net").disabled = "true";
    }
    if ((feature.properties.contactNo == null) || !(feature.properties.contactNo)) {
      document.getElementById("wa").disabled = "true";
    }
    if ((feature.properties.email == null) || !(feature.properties.email)) {
      document.getElementById("mail").disabled = "true";
    }
    if ((feature.properties.startTime == null) || (feature.properties.endTime == null)) {
      document.getElementById("access").disabled = "true";
    }


    $(".fa-info").on("click", e => {
      e.preventDefault();
      alert(info);
    });
    $(".fa-phone").on("click", e => {
      window.location.href = "tel:" + feature.properties.contactNo;
    });
    $(".fa-internet-explorer").on("click", e => {
      window.open(feature.properties.url, '_blank' /*Open in a new window.*/);
    });
    $(".fa-whatsapp").on("click", e => {
      window.open('https://api.whatsapp.com/send?phone=' + feature.properties.contactNo, '_blank' /*Open in a new window.*/);
    });
    $(".fa-envelope").on("click", e => {
      location.href = "mailto:" + feature.properties.email;
      // location.href = "mailto: xxxxx@iitd.ac.in";  
    });
    $(".fa-upload").on("click", e => {
      e.preventDefault();
      openForm();
      // prompt(`Please add the missing information`);
    });
    $(".fa-universal-access").on("click", e => {
      e.preventDefault();
      alert(access);
      //window.alert(` ${access}`);
    });
  });
}



// parsing the geojson data into layers for each floor and (rooms,non-rooms) - floorRoomsLayer, nonWalkables, P1, P2, P3, P4, P5
for (let i = 0; i < floors.length; i++) {

  floorRoomsLayer[i] = L.geoJson(myJSON, {
    filter: function (feature, layer) {
      return (feature.properties.floor == floors[i] && feature.properties.floorElement == 'Rooms');
    },
    pointToLayer: function (feature, latlng) {
      return L.marker(latlng,{icon:roomicon});
    },
    onEachFeature: bindingPopup2
  });

  nonWalkables[i] = L.geoJson(myJSON_poly, {
    filter: function (feature, layer) {
      return (feature.properties.floor == floors[i]);
    },
    style: myStyle,
  });

  P1[i] = L.geoJson(myJSON,{
    filter: function(feature,layer){
      return (feature.properties.floor == floors[i] && feature.properties.floorElement == 'Services' && (feature.properties.type=='Child | Baby Care' || feature.properties.type=='Food and Drinks' || feature.properties.type=='Trash Cans | Dustbin' || feature.properties.type=='beacons'));
    },
    pointToLayer: function (feature,latlng){
      switch(feature.properties.type){
        case 'Child | Baby Care': return L.marker(latlng,{icon:babycareroomicon});
        case 'Food and Drinks': return L.marker(latlng,{icon:foodndrinksicon});
        case 'Trash Cans | Dustbin': return L.marker(latlng,{icon:dustbinicon});
        case 'beacons': return L.marker(latlng,{icon:beaconicon});
        default: return L.marker(latlng);
      }
    },
    onEachFeature: bindingPopup2
  });

  P2[i] = L.geoJson(myJSON,{
    filter: function(feature,layer){
      return (feature.properties.floor == floors[i] && feature.properties.floorElement == 'Services' && (feature.properties.type=='Medical Room' || feature.properties.type=='Break Room' || feature.properties.type=='Change Room' || feature.properties.type=='Clock Room'));
    },
    pointToLayer: function (feature,latlng){
      switch(feature.properties.type){
        case 'Medical Room': return L.marker(latlng,{icon:medicalroomicon});
        case 'Break Room': return L.marker(latlng,{icon:breakroomicon});
        case 'Change Room': return L.marker(latlng,{icon:changeroomicon});
        case 'Clock Room': return L.marker(latlng,{icon:clockroomicon});
        default: return L.marker(latlng);
      }
    },
    onEachFeature: bindingPopup2
  });

  P3[i] = L.geoJson(myJSON,{
    filter: function(feature,layer){
      return (feature.properties.floor == floors[i] && feature.properties.floorElement == 'Services' && (feature.properties.type=='drinkingWater' || feature.properties.type=='restRoom' || feature.properties.type=='kiosk'));
    },
    pointToLayer: function (feature,latlng){
      switch(feature.properties.type){
        case 'drinkingWater': return L.marker(latlng, { icon: watericon });
        case 'restRoom': {
          switch (feature.properties.washroomType) {
            case 'Male': return L.marker(latlng, { icon: male_toileticon })
            case 'Female': return L.marker(latlng, { icon: female_toileticon })
          }
        }
        case 'kiosk': return L.marker(latlng, { icon: kioskicon });
        default: return L.marker(latlng);
      }
    },
    onEachFeature: bindingPopup2
  });

  P4[i] = L.geoJson(myJSON,{
    filter: function(feature,layer){
      return (feature.properties.floor == floors[i] && feature.properties.floorElement == 'FloorConnection');
    },
    pointToLayer: function (feature,latlng){
      switch(feature.properties.type){
        case 'stairs': return L.marker(latlng,{icon:stairicon});
        case 'lift': return L.marker(latlng,{icon:lifticon});
        case 'ramp': return L.marker(latlng,{icon:rampicon});
        case 'escalator': return L.marker(latlng,{icon:escalatoricon});
        default: return L.marker(latlng);
      }
    },
    onEachFeature: bindingPopup2
  });

  P5[i] = L.geoJson(myJSON,{
    filter: function(feature,layer){
      return (feature.properties.floor == floors[i] && feature.properties.floorElement == 'Services' && (feature.properties.type=='Help Desk | Reception' || feature.properties.type=='Security Room' || feature.properties.type=='Information Center' || feature.properties.type=='Transportation Service Till Building'));
    },
    pointToLayer: function (feature,latlng){
      switch(feature.properties.type){
        case 'Help Desk | Reception': return L.marker(latlng,{icon:receptionicon});
        case 'Security Room': return L.marker(latlng,{icon:securityroomicon});
        case 'Information Center': return L.marker(latlng,{icon:informationcentericon});
        case 'Transportation Service Till Building': return L.marker(latlng,{icon:transportserviceicon});
        default: return L.marker(latlng);
      }
    },
    onEachFeature: bindingPopup2
  });
  
}

// show and hide landmark filter and buildings list according to the zoom level and priority
$(function() {
  $('#mylist')[0].selectedIndex=0;
  for(let i=0;i<floors.length;i++){
    if(map.getZoom()>=18){
      $("#b"+i).show();
    }
    if(map.getZoom()<18){
      $("#b"+i).hide();
    }
  }
  for(let i=0;i<floors.length;i++){
    map.on('zoomend',function(){
      if(map.getZoom()>=18){
        $("#b"+i).show();
      }
      if(map.getZoom()<18){
        $("#b"+i).hide();
      }
    });
  }

  if(map.getZoom()>=18){
    $("#mylist").show();
  }
  if(map.getZoom()<18){
    $("#mylist").hide();
  }
  map.on('zoomend',function(){
    if(map.getZoom()>=18){
      $("#mylist").show();
    }
    if(map.getZoom()<18){
      $("#mylist").hide();
    }
  });

  if(map.getZoom()>=18){
    $("#blist").show();
  }
  if(map.getZoom()<18){
    $("#blist").hide();
  }
  map.on('zoomend',function(){
    if(map.getZoom()>=18){
      $("#blist").show();
    }
    if(map.getZoom()<18){
      $("#blist").hide();
    }
  });
});

// landmark filter
function filter(){
  var mylist = document.getElementById("mylist");
  var x=mylist.options[mylist.selectedIndex].text;
  if(x==="None"){
    cancelled=0;
    $('#mylist')[0].selectedIndex=0;
    for (let j = 0; j < floors.length; j++) { //clear all layers
      map.removeLayer(filterlist[j])
    }
    document.getElementById("b"+floornum).click();
  }
  else{
    alert("you selected "+x+" in "+floors[floornum]+" floor");
    if(filterlist[floornum]){
      console.log("yes");
      map.removeLayer(filterlist[floornum]);
    }
    var templist=[];
    for (let i = 0; i < floors.length; i++){
      templist[i] = L.geoJson(myJSON,{
      filter: function(feature,layer){
        return (feature.properties.floor == floors[i] && ((feature.properties.floorElement != 'Rooms' && feature.properties.type==x) || (feature.properties.floorElement =='Rooms' && feature.properties.floorElement==x )));
      },
      pointToLayer: function (feature,latlng){
        switch(feature.properties.type){
          case 'Child | Baby Care': return L.marker(latlng,{icon:babycareroomicon});
          case 'Food and Drinks': return L.marker(latlng,{icon:foodndrinksicon});
          case 'Trash Cans | Dustbin': return L.marker(latlng,{icon:dustbinicon});
          case 'beacons': return L.marker(latlng,{icon:beaconicon});
          case 'Medical Room': return L.marker(latlng,{icon:medicalroomicon});
          case 'Break Room': return L.marker(latlng,{icon:breakroomicon});
          case 'Change Room': return L.marker(latlng,{icon:changeroomicon});
          case 'Clock Room': return L.marker(latlng,{icon:clockroomicon});
          case 'drinkingWater': return L.marker(latlng, { icon: watericon });
          case 'restRoom': {
            switch (feature.properties.washroomType) {
              case 'Male': return L.marker(latlng, { icon: male_toileticon })
              case 'Female': return L.marker(latlng, { icon: female_toileticon })
            }
          }
          case 'kiosk': return L.marker(latlng, { icon: kioskicon });
          case 'stairs': return L.marker(latlng,{icon:stairicon});
          case 'lift': return L.marker(latlng,{icon:lifticon});
          case 'ramp': return L.marker(latlng,{icon:rampicon});
          case 'escalator': return L.marker(latlng,{icon:escalatoricon});
          case 'Help Desk | Reception': return L.marker(latlng,{icon:receptionicon});
          case 'Security Room': return L.marker(latlng,{icon:securityroomicon});
          case 'Information Center': return L.marker(latlng,{icon:informationcentericon});
          case 'Transportation Service Till Building': return L.marker(latlng,{icon:transportserviceicon});
          default: return L.marker(latlng,{icon:roomicon});
        }
      },
      onEachFeature: bindingPopup2
      });
    }
    cancelled=1;
    filterlist=templist;
    for (let j = 0; j < floors.length; j++) { //clear all layers
      map.removeLayer(building_marker)
      map.removeLayer(floorRoomsLayer[j])
      map.removeLayer(nonWalkables[j])
      map.removeLayer(P1[j])
      map.removeLayer(P2[j])
      map.removeLayer(P3[j])
      map.removeLayer(P4[j])
      map.removeLayer(P5[j])
    }
    if(map.getZoom()<=17){
      map.addLayer(building_marker)
    }
    if(map.getZoom()>=17){
      map.addLayer(nonWalkables[floornum])
    }
    if(map.getZoom()>=18){
      map.addLayer(filterlist[floornum])
    }
    map.on('zoomend', function () {
      if(cancelled==0){
        return;
      }
      for (let j = 0; j < floors.length; j++) { //clear all layers
        map.removeLayer(building_marker)
        map.removeLayer(filterlist[j])
        map.removeLayer(nonWalkables[j])
      }
      if(map.getZoom()<=17){
        map.addLayer(building_marker)
      }
      if(map.getZoom()>=17){
        map.addLayer(nonWalkables[floornum])
      }
      if(map.getZoom()>=18){
        map.addLayer(filterlist[floornum])
      }
    });
    for(let i=0;i<floors.length && cancelled==1;i++){
      $("#b"+i).click(function (){
        cancelled=0;
        for (let j = 0; j < floors.length; j++) { //clear all layers
          map.removeLayer(filterlist[j])
        }
      });
    }      
  }
}




$(function () { //Associating floor layers to floor buttons
  "use strict";
  for (let i = 0; i < floors.length; i++) {
    $("#b" + i).click(function () {
      floornum=i;
      $('#mylist')[0].selectedIndex=0;
      cancelled=0;
      for (let j = 0; j < floors.length; j++) { //clear all layers
        // map.removeLayer(floorOtherLayer[j])
        map.removeLayer(building_marker)
        map.removeLayer(floorRoomsLayer[j])
        map.removeLayer(nonWalkables[j])
        map.removeLayer(P1[j])
        map.removeLayer(P2[j])
        map.removeLayer(P3[j])
        map.removeLayer(P4[j])
        map.removeLayer(P5[j])
      }
      //display layers cooresponding to floor button clicked
      if(map.getZoom()<=17){
        map.addLayer(building_marker)
      }
      if(map.getZoom()>=17){
        map.addLayer(nonWalkables[i])
      }
      if(map.getZoom()>=19){
        map.addLayer(floorRoomsLayer[i])
      }
      if(map.getZoom()>=23){ map.addLayer(P1[i]) }
      if(map.getZoom()>=22){ map.addLayer(P2[i]) }
      if(map.getZoom()>=21){ map.addLayer(P3[i]) }
      if(map.getZoom()>=20){ map.addLayer(P4[i]) }
      if(map.getZoom()>=18){ map.addLayer(P5[i]) }

      map.on('zoomend', function () {
        if(cancelled==1){
          return;
        }
        // Zoom in & out control 
        for (let j = 0; j < floors.length; j++) { //remove all layers from map
          map.removeLayer(building_marker)
          map.removeLayer(floorRoomsLayer[j])
          map.removeLayer(nonWalkables[j])
          map.removeLayer(P1[j])
          map.removeLayer(P2[j])
          map.removeLayer(P3[j])
          map.removeLayer(P4[j])
          map.removeLayer(P5[j])
        }
        if(map.getZoom()<=17){
          map.addLayer(building_marker)
        }
        if(map.getZoom()>=17){
          map.addLayer(nonWalkables[i])
        }
        if(map.getZoom()>=19){
          map.addLayer(floorRoomsLayer[i])
        }
        //display layers cooresponding to floor button clicked
        if(map.getZoom()>=23){ map.addLayer(P1[i]) }
        if(map.getZoom()>=22){ map.addLayer(P2[i]) }
        if(map.getZoom()>=21){ map.addLayer(P3[i]) }
        if(map.getZoom()>=20){ map.addLayer(P4[i]) }
        if(map.getZoom()>=18){ map.addLayer(P5[i]) }
      });
    });
  }
});

document.getElementById("b0").click();
