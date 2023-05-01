const questions = [
    {
        question: "Wat is schaamte?",
        optionA: "Iets wat wordt afgekeurd",
        optionB: "Een gemoedstoestand waarbij het geweten een mens plaagt",
        optionC: "Iets wat wordt afgekeurd",
        optionD: "7 days",
        correctOption: "Een onaangename psychosociale emotie ten aanzien van het afwijken van de eigen normen"
    },

    {
        question: "Wat is spijt?",
        optionA: "Aarzel, Twijfel",
        optionB: "De wens dat men anders had gehandeld",
        optionC: "Die keer dat je niet mee uit ging",
        optionD: "Iets wat wordt afgekeurd",
        correctOption: "optionB"
    },

    {
        question: "Wat is stigma?",
        optionA: "Praten over emoties",
        optionB: "Iets wat wordt afgekeurd",
        optionC: "een sterk cultureel bepaald fenomeen",
        optionD: "Een brandmerk dat aan een bepaald persoon, groep personen of zaak wordt gekoppeld",
        correctOption: "optionD"
    },

    {
        question: "Hoeveel vrienden hebben mensen gemiddeld?",
        optionA: "Geen",
        optionB: "2 goede vrienden",
        optionC: "3 tot 5 goede vrienden",
        optionD: "15 goede vrienden",
        correctOption: "optionC"
    },

    {
        question: "Wat is schroom?",
        optionA: "Aanfluiting, Beschaming",
        optionB: "Iets wat je niet moet doen",
        optionC: "Een afkeuring",
        optionD: "Aarzel, Twijfel",
        correctOption: "optionD"
    },

    {
        question: "Wat is schande?",
        optionA: "Iets wat wordt afgekeurd",
        optionB: "Aarzel, Twijfel",
        optionC: "Dit afstudeeronderzoek",
        optionD: "Mark Rutte",
        correctOption: "optionA"
    },

    {
        question: "Wat is schuld?",
        optionA: "Studiefinanciering",
        optionB: "Een negatieve emotie met de wens dat men anders had gehandeld",
        optionC: "Een gemoedstoestand waarbij het geweten een mens plaagt",
        optionD: "Aanfluiting, beschaming",
        correctOption: "optionC"
    },

    {
        question: "Wat is een effectieve manier om met schaamte om te gaan?",
        optionA: "Praten met vrienden en familie over je schaamte",
        optionB: "Vermijden van situaties die schaamte veroorzaken",
        optionC: "Alcohol drinken om de schaamte te verlichten",
        optionD: "Jezelf isoleren van anderen",
        correctOption: "optionA"
    },

    {
        question: "Wat kan worden gedaan om een ​​kind te helpen omgaan met schaamte?",
        optionA: "Het kind verplichten om zich te verontschuldigen",
        optionB: "Het kind straffen voor hun acties",
        optionC: "Het kind negeren en hun gedrag corrigeren",
        optionD: "Het kind aanmoedigen om over hun gevoelens te praten",
        correctOption: "optionD"
    },

    {
        question: "Wat is het tegenovergestelde van schaamte?",
        optionA: "Schuld",
        optionB: "Verdriet",
        optionC: "Angst",
        optionD: "Trots",
        correctOption: "optionD"
    },

    {
        question: "Wat is de term voor de schaamte die wordt geassocieerd met het feit dat iemand niet aan de verwachtingen van anderen voldoet?",
        optionA: "Religieuze schaamte",
        optionB: "Culturele schaamte",
        optionC: "Sociale schaamte",
        optionD: "Persoonlijke schaamte",
        correctOption: "optionC"
    },

    {
        question: "Welk type schaamte treedt op wanneer iemand zich schaamt voor wie ze zijn als persoon?",
        optionA: "Existentialistische schaamte",
        optionB: "Sociale schaamte",
        optionC: "Chronische schaamte",
        optionD: "Irrationele schaamte",
        correctOption: "optionA"
    },



]


let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// function for displaying next question in the array to dom
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
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
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
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
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
    if (playerScore <= 3) {
        remark = "Je kennis over schaamte is teleurstellend."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Je had beter je best kunnen doen."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Je weet verdacht veel over schaamte."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
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