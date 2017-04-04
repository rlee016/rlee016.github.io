var pics = ["http://orig11.deviantart.net/1bd9/f/2012/309/8/7/87a42216087675287a5f51aeb51e84c4-d5k1e7d.jpg",
           "http://www.da-files.com/artnetwork/zeitgeist/animal-magic/50-img-37.jpg",
           "https://s-media-cache-ak0.pinimg.com/originals/80/7c/63/807c631061bce344b5ab46612b4590ee.jpg",
           "http://cdn.playbuzz.com/cdn/1519ac06-6784-42b1-929c-bf54553ad224/4a4afb13-a616-44fe-bb09-f85a67a5510a.jpg"
           ];
var divLocation = 0;
function goLeft(){
  divLocation = divLocation - 1;
  if(divLocation > 0){
  document.getElementById("pic").src=pics[divLocation];  
  }
}
function goRight(){
  divLocation = divLocation + 1;
  
  if(divLocation < pics.length){
    document.getElementById("pic").src=pics[divLocation];
  }
}