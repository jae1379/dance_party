

var c = document.getElementById('canvas')
var vid = document.getElementById("vid");

function partyvid(message) {
    vid.play();
    document.getElementById("vid").muted = false;
    setTimeout(function(){
      vid.pause();
      vid.currentTime = 0;
    }, 11900)
}

ComfyJS.onCommand = ( user, command, message, flags, extra ) => {
    if( command === "partay" &&
        ( !rewardId || flags.broadcaster || flags.mod ) ) {
        partyvid( message );
    }
    if( flags.customReward && extra.customRewardId === rewardId ) {
        partyvid( message );
    }
};
ComfyJS.onChat = ( user, message, flags, self, extra ) => {
    if( flags.customReward && extra.customRewardId === "70a77aa8-7e97-402f-b32b-a735a5ab031e" ) {
        partyvid( message );
    }
};
ComfyJS.Init( "jae1379" );
