window.onload = function () {

  /**We get the canvas and his ctx (which is in 2D) in variables*/

  var canvas = document.getElementById('solar-canvas');
  var ctx = canvas.getContext('2d');

  if (!canvas) {
    alert("Impossible to get canvas");
    return;
  }

  if (!ctx) {
    alert("Impossible to get canvas context");
    return;
  }

  /** Call of the loadJSON() function wrote in loadJSON.js, which makes a XMLHttpRequest and get my local json file.
      Approx  whole code is in loadJSON() --> is it ok ? */

  loadJSON(function (response) {

    // We parse JSON data as an object (whole solar system)
    var solarSystemData = JSON.parse(response);

    // We get the solar system elements from the data
    var sun = solarSystemData.sun;
    var mercury = solarSystemData.mercury;
    var venus = solarSystemData.venus;
    var earth = solarSystemData.earth;
    var mars = solarSystemData.mars;
    var jupiter = solarSystemData.jupiter;
    var saturn = solarSystemData.saturn;
    var uranus = solarSystemData.uranus;
    var neptune = solarSystemData.neptune;

    var draw = function (obj) {
      ctx.beginPath();
      ctx.fillStyle = obj.color;
      ctx.arc(obj.posX, obj.posY, obj.sizePx, 0, Math.PI * 2, true);
      ctx.fill();
      ctx.closePath();
    }

    sun.posX = canvas.width / 2;
    sun.posY = canvas.height / 2;

    var angleM = 0;
    var angleV = 0;
    var angleE = 0;
    var angleMa = 0;
    var angleJ = 0;
    var angleS = 0;
    var angleU = 0;
    var angleN = 0;

    var animate = function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      draw(sun);

      angleM = angleM + mercury.revRatio;
      mercury.posX = sun.posX + (sun.sizePx / 2 + mercury.sizePx / 2 + mercury.distSunPx + 10) * Math.sin(angleM);
      mercury.posY = sun.posY + (sun.sizePx / 2 + mercury.sizePx / 2 + mercury.distSunPx + 10) * Math.cos(angleM);

      angleV = angleV + venus.revRatio;
      venus.posX = sun.posX + (sun.sizePx / 2 + venus.sizePx / 2 + venus.distSunPx + 10) * Math.sin(angleV);
      venus.posY = sun.posY + (sun.sizePx / 2 + venus.sizePx / 2 + venus.distSunPx + 10) * Math.cos(angleV);

      angleE = angleE + earth.revRatio;
      earth.posX = sun.posX + (sun.sizePx / 2 + earth.sizePx / 2 + earth.distSunPx + 10) * Math.sin(angleE);
      earth.posY = sun.posY + (sun.sizePx / 2 + earth.sizePx / 2 + earth.distSunPx + 10) * Math.cos(angleE);

      angleMa = angleMa + mars.revRatio;
      mars.posX = sun.posX + (sun.sizePx / 2 + mars.sizePx / 2 + mars.distSunPx + 10) * Math.sin(angleMa);
      mars.posY = sun.posY + (sun.sizePx / 2 + mars.sizePx / 2 + mars.distSunPx + 10) * Math.cos(angleMa);

      angleJ = angleJ + jupiter.revRatio;
      jupiter.posX = sun.posX + (sun.sizePx / 2 + jupiter.sizePx / 2 + jupiter.distSunPx + 10) * Math.sin(angleJ);
      jupiter.posY = sun.posY + (sun.sizePx / 2 + jupiter.sizePx / 2 + jupiter.distSunPx + 10) * Math.cos(angleJ);

      angleS = angleS + saturn.revRatio;
      saturn.posX = sun.posX + (sun.sizePx / 2 + saturn.sizePx / 2 + saturn.distSunPx + 10) * Math.sin(angleS);
      saturn.posY = sun.posY + (sun.sizePx / 2 + saturn.sizePx / 2 + saturn.distSunPx + 10) * Math.cos(angleS);

      angleU = angleU + uranus.revRatio;
      uranus.posX = sun.posX + (sun.sizePx / 2 + uranus.sizePx / 2 + uranus.distSunPx + 10) * Math.sin(angleU);
      uranus.posY = sun.posY + (sun.sizePx / 2 + uranus.sizePx / 2 + uranus.distSunPx + 10) * Math.cos(angleU);

      angleN = angleN + neptune.revRatio;
      neptune.posX = sun.posX + (sun.sizePx / 2 + neptune.sizePx / 2 + neptune.distSunPx + 10) * Math.sin(angleN);
      neptune.posY = sun.posY + (sun.sizePx / 2 + neptune.sizePx / 2 + neptune.distSunPx + 10) * Math.cos(angleN);

      draw(mercury);
      draw(venus);
      draw(earth);
      draw(mars);
      draw(jupiter);
      draw(saturn);
      draw(uranus);
      draw(neptune);

      window.requestAnimationFrame(animate);
    }
    window.requestAnimationFrame(animate);
  });

}