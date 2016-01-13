$(document).ready(function(){
  console.log("hi")
  var username = 'crescentia'
  var team = 'vgbootcamp';
  var api_key = 'NMPRzBYZ4LMbyylIoFmxnb2o0l2rMo6OoH6tMSKx';
  $.ajax({
    type: "GET",
    dataType: "json",
    crossDomain: true,
    headers: {
      'Access-Control-Allow-Origin' : '*'
    },
    url: "https://" + username + ":" + api_key + "@api.challonge.com/v1/tournaments.json?subdomain=" + team
  }).then(function(res){
    console.log(res)
    // var smash = res.map(function(tournament){
    //   tournament.game_name == "Super Smash Bros. Melee"
    // })
    // console.log(smash)
  })
})
