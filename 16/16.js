guests = ["akram","anees","sheikh"]
    for(i=0; i<=guests.length-1; i++)
    {
        alert(`hi ${guests[i]}! found a bigger table! we can invite some more friends` )
    }
    guests.unshift("ali")
    guests.splice(1,0,"ahmad")
    guests.push("hamza")
    console.log(guests);

    for(i=0; i<=guests.length-1; i++)
    {
        // console.log(guests[i]);
        alert(`hi ${guests[i]}! lets have dinner together` )
    }