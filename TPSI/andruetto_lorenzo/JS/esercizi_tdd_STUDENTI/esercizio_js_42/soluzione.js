export const swap = (l, n, m) => {
    //INSERISCI QUI IL TUO CODICE
    let lunghezza = l.length;
    n = (n + lunghezza) % lunghezza;
    m = (m + lunghezza) % lunghezza;
    
    let val = l.splice(n, 1);
    l.splice(m, 0, val);
    return l;
};
