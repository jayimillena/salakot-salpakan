<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Salpakan - Salakot</title>
    <link rel="stylesheet" href="assets/style.css" type="text/css" />
    @vite('resources/css/app.css')
</head>

<body>
    <div id="gameContainer" class="flex flex-col items-center mt-6">
        <div id="gameBoard" class="board"></div>
        <div id="buttonContainer" class="flex gap-2 mt-2">
            <button id="createMatchButton" class="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
                Position Your Forces
            </button>
        </div>
    </div>

    <script src="assets/script.js" type="text/javascript"></script>
</body>
</html>
