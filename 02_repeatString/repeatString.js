const repeatString = function(stringValue, numberOfTimes) {
    let output = "";
    if (numberOfTimes < 0)
    {
        return 'ERROR'
    }
    for (let i = 0; i<numberOfTimes; i++)
    {
        output = output.concat(stringValue);
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
