var pics = ["http://orig11.deviantart.net/1bd9/f/2012/309/8/7/87a42216087675287a5f51aeb51e84c4-d5k1e7d.jpg",
           "http://www.da-files.com/artnetwork/zeitgeist/animal-magic/50-img-37.jpg",
           "https://s-media-cache-ak0.pinimg.com/originals/80/7c/63/807c631061bce344b5ab46612b4590ee.jpg",
           "http://cdn.playbuzz.com/cdn/1519ac06-6784-42b1-929c-bf54553ad224/4a4afb13-a616-44fe-bb09-f85a67a5510a.jpg",
            "https://s-media-cache-ak0.pinimg.com/originals/3f/0c/07/3f0c07765a0c08de092ee9d17dd3f618.jpg",
            "https://s-media-cache-ak0.pinimg.com/736x/32/b2/2a/32b22aeec63d56fb1fd4c4f5d4309036.jpg",
            "https://s-media-cache-ak0.pinimg.com/736x/9d/37/8d/9d378d908527e5ed76103e776aca8e97.jpg",
            "https://s-media-cache-ak0.pinimg.com/736x/12/cc/64/12cc6467f 078b2ba39ff3038e2dbfdde.jpg",
            "https://s-media-cache-ak0.pinimg.com/originals/82/ff/21/82ff2194aaac9a192f9be502dcf51968.jpg",
            "https://s-media-cache-ak0.pinimg.com/originals/50/e7/85/50e785f2a70c18df1dcad0fa6b4d6a5b.jpg",
            "http://awesomwallpaper.com/img2/47A984E2F82FBEF1/red-dragon.jpg",
            "https://s-media-cache-ak0.pinimg.com/236x/42/ce/b9/42ceb9b10deb51cb2f33cd923183b702.jpg",
            "https://s-media-cache-ak0.pinimg.com/236x/93/88/ae/9388aee2653ced55d7c9c6eecce38193.jpg",
            "http://pgwebdesign.net/wp-content/uploads/2011/03/female-purple-dragon.jpg"
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