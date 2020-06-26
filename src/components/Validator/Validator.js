export const required = value => {
if (value)return undefined;
    return "Error";
}

export const maxLengthCreator = (maxLength) => (value) =>{
    if(value && value.length > maxLength)
    return `error, symbol is ${maxLength}`;
        return undefined
    
}