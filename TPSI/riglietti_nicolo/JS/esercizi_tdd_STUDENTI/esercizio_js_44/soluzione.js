export const ordina = (l) => {
    return l.sort((a, b) => (a.title > b.title ? -1 : a.title < b.title ? 1 : 0))
};
