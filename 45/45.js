function car_details(manufacturer, model_name, rest){
    console.log(
        {
            "manufacturer": manufacturer,
            "model_name": model_name,
            ...rest
        }
    );
}
other = {
    'color': 'red',
    'other option': 'CNG'
}
car_details('suzuki','vxri',other)