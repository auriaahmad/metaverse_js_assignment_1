num_array = [1,2,3,4,5,6,7,8,9]

    for(i=0;i<num_array.length;i++){
        if(num_array[i]==1){
            console.log('1st');
        }
        else if(num_array[i]==2){
            console.log('2nd');
        }
        else if(num_array[i]==3){
            console.log('3rd');
        }
        else{
            console.log(`${num_array[i]}th`)
        }
    }