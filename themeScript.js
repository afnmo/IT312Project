let ss = document.getElementsByClassName('switch');
let style = localStorage.getItem('style');

if ( style == null)
{ setTheme("blue"); }

else {setTheme (style);}

for (let i of ss) {
	i.addEventListener('click' , function(){
	let theme = this.dataset.theme;
	setTheme(theme);
	});
	
	}

function setTheme(theme){
	if (theme == "green")
	{ document.getElementById("switch_id").href = "greenTH.css"; }
	else if (theme == "blue") {
		 document.getElementById("switch_id").href = "blueTH.css"; }
		 
		 localStorage.setItem("style", theme);
}


