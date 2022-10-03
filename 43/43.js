function copy(list){
    console.log(list)
    return [...list];
}
function show_magicians(copy_list){

    for(i=0; i<copy_list.length;i++){
        copy_list[i] = 'great ' + copy_list[i]
    }
    console.log(copy_list)
 }
 list = ['eric','nikoli','tesla']
 copy_list = copy(list);
 show_magicians(copy_list);