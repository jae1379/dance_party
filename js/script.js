

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
    if( flags.customReward && extra.customRewardId === "46e3bf7a-567a-4d1a-8d3d-bf088b14703d" ) {
        partyvid( message );
    }
};
ComfyJS.Init( "jae1379" );
