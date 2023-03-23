let homeSkillTimer;
let contactTextTimer;
let curHomeSkillIndex = 0;
let homeSkillDirection = "forward";
let curContactTextIndex = 0;
let contactTextDirection = "forward";
let curPage;
let firstrow, secondrow, thirdrow = false;
let curpic = 0;
let headers = ['NFT Market Web App', 'Food Delivery Web App', 'Excel File Analyzer Web App', 'Music Player App Dark Theme', 'Khadnezza Website', 'Handel Wears Website', '2048 Game', 'School Examiner Desktop App', 'Room Allocation Desktop App'];
let texts = [
				'A Web App for the storage and sales of NFT art',
				'A Web App for the selection and purchase of food, snacks and drinks alongside a delivery service',
				'A Web App for the analysis of excel files which involves the highlighting or removal of duplicate entries depending on user choice',
				'A simple dark theme UI design for a music player web app or website',
				'A simple website for a tech and IT company, Khadnezza',
				'A simple website for an entrepreneur, Handel Wears',
				'A replica of the 2048 game as a web app',
				'A desktop app for schools to create, taking, marking and recording tests or exams',
				'A desktop app for keeping records of the residents of rooms for large housings like hotels'
			]; 
let langs = [
				'html, css, javascript, nodejs, expressjs, mysql',
				'html, css, javascript, reactjs, nodejs, expressjs, mysql',
				'html, css, javascript, reactjs, python, pandas',
				'html, css, javascript',
				'html, css, javascript',
				'html, css, javascript',
				'html, css, javascript',
				'html, css, javascript, electronjs',
				'html, css, javascript, electronjs, reactjs'
			];
let media = [
				'media7, media8, media9, media23, media24, media25, media26',
				'media27, media28, media29, media30, media31',
				'media4, media10, media11, media12, media13',
				'',
				'media18, media19, media20',
				'media34, media35, media36, media37, media38, media39, media40',
				'',
				'',
				'media15, media16, media6'
			]
let colors =[
				'rgba(150, 0, 150, 0.8)', 'red', 'rgb(49, 59, 106)',
				'rgb(0,180,0)', 'rgb(56, 70, 186)', 'rgb(100, 0, 130)', 
				'rgb(181, 101, 29)', 'blue', 'rgb(100, 0, 150)'	
			]

window.addEventListener('load', (e)=>{
	console.log(window.innerWidth);
	loadPF(0);
	//Set all things necessary for the specific device width
	if(window.innerWidth>=1024){//Laptop
		setHomeMediaPos('laptop');//Set the home media

		//Mouseover effect for the hprmedia when on a laptop
		[...document.getElementsByClassName('hprmedia')].forEach(el => {
			el.addEventListener('mouseover', (event)=>{
				event.target.style.transitionDuration = "0.5s";
			});
		});

		document.getElementById('pagecont').addEventListener('scroll', (e)=>{
			if(e.target.scrollTop>=0 && e.target.scrollTop<(window.innerHeight*0.9) && curPage!='home'){
				curPage = 'home';
				resetTabDiv();
				document.getElementsByClassName('tabname')[0].style.color = 'rgb(200, 13, 60)';
				document.getElementsByClassName('tabdiv')[0].style.backgroundColor = 'rgb(200, 13, 60)'; 
				document.getElementsByClassName('tabdiv')[0].className = 'activediv';
			}
			
			if(e.target.scrollTop>=(window.innerHeight*0.9) && e.target.scrollTop<(window.innerHeight*2*0.9) && curPage!='services'){
				curPage = 'services';
				resetTabDiv();
				document.getElementsByClassName('tabname')[1].style.color = 'rgb(106, 120, 180)';
				document.getElementsByClassName('tabdiv')[1].style.backgroundColor = 'rgb(106, 120, 180)'; 
				document.getElementsByClassName('tabdiv')[1].className = 'activediv';
			}

			//These ones bring the service row to opacity of 100%
			if(e.target.scrollTop>=(window.innerHeight*0.60) && !firstrow){
				document.getElementById('srfirst').style.left = '0px';
				document.getElementById('srfirst').style.opacity = '100%';
				firstrow = true;
			}

			if(e.target.scrollTop>=(window.innerHeight*0.94) && !secondrow){
				document.getElementById('srsecond').style.right = '0px';
				document.getElementById('srsecond').style.opacity = '100%';
				secondrow = true;
			}

			if(e.target.scrollTop>=(window.innerHeight*1.28) && !thirdrow){
				document.getElementById('srthird').style.left = '0px';
				document.getElementById('srthird').style.opacity = '100%';
				thirdrow = true;
			}
			
			if(e.target.scrollTop>=(window.innerHeight*2*0.9) && e.target.scrollTop<(window.innerHeight*3*0.9) && curPage!='portfolio'){
				curPage = 'portfolio';
				resetTabDiv();
				document.getElementsByClassName('tabname')[2].style.color = 'rgb(120, 189, 104)';
				document.getElementsByClassName('tabdiv')[2].style.backgroundColor = 'rgb(120, 189, 104)'; 
				document.getElementsByClassName('tabdiv')[2].className = 'activediv';
			}
			
			if(e.target.scrollTop>=(window.innerHeight*3*0.9) && e.target.scrollTop<=window.innerHeight*4 && curPage!='contact'){
				curPage = 'contact';
				resetTabDiv();
				document.getElementsByClassName('tabname')[3].style.color = 'rgb(240, 140, 50)';
				document.getElementsByClassName('tabdiv')[3].style.backgroundColor = 'rgb(240, 140, 50)'; 
				document.getElementsByClassName('tabdiv')[3].className = 'activediv'; 
			}
			console.log(e.target.scrollTop);
		});
	}

	if(window.innerWidth>500 && window.innerWidth<1024){//Tablet
		setHomeMediaPos('tablet');
		document.getElementById('pfgallery').scrollLeft = 395;
		document.getElementById('pagecont').addEventListener('scroll', (e)=>{
			//These ones bring the service row to opacity of 100%
			if(e.target.scrollTop>=(window.innerHeight*0.70) && !firstrow){
				document.getElementById('srfirst').style.left = '0px';
				document.getElementById('srfirst').style.opacity = '100%';
				firstrow = true;
			}

			if(e.target.scrollTop>=(window.innerHeight*1.04) && !secondrow){
				document.getElementById('srsecond').style.right = '0px';
				document.getElementById('srsecond').style.opacity = '100%';
				secondrow = true;
			}

			if(e.target.scrollTop>=(window.innerHeight*1.38) && !thirdrow){
				document.getElementById('srthird').style.left = '0px';
				document.getElementById('srthird').style.opacity = '100%';
				thirdrow = true;
			}
		});
	}

	if(window.innerWidth<=500){//Mobile
		setHomeMediaPos('mobile');
		document.getElementById('pfgallery').scrollLeft = 285;
		document.getElementById('pagecont').addEventListener('scroll', (e)=>{
			//These ones bring the service row to opacity of 100%
			if(e.target.scrollTop>=(window.innerHeight*0.65) && !firstrow){
				document.getElementById('srfirst').style.left = '0px';
				document.getElementById('srfirst').style.opacity = '100%';
				firstrow = true;
			}

			if(e.target.scrollTop>=(window.innerHeight*0.99) && !secondrow){
				document.getElementById('srsecond').style.right = '0px';
				document.getElementById('srsecond').style.opacity = '100%';
				secondrow = true;
			}

			if(e.target.scrollTop>=(window.innerHeight*1.33) && !thirdrow){
				document.getElementById('srthird').style.left = '0px';
				document.getElementById('srthird').style.opacity = '100%';
				thirdrow = true;
			}
		});
	}

	homeSkillTimer==undefined?homeSkillTimer = setInterval(homeSkillScroller, 3500):'';
	contactTextTimer==undefined?contactTextTimer = setInterval(contactTextScroller, 3500):'';


});

function left(){
	if(curpic>=0){
		if(window.innerWidth<=500){
			document.getElementById('pfgallery').scrollLeft = document.getElementById('pfgallery').scrollLeft-200;
		}
		if(window.innerWidth>500 && window.innerWidth<1024){
			document.getElementById('pfgallery').scrollLeft = document.getElementById('pfgallery').scrollLeft-300;
		}
		if(window.innerWidth>=1024){
			document.getElementById('pfgallery').scrollLeft = document.getElementById('pfgallery').scrollLeft-250;	
		}

		let el = document.getElementsByClassName('selectedpic')[0].previousElementSibling;
		document.getElementsByClassName('selectedpic')[0].className = 'pfgpic';
		el.className = 'selectedpic';
		curpic--;
		loadPF(curpic); 		
	}
}

function right(){
	if(curpic<=7){
		if(window.innerWidth<=500){
			document.getElementById('pfgallery').scrollLeft = document.getElementById('pfgallery').scrollLeft+200;
		}
		if(window.innerWidth>500 && window.innerWidth<1024){
			document.getElementById('pfgallery').scrollLeft = document.getElementById('pfgallery').scrollLeft+300;
		}
		if(window.innerWidth>=1024){
			document.getElementById('pfgallery').scrollLeft = document.getElementById('pfgallery').scrollLeft+250;	
		}
		
		let el = document.getElementsByClassName('selectedpic')[0].nextElementSibling;
		console.log(el.src);
		document.getElementsByClassName('selectedpic')[0].className = 'pfgpic';
		el.className = 'selectedpic';
		curpic++;
		loadPF(curpic);
	}
}

function loadPF(num){
	document.getElementById('pfheader').innerText = headers[num];
	document.getElementById('pfheader').style.color = colors[num];
	document.getElementById('pftext').innerText = texts[num];
	document.getElementById('pflang').innerHTML = '';
	document.getElementById('pfpics').innerHTML = '';
	//console.log(langs[num].split(', '));
	langs[num].split(', ').forEach(lang => {
		if(lang.trim()!=''){
			let img = document.createElement('img');
			let src;
			if(lang == 'pandas'){
				src = 'res/img/'+lang.trim()+'.png';
			}else{
				src = 'res/img/'+lang.trim()+'.svg';
			}
			img.src = src;
			document.getElementById('pflang').appendChild(img);
		}
	});

	media[num].split(', ').forEach(media => {
		if(media.trim()!=''){
			let pic = document.createElement('img');
			let src = 'res/proj/'+media.trim()+'.png';
			pic.src = src;
			document.getElementById('pfpics').appendChild(pic);
		}
	});
}

function resetTabDiv(){
	[...document.getElementsByClassName('activediv')].forEach(el => {
		el.className = 'tabdiv';
		el.previousElementSibling.style.color = "black";
		el.style.backgroundColor = "black";
	});
}

function setHomeMediaPos(device){
	[...document.getElementsByClassName('hprmedia')].forEach(el => {
		el.style.transitionDuration = '2s';
	});

	if(device == 'laptop'){
		document.getElementsByClassName('hprmedia')[0].style.top = "30px";
		document.getElementsByClassName('hprmedia')[1].style.top = "110px";
		document.getElementsByClassName('hprmedia')[2].style.top = "210px";
		document.getElementsByClassName('hprmedia')[3].style.top = "310px";
		document.getElementsByClassName('hprmedia')[4].style.top = "410px";

		document.getElementsByClassName('hprmedia')[0].style.left = "300px";
		document.getElementsByClassName('hprmedia')[1].style.left = "40px";
		document.getElementsByClassName('hprmedia')[2].style.left = "300px";
		document.getElementsByClassName('hprmedia')[3].style.left = "40px";
		document.getElementsByClassName('hprmedia')[4].style.left = "300px";

		[...document.getElementsByClassName('hprmedia')].forEach(el => {
			el.style.opacity = '100%';
		});
	}

	if(device == 'tablet'){
		document.getElementsByClassName('hprmedia')[0].style.top = "60px";
		document.getElementsByClassName('hprmedia')[1].style.top = "160px";
		document.getElementsByClassName('hprmedia')[2].style.top = "260px";
		document.getElementsByClassName('hprmedia')[3].style.top = "360px";
		document.getElementsByClassName('hprmedia')[4].style.top = "460px";

		document.getElementsByClassName('hprmedia')[0].style.left = "60%";
		document.getElementsByClassName('hprmedia')[1].style.left = "10%";
		document.getElementsByClassName('hprmedia')[2].style.left = "60%";
		document.getElementsByClassName('hprmedia')[3].style.left = "10%";
		document.getElementsByClassName('hprmedia')[4].style.left = "60%";

		[...document.getElementsByClassName('hprmedia')].forEach(el => {
			el.style.opacity = '100%';
		});
	}

	if(device == 'mobile'){
		document.getElementsByClassName('hprmedia')[0].style.top = "60px";
		document.getElementsByClassName('hprmedia')[1].style.top = "130px";
		document.getElementsByClassName('hprmedia')[2].style.top = "200px";
		document.getElementsByClassName('hprmedia')[3].style.top = "270px";
		document.getElementsByClassName('hprmedia')[4].style.top = "340px";

		document.getElementsByClassName('hprmedia')[0].style.left = "270px";
		document.getElementsByClassName('hprmedia')[1].style.left = "30px";
		document.getElementsByClassName('hprmedia')[2].style.left = "270px";
		document.getElementsByClassName('hprmedia')[3].style.left = "30px";
		document.getElementsByClassName('hprmedia')[4].style.left = "270px";

		[...document.getElementsByClassName('hprmedia')].forEach(el => {
			el.style.opacity = '100%';
		});
	}

}

function homeSkillScroller(){
	if(curHomeSkillIndex==2){
		homeSkillDirection="backward";
	}

	if(curHomeSkillIndex==0){
		homeSkillDirection="forward";
	}

	if(homeSkillDirection=="forward"){
		curHomeSkillIndex++;
	}else{
		curHomeSkillIndex--
	}

	if(window.innerWidth>=1024){//Laptop
		document.getElementById('pgmidskillcont').scrollTop = 39*curHomeSkillIndex;
	}

	if(window.innerWidth>500 && window.innerWidth<1024){//Tablet
		document.getElementById('pgmidskillcont').scrollTop = 49*curHomeSkillIndex;
	}

	if(window.innerWidth<=500){//Mobile
		document.getElementById('pgmidskillcont').scrollTop = 34*curHomeSkillIndex;
	}
}

function contactTextScroller(){
	if(curContactTextIndex==2){
		contactTextDirection="backward";
	}

	if(curContactTextIndex==0){
		contactTextDirection="forward";
	}

	if(homeSkillDirection=="forward"){
		curContactTextIndex++;
	}else{
		curContactTextIndex--
	}

	if(window.innerWidth>=1024){//Laptop
		document.getElementById('contacttextscroll').scrollTop = 39*curContactTextIndex;
	}

	if(window.innerWidth>500 && window.innerWidth<1024){//Tablet
		document.getElementById('contacttextscroll').scrollTop = 49*curContactTextIndex;
	}

	if(window.innerWidth<=500){//Mobile
		document.getElementById('contacttextscroll').scrollTop = 34*curContactTextIndex;
	}
}

function undockmenu(){
	document.getElementById('navtabcont').style.right = '0px';
	document.getElementById('navtabcont').style.opacity = '100%';
}

function dockmenu(){
	if(window.innerWidth<=500){
		document.getElementById('navtabcont').style.right = '-200px';
	}

	if(window.innerWidth>500 && window.innerWidth<1024){
		document.getElementById('navtabcont').style.right = '-400px';	
	}
	
	document.getElementById('navtabcont').style.opacity = '100%';
}

function scroller(num){
	if(num==1){
		document.getElementById('pagecont').scrollTop = document.getElementsByClassName('pages')[num].offsetTop-60;
	}else{
		document.getElementById('pagecont').scrollTop = document.getElementsByClassName('pages')[num].offsetTop;
	}
	dockmenu();
}

