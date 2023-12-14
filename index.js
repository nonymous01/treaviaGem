//this would be the object shape for storing the questions  
 //you can change the questions to your own taste or even add more questions..

 
 const questions = [
    {
        question: " Que signifie 'Dêmin-dêmin' ",
        optionA: "Manger à sa faim",
        optionB: "Se débrouiller",
        optionC: "Donner vie",
        optionD: "Parler trop",
        correctOption: "optionB"
    },

    {
        question: "Comment dire 'MANGER ENSEMBLE'?",
        optionA: "Le coulé",
        optionB: "Gbayé dans gbêve",
        optionC: "Daba en gbonhï",
        optionD: "Fraya",
        correctOption: "optionC"
    },

    {
        question: "QUE SIGNIFIE 'yé té couman de kélkéchoz'",
        optionA: "Parler en vain",
        optionB: "Prendre l'argent",
        optionC: "Se débrouiller",
        optionD: "Je te parle de quelque chose",
        correctOption: "optionD"
    },

    {
        question: "Comment dire 'MAISON' ?",
        optionA: "Bori",
        optionB: "Jéton",
        optionC: "Pix",
        optionD: "Mousso",
        correctOption: "optionC"
    },

    
    {
        question: "Donnez un synonyme de 'AFFAIRAGE'",
        optionA: "Gawa",
        optionB: "Zoo",
        optionC: "Bori",
        optionD: "Gbairai",
        correctOption: "optionD"
    },
     
    {
        question: "Donnez un synonyme de 'AMOUREUX'",
        optionA: "Fraya",
        optionB: "Beko",
        optionC: "Fan",
        optionD: "Apoutchou",
        correctOption: "optionC"
    },

    

    {
        question: "Comment dire 'COURIR' ?",
        optionA: "Behou",
        optionB: "Chap chap",
        optionC: "Gbor",
        optionD: "Choco",
        correctOption: "optionA"
    },
    {
        question: "Comment dire 'REFLECHIR' ?",
        optionA: "Gouman",
        optionB: "Sciencé",
        optionC: "Mousso",
        optionD: "Fata",
        correctOption: "optionB"
    }
    ,
    {
        question: "Comment dire 'IGNORANT' ?",
        optionA: "Fargot",
        optionB: "Din din",
        optionC: "Gahou",
        optionD: "Gbé",
        correctOption: "optionC"
    }
    ,
    {
        question: "Que signifie 'BAHI' ?",
        optionA: "Chanceux",
        optionB: "Malchanceux",
        optionC: "Intelligent",
        optionD: "Sage",
        correctOption: "optionB"
    }
    ,
    {
        question: "Que signifie 'Zo' ?",
        optionA: "Parc animalier",
        optionB: "Forêt",
        optionC: "Restaurant",
        optionD: "Joli",
        correctOption: "optionD"
    }
    ,
    {
        question: "Que signifie 'SKINNY' ?",
        optionA: "Riche",
        optionB: "Mince",
        optionC: "Rapporter",
        optionD: "Donner",
        correctOption: "optionB"
    },
    {
        question: "Donnez la signification de Abogaiss",
        optionA: "Joli",
        optionB: "Avare",
        optionC: "Étranger",
        optionD: "Menteuse",
        correctOption: "optionA"
    }
    ,
    {
        question: "Donnez la signification de 'Assoya'",
        optionA: "S'associer",
        optionB: "Engueuler",
        optionC: "Critiquer",
        optionD: "Courir",
        correctOption: "optionA"
    }

,
{
        question: "Qu'est-ce que 'Atalaku' signifie ?",
        optionA: "Quelqu'un",
        optionB: "Eloges",
        optionC: "Danser",
        optionD: "Fuir",
        correctOption: "optionB"
}
,
    
{
    question: "Comment pourrait-on définir Atchè en un mot?",
    optionA: "Affairé",
    optionB: "Avare",
    optionC: "Mignon",
    optionD: "Musclé",
    correctOption: "optionB"
 }
 ,
    
    {
        question  : "Donnez la signification de Bingue",
        optionA: "La France",
        optionB :"L'Europe",
        optionC :"Krika 5",
        optionD :"Difficile",
        correctOption: "optionA"
        }
        ,
        {
        question  : "Que signifie 'Bâ fils' en nouchi",
        optionA: "1 500 francs CFA",
        optionB: "Krika",
        optionC: "1 000 francs CFA",
        optionD: "Trop compliqué",
        correctOption: "optionA"
        }
        ,
        {
        question :" Qu'est-ce que 'Braisage' signifie en nouchi ?",
        optionA: "Critiquer, parler des gens",
        optionB: "Afférage",
        optionC: "Danser",
        optionD: "Engueuler",
        correctOption: "optionA"
        },
        {
            question : "Comment pourrait-on définir C'est mou en un mot?",
            optionA: "Etre tchass, être sexy",
            optionB: "Ne pas avoir d'argent",
            optionC: "Etre fatigué",
            optionD: "Etre enceinte",
            correctOption: "optionB"
            }
            ,
            {
            question : "Que veut dire 'Dêmin-dêmin' en nouchi",
            optionA: "Ramener quelqu'un à la réalité",
            optionB: "Décourager une personne",
            optionC:" Se débrouiller",
            optionD: "Faire vite, Se dépêcher",
            correctOption: "optionC"
            }
            ,
            {    
            question : "Que signifie 'Kpo Kpo' en nouchi ?",
            optionA: "Expliquer quelque chose",
            optionB:" Casser mon cou",
            optionC: "Appeler, téléphoner, coup de fil",
            optionD: "Prendre sa balle, coup tete...",
            correctOption: "optionC"
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
