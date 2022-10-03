guests = ["azaz","anees","sheikh"]
    for(i=0; i<=guests.length-1; i++)
    {
        alert(`hi ${guests[i]}! lets meet at dinner` )
    }
    alert("azar is not coming to dinner \n send new invitations")
    for(i=0; i<=guests.length-1; i++)
    {
        if (guests[i] == "azaz"){
            guests[i] = 'akram'
        }
        alert(`hi ${guests[i]}! lets meet at dinner` )
    }