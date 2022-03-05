const sumAll = function() {
    let sumNumber = 0;
    if (!(Number.isInteger(arguments[0])) || !(Number.isInteger(arguments[1]))
        || arguments[0] < 0 || arguments[1] < 0)
    {
        return 'ERROR'
    } else {
        if (arguments[0] > arguments[1])
        {
            for (let i=arguments[1]; i<= arguments[0]; i++)
            {
                sumNumber += i;
            }
        } else {
            for (let i=arguments[0]; i<= arguments[1]; i++)
            {
                sumNumber += i;
            }
        }
    }
    return sumNumber;
};

// Do not edit below this line
module.exports = sumAll;
