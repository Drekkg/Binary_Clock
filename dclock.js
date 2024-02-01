function convertToBinary(num) {
    var binaryMapping = ["0000", "0001", "0010", "0011", "0100", "0101", "0110", "0111", "1000", "1001"];
    return binaryMapping[num];
}


// console.log(convertToBinary(3));
let fifthValue ="0111";
var colorMapping = {
    "0111": ["gray", "red", "red", "red"],
    "1000": ["red", "gray", "gray", "gray"],
    // Add more mappings as needed
};

if (colorMapping.hasOwnProperty(fifthValue)) {
    var colors = colorMapping[fifthValue];
    for (var i = 0; i < 4; i++) {
        // document.getElementById("dash" + (17 + i)).style.setProperty("background-color", colors[i]);
        console.log(colors[i]);
    }
}

