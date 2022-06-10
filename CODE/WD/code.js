
var songrun=false;
var count=1;
var mod=1;
var path=["songs\\Balle Ni Balle.mp3",
"songs\\ban ja rani.mp3",
"songs\\Banduk meri laila.mp3",
"songs\\barish.mp3",
"songs\\haareya.mp3",
"songs\\Halamithi Habibo.mp3",
"songs\\ik vari aa.mp3",
"songs\\main tera.mp3",
"songs\\mercy.mp3",
"songs\\musafir.mp3",
"songs\\o sathi.mp3",
"songs\\phir bhi.mp3",
"songs\\rabta.mp3",
"songs\\Saamna .mp3",
"songs\\soja jara.mp3",
"songs\\Tera Saath Ho.mp3",
"songs\\Tu Laut Aa.mp3"];

var sname=["Balle Ni Balle",//1
"ban Ja tu meri Rani",//2
"Banduk Meri Laila",//3
"barish",//4
"haareya",//5
"Halamithi Habibo",//6
"ik vari aa",//7
"main tera ",//8
"mercy",//9
"musafir",//10
"o sathi",//11
"phir bhi",//12
"rabta",//13
"Saamna",//14
"soja jara",//15
"Tera Saath Ho",//16
"Tu Laut Aa"//17

];

var sd=["Artist: AparShakti Khurana<br>Movie: Balle ni Balle<br>Released: 2022",//Balle Ni Balle
"Artist: Guru Randhawa<br>Movie: Tumhari Sulu<br>Released: 2017",//Ban Ja tu meri Rani
"Artists: Ash King, Jigar Saraiya<br>Featured artists: Sidharth Malhotra, Raftaar<br>Movie: A Gentleman<br>Released: 2017"//"Banduk Meri Laila"
,"Artists: Ash King, Shashaa Tirupati<br>Movie: Half Girlfriend<br>Released: 2017<br>Awards: Zee Cine Award for Song of the Year"//Barish
,"Artist: Arijit Singh<br>Movie: Meri Pyaari Bindu<br>Released: 2017"//Haareya
,"Artist: Anirudh Ravichander<br>Movie: Beast <br>Released: 2022"//Halamithi Habibo
,"Artist: Arijit Singh<br>Movie: Raabta<br>Released: 2017"//Ik vari aa
,"Artists: Arijit Singh, Neha Kakkar, Meet Bros<br>Movie: Raabta<br>Released: 2017<br>Composer(s): : Sohrabbudin (Original); Sourav Roy (Revamped).<br>Genre: Dance music"//main tera boyfriend
,"Artist: Badshah<br>Released: 2017<br>Nominations: Mirchi Music Awards for Best Song Engineer - Recording and Mixing"//mercy
,"Artist: KK<br>Movie: Shab<br>Released: 2017"//musafir
,"Artist: Arijit Singh <br>Movie: Shab<br>Released: 2017"//o saathi
,"Artist: KK<br>Movie: Shab<br>Released: 2017"//phir bhi
,"Artist: Arijit Singh<br>Movie: Shab<br>Released: 2017"//rabta
,"Artists: AKASA <br>Movie: Saamna <br>Released: 2022"//saamna
,"Artists: Madhushreei<br>Movie: Bahubali 2<br>Released: 2022"//soja jara
,"Artists: Guru Randhawa <br>Movie: Hindi Medium <br>Released: 2020"//suit suit
,"Artists: Tanishq Bagchi ,guru randhawa <br>Movie: Tera Sath ho <br>Released: 2019"//tera saath ho 
,"Artists: Yasser Desai, Prakriti kakkar <br>Album : Too Laut AA<br>Released: 2022"];//tu laut aa

var bool=[];
for(var i=0; i<sd.length; i++)
	bool[i]=false;

var icon=["images\\\\1.jpg",
"images\\\\2.jpg",
"images\\\\3.jpg",
"images\\\\4.jpg",
"images\\\\5.jpg",
"images\\\\6.jpg",
"images\\\\7.jpg",
"images\\\\8.jpg",
"images\\\\9.jpg",
"images\\\\10.jpg",
"images\\\\11.jpg",
"images\\\\12.jpg",
"images\\\\13.jpg",
"images\\\\14.jpg",
"images\\\\15.jpg",
"images\\\\16.jpg",
"images\\\\17.jpg"
];

var mood=[["1","2","3"],["4","5"],["6","7","8"],["9","10"],["11"],["12","13"],["14","15"],["16","17"]];
var mmm=["1.png","1.png","1.png","2.png","2.png","3.png","3.png","3.png","4.png","4.png","5.png","6.png","6.png","7.png","7.png","8.png","8.png"];

var songs=new Array(icon.length);
//console.log(songs);
console.log(icon);
for (var i = 0; i<icon.length; i++) {
	songs[i]=new Array(4);
	songs[i][0]=path[i];
	songs[i][1]=sd[i];
	songs[i][2]=icon[i];
	songs[i][3]=mmm[i];
	console.log(songs[i][0]);
	console.log(songs[i][1]);
	console.log(songs[i][2]);
	var ins=document.createElement("div");
	ins.id='b'+i;
	//ins.onclick=function(){
	//next(this);
  	//};
	ins.setAttribute("class", "song");
	document.body.appendChild(ins);
	document.getElementById('b'+i).innerHTML='<div id="pic" style=\'background-image: url(\"'+songs[i][2]+'\");\'>  <input type="button" id="'+"a"+i+'" class="play" > <input type="button" id="'+"c"+i+'" class="add">  </div><div id="data"><br><br>'+songs[i][1]+'</div>';
	document.getElementById('a'+i).onclick=function(){
		play(this);
	};
	document.getElementById('c'+i).onclick=function(){
		addq(this);
	};	
}
console.log(songs);




function setmod(elem){
	mod=elem.value;
	if(!songrun){
		if(mod==2)
			getTime();
		if(mod==3)
			rand_play();
	}
}

function play(elem){
	console.log(elem);
	console.log(elem.id);
	var x=elem.id;
	x = x.substring(1, x.length);
	var newX = elem.id;
	//newX = newX.substring(1, newX.length);
	//console.log("newX = " + newX);
	console.log("x = " + x);
	var z=songs[x][0];
	console.log("z = " + z);
	document.getElementById("sname").innerHTML=sname[x];
	document.getElementById("sel").src= z;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[x][3]+"')";
	songrun=true;

}

var eqc=1;
var sqc=1;

function addq(elem){
	console.log(elem.id);
	var x=elem.id.charAt(1);
	if(!songrun){
		var z=songs[x][0];
		document.getElementById("sname").innerHTML=sname[x];
		document.getElementById("sel").src= z;
		document.getElementById("main_slider").load();
		document.getElementById("main_slider").play();
		document.getElementById("emoji").style.backgroundImage="url('"+songs[x][3]+"')";
		songrun=true;		
		return;
	}
	if(bool[x]==true)
		return;
	
	bool[x]=true;
	var l=document.createElement("label");
	l.id="e"+eqc;
	l.name=x;
	l.innerHTML=sname[x]+"<br>";
	//var text=document.createTextNode(sname[x]+"<br>");
	//l.appendChild(text);
	document.getElementById("queue").appendChild(l);
	eqc=eqc+1;
}

function nextsong(){
	if(sqc==eqc){
				alert("Queue is empty.");
				return;
		}
		var elem=document.getElementById("e"+sqc);
			var xa=elem.name;
			var pa=songs[xa][0];
			bool[xa]=false;
			document.getElementById("sname").innerHTML=sname[xa];
			document.getElementById("sel").src= pa;
			document.getElementById("main_slider").load();
			document.getElementById("main_slider").play();
			document.getElementById("emoji").style.backgroundImage="url('"+songs[xa][3]+"')";
			
			songrun=true;
			document.getElementById("queue").removeChild(elem);	
			sqc=sqc+1;

}

function next_in_Q(){
			songrun=false;
			if(sqc==eqc){
				alert("Queue is empty.");
				return;
			}
			var elem=document.getElementById("e"+sqc);
			var xa=elem.name;
			var pa=songs[xa][0];
			document.getElementById("sname").innerHTML=sname[xa];
			document.getElementById("sel").src= pa;
			document.getElementById("main_slider").load();
			document.getElementById("main_slider").play();
			document.getElementById("emoji").style.backgroundImage="url('"+songs[xa][3]+"')";
			songrun=true;
			document.getElementById("queue").removeChild(elem);	
			sqc=sqc+1;
			}

function rand_play(){
	var index=Math.random()*path.length;
	index=parseInt(index);
	var pa=songs[index][0];
	document.getElementById("sname").innerHTML=sname[index];
	document.getElementById("sel").src= pa;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[index][3]+"')";
	songrun=true;

}
function moody(val){
	var index=Math.random()*mood[val].length;
	index=parseInt(index);
	var pa=songs[mood[val][index]-1][0];
	document.getElementById("sname").innerHTML=sname[mood[val][index]-1];
	document.getElementById("sel").src= pa;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[mood[val][index]-1][3]+"')";
	songrun=true;
}

async function getTime() {
                let value = await eel.getEmotion()();
                if(value=="angry")
                	moody(0);
                else if(value=="happy")
                	moody(1);
                else if(value=="sad")
                	moody(2);
				else if(value =="neutral")
					moody(3);
                else if( value == "disgust")
					moody(4);
				else if( value == "surprise")
					moody(5);
				else if (value == "contempt")
					moody(6);
				else moody(7);

            }