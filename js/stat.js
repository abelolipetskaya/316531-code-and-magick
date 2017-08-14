
window.renderStatistics = function(ctx, names, times) {
  console.log('Hello, world!');
  var names = ['Вы', 'Катя', 'Игорь', 'Кекс'];
  var times = [];

  var fild = {
    coords: [100, 10],
    width: 420,
    height: 270,

  };

  ctx.fillStyle='rgba(0, 0, 0, 0.7)';
  ctx.fillRect (fild.coords[0] + 10, fild.coords[1] + 10, fild.width, fild.height);
  ctx.fillStyle="#FFFFFF";
  ctx.fillRect (fild.coords[0], fild.coords[1], fild.width, fild.height);
  ctx.fillStyle="#000000";
  ctx.font='16px PT Mono';
  ctx.fillText ('Ура вы победили!', 120, 40);
  ctx.fillText ('Список результатов:', 120, 60);

  for(var i = 0 ; i < names.length; i ++) {
    if (names.length !== times.length) {
        times.push(i + 1000);
    }
  }

  console.log(times);

  var histogram = {
    coords: [140, 90],
    width: 40,
    height: 150,
    indent: 100,
    color_my: 'rgba(255, 0, 0, 1)', //мой цвет
    color_they: 'rgba(23, 44, 251, 1)', //цвет других игроков
  }

  for(var i = 0 ; i < names.length ; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = histogram.color_my;
    } else {
      ctx.fillStyle = histogram.color_they;
    }

    ctx.fillRect (histogram.coords[0], histogram.coords[1], histogram.width, histogram.height + (times[i] / 100));
    ctx.fillText (times[i], histogram.coords[0], histogram.coords[1] - 15);
    ctx.fillText (names[i], histogram.coords[0], histogram.coords[1] + histogram.height + (times[i] / 100) + 20);
    histogram.coords[0] += histogram.indent;

  }

};








