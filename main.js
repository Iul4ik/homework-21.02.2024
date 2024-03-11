// <LEVEL 1>
const compare = (new Intl.Collator('en')).compare

function alphabet_order(str, reverse = false) {
    return str.split('')
    .sort((a, b) => ((reverse ? -1 : 1) * compare(a, b)))
        .join('')
}

document.writeln(alphabet_order("uncopyrightable"));
// </LEVEL 1>

// <LEVEL 2>
function findlongestword(str) {
    return str.split(' ').reduce((a, b) => (b.length > a.length) ? b : a);
    
}

document.writeln(findlongestword('Web Development In Telran'));
// </LEVEL 2>
