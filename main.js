function preload()
{

}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw()
{
    image(video, 150, 115, 320, 240);
    tint(tint_color);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(50, 50, 70);

    fill(0, 117, 0);
    stroke(0, 117, 0);
    circle(590, 50, 70);

    fill(0, 106, 0);
    stroke(0, 106, 0);
    circle(50, 430, 70);

    fill(0, 95, 0);
    stroke(0, 95, 0);
    circle(590, 430, 70);

}

function take_snapshot()
{
    save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}