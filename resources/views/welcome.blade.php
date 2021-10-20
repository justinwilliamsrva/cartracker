<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>passport</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

    <!-- Styles -->
    <style>
        /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
        root {
	--primary-color: #3a4052;
}

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

body {
	font-family: 'Open Sans', sans-serif;
	line-height: 1.5;
	overflow: hidden;
}

a {
	text-decoration: none;
	color: var(--primary-color);
}

h1 {
	font-weight: 300;
	font-size: 60px;
	line-height: 1.2;
	margin-bottom: 15px;
}
.showcase {
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	color: #fff;
	/* padding: 0 20px; */
    overflow: hidden;
}
        
.video-container {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	background: url('/assets/cartracker.png') no-repeat center
		center/cover;
		z-index: 5;
}
.content {
	z-index: 10;
}

.video-container video {
	max-width: 100%;
	min-height: 100%;
  position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	object-fit: cover;
}
.video-container:after {
	content: '';
	z-index: 7;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.2);
	position: absolute;
}

.btn {
	display: inline-block;
	padding: 10px 30px;
	background: var(--primary-color);
	color: #fff;
	border-radius: 5px;
	border: solid #fff 1px;
	margin-top: 25px;
	opacity: 0.7;
}

.btn:hover {
	transform: scale(0.98);
}

#home-nav{
position: absolute;
top:0;
right: 0;
padding: 10px 20px;

}
.ml-4{margin-left: 10px;}
    </style>

    <style>
        body {
            font-family: 'Nunito', sans-serif;
        }
    </style>
</head>

<body>
    <!-- <div class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0"> -->
      
<section class="showcase">
<!-- @if (Route::has('login'))
        <div id="home-nav"class="content fixed top-0 right-0 px-6 py-4 sm:block">
            @auth
            <a href="{{ url('/dashboard') }}" class="text-lg text-white underline">Dashboard</a>
            @else
            <a href="{{ route('login') }}" class="text-lg text-white underline">Log in</a>

            @if (Route::has('register'))
            <a href="{{ route('register') }}" class="ml-4 text-lg text-white  underline">Register</a>
            @endif
            @endauth
        
        </div>
        @endif -->

    <div class="video-container">
        <video src="/assets/carvideo.mp4" autoplay muted loop></video>
    </div>
    <div class="content"><h1>passport</h1><h3>A Practical Car Maintenance Tracker</h3><a href="/dashboard" class="btn">Enter</a></div>
</section>
<!-- <section id="about"><h1>ABout</h1></section> -->

    <!-- </div> -->
</body>

</html>