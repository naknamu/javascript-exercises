const removeFromArray = function() {
    const myArray = arguments[0];
    let argsLength = arguments.length;

    for (let j=1; j<argsLength; j++)
    {
        for (let i=0; i<myArray.length; i++)
        {
            if (arguments[j] === myArray[i])
            {
                myArray.splice(i,1);
            }
        }
    }
    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
