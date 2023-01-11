export function sayHello (name) {
    if (typeof name === 'string' || name instanceof String) {
        if (name.length === 0 || name.length > 30)
            throw "Name must have max 30 characters and min 1 character.";
        else
            return "Hello " + name;
    } else
        throw "Parameter name must be an instance of String.";
};

console.log("Application built successfully.");