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
generateCalculator = () => {
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
        }
    }
}

const bus = {
    drive: (passengers) => {
        if (passengers.length > 10 && passengers.length < 50 && passengers.criminals === false)

        console.log("Driving " + passengers + "!");
    },
    stop: () => {
       console.log("Stopping!");
    },
    openDoors: () => {
        console.log("Opening Doors!");
    }
}


const validate = (validateFuncs, value) => {
  for (const func of validateFuncs) {
        console.log("Iterating through array!");
       if (!func(value)) {
        throw new Error("Cannot process.");
       }
  }
  console.log("Valid number!");
}
const isLessThan100 = (n) => {
    return n < 100;
}
const isMoreThan0 = (n) => {
    return n > 0;
}
const isNot50 = (n) => {
    return n != 50;
}
const validatorFuncs  = [isLessThan100, isMoreThan0, isNot50];
console.log(calculator.add(2, 2));