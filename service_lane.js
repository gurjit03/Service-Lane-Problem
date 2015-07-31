function processData(input) {
    function computeLargestVehicle(enter,exit) {
        var largest = 3;
        while(!(enter > exit)) {
            largest = largest >= width[enter] ? width[enter] : largest;
            ++enter;
        }
        return largest;
    }
    
    //Enter your code here
    var inputArray = input.split("\n");
    var testCases = inputArray[0].split(" ");
    var LaneLength = Number(testCases[0]);
    var tests = Number(testCases[1]);
    var widthString = inputArray[1].split(" ");
    var width = [];
     
    for(var i = 0; i < LaneLength; ++i) {
        width.push(Number(widthString[i]));
    }
    
    var count = 2;
    
    for(var n = 0; n < tests ; ++n) {
        var testArray = inputArray[count].split(" ");
        var i = Number(testArray[0]);
        var j = Number(testArray[1]);
        //console.log(i,j);
        console.log(computeLargestVehicle(i,j));
        ++count;
    }
 
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
