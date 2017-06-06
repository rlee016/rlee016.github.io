var pics = ["http://orig11.deviantart.net/1bd9/f/2012/309/8/7/87a42216087675287a5f51aeb51e84c4-d5k1e7d.jpg",
           "http://www.da-files.com/artnetwork/zeitgeist/animal-magic/50-img-37.jpg",
           "https://s-media-cache-ak0.pinimg.com/originals/80/7c/63/807c631061bce344b5ab46612b4590ee.jpg",
           "http://cdn.playbuzz.com/cdn/1519ac06-6784-42b1-929c-bf54553ad224/4a4afb13-a616-44fe-bb09-f85a67a5510a.jpg",
            "https://s-media-cache-ak0.pinimg.com/originals/3f/0c/07/3f0c07765a0c08de092ee9d17dd3f618.jpg",
            "https://s-media-cache-ak0.pinimg.com/736x/32/b2/2a/32b22aeec63d56fb1fd4c4f5d4309036.jpg",
            "https://s-media-cache-ak0.pinimg.com/736x/9d/37/8d/9d378d908527e5ed76103e776aca8e97.jpg"
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