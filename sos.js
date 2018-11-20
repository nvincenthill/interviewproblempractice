const sos = (s) => {
    let i = 0;
    let count = 0;
    let message = 'SOS';

    while (s[i] !== undefined) {
        if (i === 0 || i % 3 === 0) {
            if (s[i] !== message[0]) {
                count++;
            }
        } else if (i % 3 === 1) {
            if (s[i] !== message[1]) {
                count++;
            }
        } else if (i % 3 === 2) {
            if (s[i] !== message[2]) {
                count++;
            }
        }
        i++;
    }
    return count;
}