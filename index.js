//this would be the object shape for storing the questions  
 //you can change the questions to your own taste or even add more questions..

 
 const questions = [
    {
        question: "Quelle est la nation qui a remporté le plus grand nombre de titres de la CAN jusqu'à présent ?",
        optionA: "Mali",
        optionB: "Nigeria",
        optionC: "Cameroun",
        optionD: "Égypte",
        correctOption: "optionD"
    },

    {
        question: "En quelle année la première Coupe d'Afrique des Nations a-t-elle eu lieu ?",
        optionA: "1963",
        optionB: "1957",
        optionC: "1970",
        optionD: "1952",
        correctOption: "optionB"
    },

    {
        question: "Quel pays qui a accueilli la CAN 2019 ?",
        optionA: "Cameroun",
        optionB: "Afrique du Sud",
        optionC: "Maroc",
        optionD: "Égypte",
        correctOption: "optionD"
    },

    {
        question: "Quelle équipe a remporté la CAN 2021 ?",
        optionA: "Maroc",
        optionB: "Algérie",
        optionC: "Sénégal",
        optionD: "Tunisie",
        correctOption: "optionC"
    },

    {
        question: "Combien d'équipes participent généralement à la phase finale de la CAN ?",
        optionA: "16",
        optionB: "20",
        optionC: "32",
        optionD: "24",
        correctOption: "optionD"
    },

    {
        question: "Quel pays a remporté la CAN pour la première fois en 1992 ?",
        optionA: "Côte d'Ivoire",
        optionB: "Ghana",
        optionC: "Nigeria",
        optionD: "Algérie",
        correctOption: "optionA"
    },

    {
        question: "Quelle nation a accueilli la CAN pour la première fois en 1957 ?",
        optionA: "Ghana",
        optionB: "Égypte",
        optionC: "Soudan",
        optionD: "Éthiopie",
        correctOption: "optionC"
    },

    {
        question: "Quelle équipe nationale est surnommée \"les Éléphants\" et a remporté la CAN en 2015 ?",
        optionA: "Côte d'Ivoire",
        optionB: "Cameroun",
        optionC: "Nigeria",
        optionD: "Ghana",
        correctOption: "optionA"
    },

    {
        question: "Qui est l'entraîneur actuel de l'équipe nationale du Maroc ?",
        optionA: "Didier Deschamps",
        optionB: "Badou Zaki",
        optionC: "Hervé Renard ",
        optionD: "Vahid Halilhodži",
        correctOption: "optionD"
    },

    {
        question: "À partir de quelle année la CAN a-t-elle eu lieu tous les deux ans au lieu de quatre ans?",
        optionA: "2010",
        optionB: "2012",
        optionC: "2002",
        optionD: "2013",
        correctOption: "optionD"
    },

    {
        question: "Quelle est la mascotte officielle de la CAN 2023 ?",
        optionA: "Tut",
        optionB: "Chuku Chuku",
        optionC: "Akawba",
        optionD: "Palanquinha",
        correctOption: "optionC"
    },

    {
        question: "Combien de groupes y a-t-il généralement dans la phase de groupes de la CAN ?",
        optionA: "6",
        optionB: "8",
        optionC: "10",
        optionD: "7",
        correctOption: "optionA"
    },


    {
        question: "Quelle équipe détient le record du plus grand nombre de participations à la CAN sans avoir remporté le titre ?",
        optionA: "Angola",
        optionB: "Mali",
        optionC: "Soudan",
        optionD: "Gabon",
        correctOption: "optionB"
    },

    {
        question: "En quelle année a été introduite la phase de groupes dans le format de la CAN ?",
        optionA: "1957",
        optionB: "1964",
        optionC: "2013",
        optionD: "1992",
        correctOption: "optionD"
    },

    {
        question: "Quelle équipe nationale est surnommée les \"Super Eagles\" ?",
        optionA: "Nigeria",
        optionB: "California",
        optionC: "Burkina faso",
        optionD: "Tanzanie",
        correctOption: "optionA"
    },

    {
        question: "Quelle nation africaine a atteint les quarts de finale de la Coupe du Monde de la FIFA pour la première fois en 1990 ?",
        optionA: "Guinée Équatoriale",
        optionB: "Éthiopie",
        optionC: "Cameroun",
        optionD: "Afrique du sud",
        correctOption: "optionC"
    },

    {
        question: "En quelle année l'Égypte a-t-elle accueillie la CAN pour la première fois ?",
        optionA: "1959",
        optionB: "2006",
        optionC: "1986",
        optionD: "1974",
        correctOption: "optionA"
    },

    {
        question: "Quelle équipe a été finaliste de la CAN 2004, mais a perdu face à la Tunisie ?",
        optionA: "Sénégal",
        optionB: "Shining city",
        optionC: "Maroc",
        optionD: "Libye",
        correctOption: "optionC"
    },

    {
        question: "Quel pays a organisé la CAN pour la première fois en 1962 ?",
        optionA: "Égypte",
        optionB: "Ghana",
        optionC: "Soudan",
        optionD: "Éthiopie",
        correctOption: "optionD"
    },

    {
        question: "Quel joueur ivoirien a remporté le Ballon d'Or Africain en 2015 après avoir mené son équipe à la victoire en 2015 ?",
        optionA: "Yaya Touré",
        optionB: "Joel Tié",
        optionC: "Kolo touré",
        optionD: "Didier Drogba",
        correctOption: "optionA"
    },

    {
        question: "Quel ancien international égyptien a été l'entraîneur de l'équipe nationale d'Égypte lors de la CAN 2008 ?",
        optionA: "Mahmoud El-Gohary",
        optionB: "Mohamed Salah",
        optionC: "Ahmed Hassan",
        optionD: "Hassan Shehata",
        correctOption: "optionD"
    },

    {
        question: "Quel entraîneur a mené le Nigeria à la victoire lors de la CAN 1994, remportant ainsi son premier titre?",
        optionA: "Paul Hamilton",
        optionB: "Clemens Westerhof",
        optionC: "Shaibu Amodu",
        optionD: "Gottlieb Göller",
        correctOption: "optionB"
    },

    {
        question: "Qui était l'entraîneur de l'équipe du Sénégal lors de la CAN 2002, où ils ont atteint la finale pour la première fois?",
        optionA: "Lamine N'Diaye",
        optionB: "Bruno Metsu",
        optionC: "Omar Daf",
        optionD: "Mbaye Leye",
        correctOption: "optionB"
    },

    {
        question: "Qui était l'entraîneur de l'équipe nationale du Sénégal lors de la CAN 2019 remportée par l'Algérie ?",
        optionA: "Clarence Seedorf",
        optionB: "Aliou Cissé",
        optionC: "Javier Aguirre",
        optionD: "Hervé Renard",
        correctOption: "optionB"
    },

    {
        question: "Quel pays était dirigé par l'entraîneur Gernot Rohr lors de la CAN 2019 ?",
        optionA: "Ghana",
        optionB: "Maroc",
        optionC: "Nigeria",
        optionD: "Cameroun",
        correctOption: "optionC"
    },

    {
        question: "Hervé Renard a remporté la CAN avec deux équipes différentes. lesquels  ?",
        optionA: "Algérie et Tunisie",
        optionB: "Égypte et Sénégal",
        optionC: "Côte d'Ivoire et Maroc",
        optionD: "Ghana et Nigeria",
        correctOption: "optionC"
    },

    {
        question: "Qui était l'entraîneur de l'Égypte lors de la CAN 2017 ?",
        optionA: "Javier Aguirre",
        optionB: "Aliou Cissé",
        optionC: "Hector Cuper",
        optionD: "Hervé Renard",
        correctOption: "optionC"
    },

    {
        question: "Quel pays était entraîné par Florent Ibenge lors de la CAN 2019 ?",
        optionA: "Gabon",
        optionB: "RDC (République démocratique du Congo)",
        optionC: "Mali",
        optionD: "Burkina Faso",
        correctOption: "optionB"
    }

]

let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 6) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 0) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore = 0) {
        remark = "Mauvaises notes, continuez à vous entraîner.."
        remarkColor = "red"
    }
    
    else if (playerScore = 1) {
        remark = "Excellent, continuez à faire du bon travail."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 1) * 10

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}
