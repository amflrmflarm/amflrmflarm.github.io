let bar_set; bar_set2;

var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  var player;
  function onYouTubePlayerAPIReady() {
    player = new YT.Player('dudetube', {
      height: '197',
      width: '350',
      videoId: 'mjlusi_h_XA',
      playerVars: {controls: 0, rel:0},
      events: {
      'onReady': onPlayerReady,
      }
    });
  }
function onPlayerReady(event) {
  event.target.setVolume(100);
  event.target.playVideo();
  
  const bar1 = document.getElementsByClassName("videobar")[0];
  bar1.addEventListener("mousedown", bar_set2);
  bar_set = setInterval(bar_set1, 500);
  
  const bar2 = document.getElementsByClassName("has-box-indicator")[0];
  bar_set2 = setInterval(bar_set4, 200);
  
  const btn1 = document.getElementsByClassName("firstone")[0];
  btn1.addEventListener("change", btn_set1);
  	
  const btn2 = document.getElementsByClassName("secondone")[0];
  btn2.addEventListener("change", btn_set2);
	
  const btn3 = document.getElementsByClassName("thirdone")[0];
  btn3.addEventListener("click", btn_set3);
}

function btn_set1() {
	if(this.checked){
	player.playVideo();
    }
    const btn2 = document.getElementsByClassName("secondone")[0];
    if(btn2.checked){
    	btn2.checked = false;
    }
}

function btn_set2() {
	if(this.checked){
	player.pauseVideo();
    }
    const btn1 = document.getElementsByClassName("firstone")[0];
    if(btn1.checked){
    	btn1.checked = false;
    }
}

function btn_set3() {
	player.pauseVideo();
	const btn1 = document.getElementsByClassName("firstone")[0];
    if(btn1.checked){
    	btn1.checked = false;
    }
    const btn2 = document.getElementsByClassName("secondone")[0];
    btn2.checked = true;
    player.seekTo(0, true);
    const bar1 = document.getElementsByClassName("videobar")[0];
    bar1.value = 0;
}

function bar_set1() {
  const bar1 = document.getElementsByClassName("videobar")[0];
  const current = player.playerInfo.currentTime;
  const full = player.getDuration();
  bar1.value = Math.floor(current/full*100);
}

function bar_set2(){
	const bar1 = document.getElementsByClassName("videobar")[0];
	bar1.addEventListener('mouseup', bar_set3);
	player.pauseVideo();
    window.clearInterval(bar_set);
}

function bar_set3(){
    const bar1 = document.getElementsByClassName("videobar")[0];
    const full = player.getDuration();
    player.seekTo(Math.floor(bar1.value/100*full), true);
    const btn1 = document.getElementsByClassName("firstone")[0];
    if(btn1.checked){
    player.playVideo();
    }
    bar1.removeEventListener('mouseup', bar_set3);
    bar_set = setInterval(bar_set1, 500);
}

function bar_set4(){
	const bar2 = document.getElementsByClassName("has-box-indicator")[0];
    player.setVolume(bar2.value);
}