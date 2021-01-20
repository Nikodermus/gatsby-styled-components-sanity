export const randomInt = (...args) => {
    let min = 0;
    let max = args[0];

    if (args.length === 2) {
        [min, max] = args;
    }

    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
};
