function abbreviazione(input){
    const [nome, cognome] = input.split(' ');
    const abbreviazione = nome.charAt(0).toUpperCase() + '. ' + cognome.charAt(0).toUpperCase + cognome.slice(1).toLowerCase();
    return abbreviazione;
}
