//Question no.40
function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}
console.log(make_album("Artist one", "The first Album"));
console.log(make_album("Artist two", "The Second Album"));
console.log(make_album("Artist three", "The Third Album", 15));
//Quetion no.41
var magicions = ["Hamoon", "Zakoota", "Herry Poter"];
function show_magicion(magicions) {
    magicions.forEach(function (magicion) {
        console.log(magicion);
    });
}
show_magicion(magicions);
//Question no.42
function make_great(magicions) {
    for (var i = 0; i < magicions.length; i++) {
        magicions[i] = magicions[i] + " The Great";
    }
}
make_great(magicions); //Modifies the orignal array
show_magicion(magicions); // Show modified names
