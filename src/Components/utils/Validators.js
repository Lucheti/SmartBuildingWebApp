export const textValidator = value => value !== ''

export const mailValidator = value =>  RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+/).test(value)