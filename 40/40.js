function make_album(artist_name, album_title, number_of_records){
    return {
        'artist name' : artist_name,
        'album title' : album_title,
        'number of records': number_of_records
    }
}
console.log(make_album('ali','ali hits'));
console.log(make_album('ahmad','ahmad collection'));
console.log(make_album('marko','marko bands',12));