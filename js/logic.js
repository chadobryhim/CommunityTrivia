$(document).ready(function() {

function initialScreen() {
	startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
	$(".mainArea").html(startScreen);
}

initialScreen();

$("body").on("click", ".start-button", function(event){
	clickSound.play();
	generateHTML();
	timerWrapper();
}); 

$("body").on("click", ".answer", function(event){
	//answeredQuestion = true;
	clickSound.play();
	selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswers[questionCounter]) {
		//alert("correct");
		clearInterval(theClock);
		generateWin();
	}
	else {
		//alert("wrong answer!");
		clearInterval(theClock);
		generateLoss();
	}
}); // Close .answer click

$("body").on("click", ".reset-button", function(event){
	clickSound.play();
	resetGame();
}); 

}); 

function generateLossDueToTimeOut() {
	unansweredTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + 
	"<p class='text-center'>You ran out of time!" + "<br>" + "This is the darkest timeline!" + "<br>" + "The correct answer was: " 
	+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='https://vignette4.wikia.nocookie.net/community-sitcom/images/a/ad/The_darkest_timeline.gif/revision/latest?cb=20130211175356'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000);  //  change to 4000 or other amount
}

function generateWin() {
	correctTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + 
	"<p class='text-center'>Correct!" + "<br>" + "Cool. Cool cool cool." + "<br>" + "The answer was: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000);  //  change to 4000 or other amount
}

function generateLoss() {
	incorrectTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + 
	"<p class='text-center'>Wrong!" + "<br>" + "You're the AT&T of people! You're the opposite of Batman!" + "<br>" + "The correct answer was: "+ correctAnswers[questionCounter] + "</p>" + 
	"<img class='center-block img-wrong' src='http://images.spoilertv.com/cache/community/Season 6/Cast Promotional Photos/COM_S6-KenJeong-FSS_0156_RT_fnl_180_cw180_ch180_thumb.jpg'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000); //  change to 4000 or other amount
}

function generateHTML() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + 
	questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + 
	"</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+
	answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
	$(".mainArea").html(gameHTML);
}

function wait() {
	if (questionCounter < 7) {
	questionCounter++;
	generateHTML();
	counter = 30;
	timerWrapper();
	}
	else {
		finalScreen();
	}
}

function timerWrapper() {
	theClock = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(theClock);
			generateLossDueToTimeOut();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function finalScreen() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Pop Pop! Here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
	$(".mainArea").html(gameHTML);
}

function resetGame() {
	questionCounter = 0;
	correctTally = 0;
	incorrectTally = 0;
	unansweredTally = 0;
	counter = 30;
	generateHTML();
	timerWrapper();
}

var startScreen;
var gameHTML;
var counter = 30;
var questionArray = [
	"Which event happens first:", 
	"In timeline 5, what 'African' name did Troy and Britta give their baby?", 
	"What actor plays Abed Nadir?", 
	"How is Jeff finally able to 'Seize the day' and pass Professor Whitman's class?", 
	"What character did not fake their own death?", 
	"For 'Green Week', what does the Dean change the college name to?", 
	"When Troy keeps challenging Abed, what event does Abed purposefully lose?", 
	"What is the name of Troy's monkey?"
	];
var answerArray = [
	["The study group finds out about Jeff and Slater's relationship", "Britta tells the study group about dance class", "Buddy tries to join the study group", "The study group controls the school's chicken fingers"],
	["Kwanza" , "Chewbacca" , "Blorgon" , "Kal-El"], 
	["Donald Glover", "Danny Glover" , "Danny Pudi" , "Joel McHale"],
	["He flew a kite" , "He supported Abed's film interest" , "He kissed Britta", "He wore creative rainbow suspenders"], 
	["Pierce" , "Alex" , "Chang" , "Neil"], 
	["Enviro-Dale!" , "Greener-Dale!" , "It doesn't change. The name is already Greendale!", "City College"], 
	["Basketball" , "Foot Race" , "Carnival game" , "Arm wrestling"], 
	["Pierce's Hair" , "Chang's Feet" , "Britta's Eyes" , "Annie's Boobs"]
	];
var imageArray = [
	"<img class='center-block img-right' src='http://images.spoilertv.com/cache/community/season-2/cast-promotional-photos/community_s2_joe_mchale_001_180_cw180_ch180_thumb.jpg'>", 
	"<img class='center-block img-right' src='http://images.spoilertv.com/cache/community/season-2/cast-promotional-photos/community_s2_donald_glover_001_180_cw180_ch180_thumb.jpg'>", 
	"<img class='center-block img-right' src='http://images.spoilertv.com/cache/community/season-2/cast-promotional-photos/community_s2_danny_pudi_002_180_cw180_ch180_thumb.jpg'>", 
	"<img class='center-block img-right' src='http://images.spoilertv.com/cache/community/season-2/cast-promotional-photos/community_s2_gillian_jacobs_003_180_cw180_ch180_thumb.jpg'>", 
	"<img class='center-block img-right' src='http://overmental.com/wp-content/uploads/2015/06/Neil-Community-750x502.png'>", 
	"<img class='center-block img-right' src='http://images.spoilertv.com/cache/community/Season 6/Cast Promotional Photos/COM_S6-JimRash-FSS_0138_RT_fnl_180_cw180_ch180_thumb.jpg'>", 
	"<img class='center-block img-right' src='https://vignette3.wikia.nocookie.net/community-sitcom/images/7/7b/3x5_Promopic20.jpg'>", 
	"<img class='center-block img-right' src='http://images.spoilertv.com/cache/community/season-2/cast-promotional-photos/community_s2_alison_brie_001_180_cw180_ch180_thumb.jpg'>"
	];
var correctAnswers = [
	"A. The study group finds out about Jeff and Slater's relationship", 
	"B. Chewbacca", 
	"C. Danny Pudi", 
	"C. He kissed Britta", 
	"D. Neil", 
	"A. Enviro-Dale!", 
	"B. Foot Race", 
	"D. Annie's Boobs"
	];
var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;
var clickSound = new Audio("sound/button-click.mp3");
