// Vérifier si l'utilisateur a déjà répondu aujourd'hui 
function hasPlayedToday() {

    // Obtenir le cookie
    let lastPlayed = getCookie("lastPlayed");
  
    // Vérifier la date
    if(!lastPlayed) {
      return false; 
    }
  
    // Extraire la date  
    let lastPlayedDate = new Date(lastPlayed);
     
    // Comparer à aujourd'hui
    let today = new Date();  
    return (
      lastPlayedDate.getDate() == today.getDate() &&
      lastPlayedDate.getMonth() == today.getMonth() && 
      lastPlayedDate.getFullYear() == today.getFullYear()
    );
  
  }
  
  function playQuiz() {
  
    // Si déjà joué aujourd'hui
    if(hasPlayedToday()) {
      alert("Vous avez déjà joué au quiz aujourd'hui!");
      return;
    }
    
    // Poser une question
  
    // (...) Code du quiz
  
    // Mémoriser la date du jour
    setCookie("lastPlayed", new Date().toISOString(), 1)  
  
  }
  
  function setCookie(name, value, expirationInDays) {
    let date = new Date()  
    date.setTime(date.getTime() + (expirationInDays*24*60*60*1000));
    let expires = "expires="+ date.toUTCString();  
    document.cookie = name + "=" + value + ";" + expires + ";path=/";  
  }
  
  
  function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
      let c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }