const x = () => {
    console.log(`This function will be called inside the one below`)
};

const receivesAFunction = (callback) => {
    console.log(`this will execute first`)
    callback();
};

receivesAFunction(x);

const returnsANamedFunction = () => {
    return x
};
const returnsAnAnonymousFunction = () => {
    return () => {
        console.log(`This is an anonyumous function inside an assigned function`)
    }
};
returnsAnAnonymousFunction()();




