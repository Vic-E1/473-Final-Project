//Sample call using premade photo album
requestAlbum('TRO7brS');
//Imgur api
function requestAlbum(albumId) {
  var apiKey = '0d4f934c61640a4';
  var requestUrl = 'https://api.imgur.com/3/album/' + albumId + "/images";
  var req = new XMLHttpRequest();
  req.onreadystatechange = function() {
     if (req.readyState == 4 && req.status == 200) {
       processRequest(req.responseText);
     }
  };
  req.open("GET", requestUrl, true);
  req.setRequestHeader('Authorization', 'Client-ID ' + apiKey);
  req.send(null);
}

//Parses request and retrieves the individual image URLs from album
function processRequest(responseText) {
    var album = JSON.parse(responseText);
    for(i=0;i<album.data.length;++i){
      var idName = album.data[i].id;
      //to fill
      }
}
