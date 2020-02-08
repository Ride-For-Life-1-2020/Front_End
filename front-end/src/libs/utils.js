export const toString = input => {
    if (input) {
        if (typeof input === 'string') {
            return input
        }

        return String(input)
    }

    return '';
}

export const toWords = input => {
    input = toString(input);

    const regex = /[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])|\d+/g;

    return input.match(regex);
}
