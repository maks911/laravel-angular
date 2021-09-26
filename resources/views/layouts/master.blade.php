<html>
<head>
    <title>App Name - @yield('title')</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="stylesheet" type="text/css" href="/css/app.css">
    <!--[if lt IE 9]>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv-printshiv.min.js" nonce="_CSP_NONCE_"></script>
    <![endif]-->
    <link nonce="_CSP_NONCE_" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap" />

</head>
<body>
    <div class="container">
        <my-app>Загрузка...</my-app>
        @yield('content')
    </div>
</body>
<script nonce="_CSP_NONCE_" defer="defer" src="/js/polyfills.js"></script>
<script nonce="_CSP_NONCE_" defer="defer" src="/js/app.js"></script>
</html>
