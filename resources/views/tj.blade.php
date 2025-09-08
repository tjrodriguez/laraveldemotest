<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hello World</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f2f5;
            text-align: center;
        }
        .page {
            padding: 2rem;
        }
        .hidden {
            display: none;
        }
        h1 {
            font-size: 3rem;
            color: #1c1e21;
        }
        a {
            color: #007bff;
            text-decoration: none;
            font-size: 1.2rem;
            cursor: pointer;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>

    <!-- Main Page Content -->
    <div id="main-page" class="page">
        <h1>HELLO TJ!</h1>
        <a id="go-to-about">About</a>
    </div>

    <!-- About Page Content -->
    <div id="about-page" class="page hidden">
        <h1>About Page</h1>
        <p>This is a simple page to show how navigation can work!</p>
        <a id="go-to-main">Go Back to Main Page</a>
    </div>

    <script>
        // Get references to the pages and links
        const mainPage = document.getElementById('main-page');
        const aboutPage = document.getElementById('about-page');
        const goToAboutLink = document.getElementById('go-to-about');
        const goToMainLink = document.getElementById('go-to-main');

        // Function to show the main page and hide the about page
        function showMainPage() {
            mainPage.classList.remove('hidden');
            aboutPage.classList.add('hidden');
        }

        // Function to show the about page and hide the main page
        function showAboutPage() {
            mainPage.classList.add('hidden');
            aboutPage.classList.remove('hidden');
        }

        // Add click event listeners to the links
        goToAboutLink.addEventListener('click', showAboutPage);
        goToMainLink.addEventListener('click', showMainPage);
    </script>

</body>
</html>

