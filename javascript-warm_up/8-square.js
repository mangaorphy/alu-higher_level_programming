#!/usr/bin/node

let size = parseInt(process.argv[2], 10);
if (Number.isNaN(size)) {
    console.log('Missing size');
}else {
    for (let i = 0, s; i < size; i++) {
        s = '';
        for (let j = 0; j < size; j++) {
            s += 'X';
        }
        console.log(s);
    }
}
