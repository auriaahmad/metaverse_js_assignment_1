age = parseInt(prompt("enter your age"))
    if(age < 2)
    {
        alert('the person is a baby')
    }
    else if (age >=2 && age < 4)
    {
        alert("the person is a toddler")
    }
    else if (age >= 4 && age < 13)
    {
        alert("the person is a kid.")
    }
    else if (age >= 13 && age < 20)
    {
        alert("the person is a teenager.")
    }
    else if (age >= 20 && age < 65)
    {
        alert("the person is a adult.")
    }
    else if (age >=65){
        alert("the person is old")
    }