current_users = ['ali','imran','ahmad','saleem','luqman']
new_users = ['farhan','basheer','ahmad', 'LUQMAN','taimoor']
    for(i=0; i<new_users.length; i++){
        if(current_users.includes(new_users[i].toLowerCase())){
            console.log(`user name not available change user name`);
        }else{
            console.log(`user name available`);
        }
    }