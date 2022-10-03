user_names = ['admin','ali','ahmad','orya','sunna']
    
    for(i=0; i < user_names.length ; i++){
        if(user_names[i] == 'admin'){
            console.log(`Hello ${user_names[i]}, would you like to see a status report?`)
        }
        else{
            console.log( `Hello ${user_names[i]}, thank you for logging in again.`);
        }
    }