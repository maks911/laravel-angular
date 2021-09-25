<html>
<head>
    <title>App Name - @yield('title')</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="stylesheet" type="text/css" href="/css/app.css">
</head>
<body>
    <div class="container">
        <my-app>Загрузка...</my-app>
        @yield('content')
    </div>
</body>
<script defer="defer" src="/js/polyfills.js"></script>
<script defer="defer" src="/js/app.js"></script>
</html>
