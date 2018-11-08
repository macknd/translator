let language=document.getElementById("lang").value;
let phrase=document.getElementById("phrase").value;
const translate=document.getElementById("translate");
const translations={
    spanish:{
        how: "Cómo estás?",
        what: "Qué estás haciendo?",
        miss: "Te extrañaré!",
        bath: "Dónde está el baño?",
        day: "Tenga un buen día!"
    },
    french:{
        how: "Comment vas-tu?",
        what: "Que faites-vous?",
        miss: "Vous allez me manquer!",
        bath: "Où se trouvent les toilettes?",
        day: "Bonne journée!"
    },
    italian:{
        how: "Come stai?",
        what: "Cosa stai facendo?",
        miss: "Mi mancherai!",
        bath: "Dov'è il bagno?",
        day: "Buona giornata!"
    }
}

translate.addEventListener("click", ()=>{
    let translation=translations[language][phrase];
    document.getElementById("translation").innerHTML=translation;
})
