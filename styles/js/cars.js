let word;

const words = ["essen", "tag", "morgen", "uhr", "hallo", "heisst", "foto", "sommer", "geburtsjahr", "drei", "haus", "bruder", "familie", "freundin", "kollege", "kino", "schwester", "tochter", "kind", "mann", "mann", "eltern", "partner", "geschwister", "schokolade", "brötchen", "wochenende", "welche", "informationen", "wichtig", "kurs", "probleme", "probleme", "probleme", "probleme", "probleme", "brötchen", "brötchen", "brötchen", "brötchen", "brötchen", "brötchen", "brötchen", "zitungsmeldung", "tauschen", "gruppe", "gruppe", "cafe", "cafe", "sätze", "familie", "personen", "antworten", "antworten"];

document.getElementById('btn').addEventListener('click',function(){
    num=Math.floor(Math.random()*(54))
    word=words[num]

    let voice=new SpeechSynthesisUtterance()
    voice.text=word
    speechSynthesis.speak(voice)

})

document.getElementById('sub').addEventListener('click',function(){
    if(document.getElementById('inp').value==word){
        alert("ПРАВИЛЬНО !!")
    }

    else{
        alert(`НЕПРАВИЛЬНО \n слово было ${word}`)
    }

    document.getElementById('inp').value=''

})

document.getElementById('speak').addEventListener('click',function(){
    let voice=new SpeechSynthesisUtterance()
    voice.text=word
    speechSynthesis.speak(voice)
})