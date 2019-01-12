const calculator = {
    add: (a, b) => {
        const result = a + b;
        validate(validatorFuncs, result);
        return result;
    },
    subtract: (a, b) => {
        return a - b
    },
    multiply: (a, b) => {
        return a * b
    }
}
generateCalculator = (validatorFuncs) => {
    return {
        add: (a, b) => {
            const result = a + b;
            validate(validatorFuncs, result);
            return result;
        },
        subtract: (a, b) => {
            return a - b
        },
        multiply: (a, b) => {
            return a * b
        },
        validatorFuncs: validatorFuncs 
    }
}
console.log(generateCalculator);