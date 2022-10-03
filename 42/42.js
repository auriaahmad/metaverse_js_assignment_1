function make_great(list){
    for(i=0; i<list.length;i++){
        list[i] = 'great ' + list[i]
    }
    console.log(list)
    show_magicians()
}
function show_magicians(){
    console.log(list);
}

list = ['eric','nikoli','tesla']
make_great(list)