const questions = [
{
	'que': "Which of the following is a client site language?",
	'a': "Java",
	'b': "C",
	'c': "Python",
	'd': "JavaScript",
	'correct': "d",
},
{
	que:" Which type of JavaScript language is ___",
	a: "Object-Oriented",
	b: "Object-Based",
	c: "Assembly-language",
	d: "High-level",
	correct: "b"
},
{
	que: "What does HTML stand for?",
	a: "Hypertext Markup Language",
	b: "Cascading Style Sheet",
	c: "Jason Object Notation",
	d: "Helicopters Terminals Motorboats Lamborginis",
	correct: "a",
},
{
	que:" Which one of the following also known as Conditional Expression:",
	a:"Alternative to if-else",
	b: "Switch statement",
	c: "If-then-else statement",
	d:"immediate if",
	correct:"d",
},
{
   que:" The CSS property used to control the element's font-size is -",
   a: "text-style",
   b: "text-size",
   c :"font-size",
   d: "None of the above",
   correct:"c",
},
{
	que :" Which of the following CSS property is used to add shadows to the text?",
	a:"text-shadow",
	b:"text-stroke",
	c: "text-overflow",
	d: "text-decoration",
	correct: "a",
},
{
	que: "Which one of the following is an ternary operator:",
	a: "?",
	b: ":",
	c: "-",
	d: "+",
	correct:"a",
},
{
	que: "What year was JavaScript launched?",
	a: "1996",
	b: "1995",
	c: "1994",
	d: "none of the above",
	correct: "b",
},
{
	que: "Which one of the following operator returns false if both values are equal?",
	a: "!",
	b: "!==",
	c: "!=",
	d: "All of the above",
	correct: "c",

},
{
	'que': "What does CSS stands for?",
	'a': "Hypertext Markup Language",
	'b': "Cascading Style Sheet",
	'c': "Jason Object Notation",
	'd': "Helicopters Terminals Motorboats Lamborginis",
	'correct': "b",
}
];

let index = 0;
let total = questions.length;
let right=0, wrong=0;
const quesBox =document.getElementById("quesBox");
const optInp =document.querySelectorAll('.opts');


const loadQuestion =()=>{
	if(index ===total){
		return endQuiz()
	}
	reset();
	const data = questions[index]
	console.log(data)
	quesBox.innerText=` ${index+1}.) ${data.que}`;
	
    optInp[0].nextElementSibling.innerText = data.a
    optInp[1].nextElementSibling.innerText = data.b
    optInp[2].nextElementSibling.innerText = data.c
    optInp[3].nextElementSibling.innerText = data.d
}

const submitQuiz=()=>{
	const data = questions[index];
	const ans =getAnswer()
	// console.log(ans, data.correct);
    if(ans ==data.correct)
	{
		right++;
	}else{
		wrong++;
	}
	index++;
	loadQuestion();
	return;
}

const getAnswer=()=>{
	let answer;
	optInp.forEach(
		(input)=>{
			if(input.checked){
			   answer =input.value;
			}
		}
	)
	return answer;
}

const reset =()=>{
	optInp.forEach(
		(input)=>{
			input.checked=false;
		}
	)
}

const endQuiz =()=>{
   document.getElementById("container").innerHTML=`
   <div style="text-align:center "> 
     <h3>Thank you for playing the quiz</h3>
	 <h2> ${right} /${total} are correct </h2>
	 </div>
    `
}


// initial call reload page
loadQuestion();






