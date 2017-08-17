'use strict';
window.renderStatistics = function (ctx, names, times) {
  var fild = {
    coords: [100, 10],
    width: 420,
    height: 270,

  };

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(fild.coords[0] + 10, fild.coords[1] + 10, fild.width, fild.height);
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(fild.coords[0], fild.coords[1], fild.width, fild.height);
  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  for (var i = 0; i < names.length; i++) {
    if (names.length !== times.length) {
      times.push(i + 1000);
    }
  }

  var histogram = {
    coords: [140, 100],
    width: 40,
    height: 150,
    indent: 100,
    colorMy: 'rgba(255, 0, 0, 1)', // мой цвет
  };


  for (var i = 0; i < names.length; i++) {
    var alpha = Math.random();
    var colorThey = 'rgba(2, 14, 134,' + alpha + ')';
    if (names[i] === 'Вы') {
      ctx.fillStyle = histogram.colorMy;
    } else {
      ctx.fillStyle = colorThey;
    }


    ctx.fillRect(histogram.coords[0], histogram.coords[1], histogram.width, histogram.height + (Math.round(times[i]) / 1000));
    ctx.fillStyle = '#000000';
    ctx.fillText(Math.round(times[i]), histogram.coords[0], histogram.coords[1] - 15);
    ctx.fillStyle = '#000000';
    ctx.fillText(names[i], histogram.coords[0], histogram.coords[1] + histogram.height + (Math.round(times[i]) / 1000) + 20);
    histogram.coords[0] += histogram.indent;

  }

};
