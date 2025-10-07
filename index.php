<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Find the Magic LCM!</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Find the Magic LCM!</h1>
        <input type="text" id="playerName" placeholder="Enter your name">
        <button id="startBtn">Start Game</button>

        <div id="gameArea" style="display:none;">
            <canvas id="canvas" width="500" height="200"></canvas>
            <p id="question"></p>
            <div id="options"></div>
            <button id="hintBtn">Show Hint</button>
            <p id="hint"></p>
            <p id="score"></p>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>