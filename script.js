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
	que: "What does HTML stand for?",
	a: "Hypertext Markup Language",
	b: "Cascading Style Sheet",
	c: "Jason Object Notation",
	d: "Helicopters Terminals Motorboats Lamborginis",
	correct: "a",
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
	'que': "What does CSS stands for?",
	'a': "Hypertext Markup Language",
	'b': "Cascading Style Sheet",
	'c': "Jason Object Notation",
	'd': "Helicopters Terminals Motorboats Lamborginis",
	'correct': "b",
}
];

let index = 3;
const quesBox =document.getElementById("quesBox");
const optInp =document.querySelectorAll('.opts');


const loadQuestion =()=>{
	const data = questions[index]
	console.log(data)
	quesBox.innerText=` ${index+1}) ${data.que}`;
	
    optInp[0].nextElementSibling.innerText = data.a
    optInp[1].nextElementSibling.innerText = data.b
    optInp[2].nextElementSibling.innerText = data.c
    optInp[3].nextElementSibling.innerText = data.d
}

// initial call reload page
loadQuestion();