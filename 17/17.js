alert("please see console for output")
guests = ["akram","anees","sheikh"]
for(i=0; i<=guests.length-1; i++)
{
    console.log(`hi ${guests[i]}! found a bigger table! we can invite some more friends` )
}
guests.unshift("ali")
guests.splice(1,0,"ahmad")
guests.push("hamza")
console.log(guests);

alert("now we can't invite only two people")

while(guests.length>2){
    alert(guests.pop()+ "! i am sorry i cant invite you to diner as table is not arriving in time");
    console.log(guests);
}
for(i=0; i<=guests.length-1; i++){
    alert(guests[i] + "! you are still invited to dinner")
}