var element = document.getElementById("theBody");
var element2 = document.getElementById("theButtons");
var part = 0;
function previous() {
	part = part - 2;
	next()
}
function next() {
	part++;
	if(part == 1) {
		element2.innerHTML = '';
		element.innerHTML = `<h1 class="title">I'm theJuniorProgrammer3.</h1>
		<h3 class="stitle">In Github</h3>
		`
		setTimeout(() => {
			element.innerHTML += `<p>I plan to become a polygot programmer.<p>
			<p>I focused on C++ for now, it's a powerfull programming language, in my opinion.</p>
			`
		}, 3000);
		setTimeout(() => {
			element2.innerHTML = `<button onClick="next()">Next</button>
			`
		}, 5000);
	} else if(part == 2) {
		element2.innerHTML = '';
		element.innerHTML = `<h1 class="title">Thanks, Petanikode.</h1>
		<h3 class="stitle">By his blog</h3>
		`
		setTimeout(() => {
			element.innerHTML += `<p>I learned programming language, using his blog on <a href="https://www.petanikode.com/">petanikode.com</a></p>
			<p>I'm not sure he is here, but I want to say thank you to him.</p>
			<p>His <a href="https://github.com/ardianta">Github account</a></
			`
		}, 3000);
		setTimeout(() => {
			element2.innerHTML = `<button onClick="next()">Next</button>
			 <button onClick="previous()">Previous</button>
			 `
		}, 5000);
	} else if(part == 3) {
		element2.innerHTML = '';
		element.innerHTML = `<h1 class="title">Visit Me</h1>
		<h3 class="stitle">On <a href="https://github.com/">Github</h3>
		`
		setTimeout(() => {
			element2.innerHTML = `<button onClick="previous()">Previous</button>
			 `
		}, 2000);
	}
	else {
		element.innerHTML = "What happen? This is a bug on my code.";
	}
}
