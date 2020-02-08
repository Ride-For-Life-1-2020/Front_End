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

// export const resizeImage = (img, imageData) => {
//     img.src = imageData;

//     const canvas = document.createElemt("canvas");
//     const context = canvas.getContext("2d");

//     const MAX_WIDTH = 500;
//     const MAX_HEIGHT = 500;

//     let width = img.width;
//     let height = img.height;
    
//     if (width > height) {
//         if (width > MAX_WIDTH) {
//             height *= MAX_WIDTH / width;
//             width = MAX_WIDTH;
//         }
//     } else {
//         if (height > MAX_HEIGHT) {
//             width
//         }
//     }
// }