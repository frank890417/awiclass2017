<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    @yield('meta_og')


    @if (isset($meta_og))
        <title>{{$meta_og['title']}}</title>
        <meta property="og:title" content="{{$meta_og['title']}}">
        <meta property="og:type" content="website">
        <meta property="og:url" content="{{url()->current()}}">
        <meta property="og:image" content="{{$meta_og['cover']}}">
        <meta property="og:description" content="{{$meta_og['description']}}">
    @else
        <title>Hahow 動態互動網頁程式入門</title>
    @endif


    <link rel="stylesheet" href="/fontawesome-pro-5.11.2-web/css/all.min.css">    

    <!-- Styles -->
    <link href="/css/app.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-glyphicons.css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
    <link rel="shortcut icon" type="image" href="/img/favicon.png">
  
    <!-- Scripts -->
    <script>
        window.Laravel = <?php echo json_encode([
            'csrfToken' => csrf_token(),
        ]); ?>
    </script>
<!-- 
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-52977512-16', 'auto');
      ga('send', 'pageview');

    </script> -->
    <script type="text/javascript" src="https://www.gstatic.com/firebasejs/3.5.3/firebase.js"></script>
  
    <div id="fb-root"></div>
    <script>(function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v2.8&appId=756438861174269";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));</script>

    <script>
        if (document.domain.indexOf("awiclass2017.dev")!=-1){
    document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] +
    ':35729/livereload.js?snipver=1"></' + 'script>');
        }
    </script>
</head>
<body>
    <App id="app">
    </App>
    <script>
      if (!window.data_storage){
        window.data_storage={};
      }
    </script>
    @yield('blade_pass_variables')
    

    {{-- Script BEFORE app.js --}}
    @yield('require_js')
    <script src="/js/app.js"></script>

    {{-- Script AFTER app.js --}}
    @yield('require_js_after')
    
    

</body>
</html>
