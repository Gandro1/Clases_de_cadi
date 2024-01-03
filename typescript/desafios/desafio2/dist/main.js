var canvas = document.getElementById("canvas");
if (canvas instanceof HTMLCanvasElement) {
    var ctx = canvas.getContext("2d");
    if (ctx !== null) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(200, 200);
        ctx.stroke();
    }
    else {
        console.error("El contexto 2D no está disponible.");
    }
}
