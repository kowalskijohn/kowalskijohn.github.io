$(document).ready(function() {
  $.getJSON(
    "http://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=kowalskiforged&api_key=19ad5193e262abca9105369798104d1a&limit=2&format=json&callback=?",
    function(data){
      var html = '';
      var counter = 1;
      $.each(data.recenttracks.track,function(i, item){
        if(counter === 1){
          html += 'Currently listening to: <span><a href="' + item.url + '" target="_blank">' + item.name + '</a> - ' + item.artist['#text'] + '</span>';
        }
        counter++;
      });
      $('.listening-to h5').append(html);
  });
});
