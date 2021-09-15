function saveName() {
    //se utente è già loggato benvenuto utente
    //altrimenti chiede di inserire il nome, lo salva nel local storage, benvenuto nome utente inserito

    let storedName = localStorage.getItem('name');
    if (storedName != null)
        alert('Benvenuto ' + storedName);
    else {
        //si apre box e untente puo inserire nome, quando utente clicca ok, viene salvato in name
        var insertName = prompt('Inserisci il nome');

        localStorage.setItem('name', insertName);
    }
}

function removeItem() {
    let storedName = localStorage.getItem('name');
    if (storedName != null)
        localStorage.removeItem('name');
    else
        alert("Non trovato");
}
