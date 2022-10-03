var input_string = prompt("Enter full name.");
var arr = input_string.split(" ");
for (var i = 0; i < arr.length; i++) {
    var word = arr[i];
    var first_char = word.charAt(0).toUpperCase();
    var word_arr = word.split("");
    word_arr.splice(0, 1, first_char);
    var word_str = word_arr.join("");
    arr.splice(i, 1, word_str);
}
alert(input_string.toUpperCase() + " " + input_string.toLowerCase() + " " +  arr.join(" ")  );