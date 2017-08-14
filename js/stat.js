window.renderStatistics = function(ctx, names, times) {
  ctx.fillStyle='rgba(0, 0, 0, 0.7)';
  ctx.fillRect (110, 20, 420, 270);
  ctx.fillStyle="#FFFFFF";
  ctx.fillRect (100, 10, 420, 270);
  ctx.fillStyle="#000000";
  ctx.font='16px PT Mono';
  ctx.fillText ('Ура вы победили!', 120, 40);
  ctx.fillText ('Список результатов:', 120, 60);

  var names = ['Вы', 'Катя', 'Игорь', 'Кекс'];
  var times;
  names.length = times.length;

  var max = -1;
  var maxIndex = -1;
  for(var i = 0 ; i < times.length; i ++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }

  var histigramHeight = 150;
  var step = histogramHeight / (max - 0);

  var barWidth = 40;
  var indent = 50;

  ctx.fillStyle='rgba(255, 0, 0, 1)';

};






