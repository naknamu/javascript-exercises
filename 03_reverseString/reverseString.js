const reverseString = function(stringInput) {
    let newStringLength = stringInput.length-1;
    let reverseStringinput = "";
    for (let i=newStringLength; i>=0; i--)
    {
        reverseStringinput += stringInput[i];
    }
    return reverseStringinput;
};

// Do not edit below this line
module.exports = reverseString;
