function Reverse(str) {
    let reversed = str.split("").reverse().map(char => {
        if (char === char.toUpperCase()) {
            return char.toLowerCase();
        } 
        else 
        {
            return char.toUpperCase();
        }
    });
    return reversed.join("");
}
console.log(Reverse("hello World"));