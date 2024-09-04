<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ARTIS DESIGN | Creative Living</title>
  <meta name="title" content="ARTIS DESIGN">
  <meta name="description" content="Locul unde creativitatea si profesionalismul se intalnesc">
  <meta name="keywords" content="design, interior, arad">
  <meta http-equiv="Permissions-Policy" content="interest-cohort=()" />

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;700&display=swap" rel="stylesheet">
  <link href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
    crossorigin="anonymous">

  <link rel="stylesheet" href="style.css">

  <link rel="icon" href="./Photos/Logo/favicon-16x16.png" sizes="16x16" type="image/png">
  <link rel="icon" href="./Photos/Logo/favicon-32x32.png" sizes="32x32" type="image/png">
  <link rel="icon" type="image/png" sizes="192x192" href="./Photos/Logo/android-chrome-192x192.png">
  <link rel="icon" type="image/png" sizes="512x512" href="./Photos/Logo/android-chrome-512x512.png">
  <link rel="apple-touch-icon" sizes="180x180" href="./Photos/Logo/apple-touch-icon.png">
  <link rel="shortcut icon" href="./Photos/Logo/LOGO ARTIS DESIGN V5 fundal negru.jpg" sizes="180x180" type="image/jpeg">

</head>

<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }

  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'analytics_storage': 'denied'
  });
</script>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-BPLV20QGGT"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());

  gtag('config', 'G-BPLV20QGGT');
</script>

<script>

  function allConsentGranted() {
    gtag('consent', 'update', {
      'ad_storage': 'granted',
      'ad_user_data': 'granted',
      'ad_personalization': 'granted',
      'analytics_storage': 'granted'
    });
  }
</script>

<body>

    <header>

        <div class="header-container">
            <div class="main-logo">
                <a href="index.html">
                    <img src="./Photos/Logo/LOGO ARTIS DESIGN V5.png" width="180" height="120">
                </a>
            </div>
            <nav>
                <ul class="menu-list">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="interiors.html">Interiors</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
            <div class="menu-icon" id="menu">
                <div>
                    <span class="line-1"></span>
                    <span class="line-2"></span>
                    <span class="line-3"></span>
                </div>
            </div>
        </div>
    </header>

    <div class="description-container">
        <div class="presentation-picture">
            <img src="./Photos/Project3/COVER.jpg">
        </div>
        <div class="interior-text">
            <h2>RENOVARE CASA G.P.</h2>
            <p>In dormitor, am ales sa folosim nuante pamantii, precum maro si bej, pentru a crea o atmosfera calda si
                relaxanta. Paturile si mobilierul sunt concepute intr-un stil minimalist, cu linii curate si materiale
                naturale, cum ar fi lemnul si bumbacul organic. Lumina naturala este maximizata prin folosirea
                ferestrelor mari si a materialelor translucide pentru draperii, creand o atmosfera luminoasa si
                aerisita. <br><br>

                In ceea ce privesc baile, am continuat paleta de culori pamantii, integrand elemente de piatra naturala
                si lemn pentru a adauga textura si caldura spatiului. Liniile simple si formele geometrice predominante
                in designul minimalist sunt juxtapuse cu accente organice, cum ar fi plantele de interior si accesoriile
                din fibră naturala, aducand un sentiment de echilibru si conexiune cu natura. <br><br>

                Accentele metalice, cum ar fi robinetele si prizele, sunt alese intr-o nuanta de bronz sau arama, pentru
                a completa perfect paleta de culori si pentru a adauga un aspect sofisticat si rafinat spatiului.
                <br><br>

                Prin aceasta abordare modern minimalista, dar totodata organica, care imbina perfect estetica
                contemporana cu
                caldura si confortul inspirat din natura, am reusit sa cream un mediu intim si reconfortant. Este un
                spatiu care invita la relaxare si reflectie, oferind un refugiu personal in mijlocul agitatiei vietii
                moderne.
            </p>
        </div>
    </div>

    <div class="interior-line"></div>

    <div class="grid-container">
        <h1>Imagine Gallery</h1>
        <div class="interior-container">
            <?php
            $servername = "localhost";
            $username = "artisdes";
            $password = "hAj6u6Bl10";
            $dbname = "artisdes_Photos";

            $conn = new mysqli($servername, $username, $password, $dbname);

            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }

            $sql = "SELECT Img_Dir FROM Project3";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    echo '<div class="image"><img src="' . $row["Img_Dir"] . '"></div>';
                }
            } else {
                echo "0 results";
            }
            $conn->close();
            ?>
        </div>

        <div class="popup-image">
            <span class="prev">&lt;</span>
            <span class="next">&gt;</span>
            <span class="close">&times;</span>
            <img src="./Photos/Project1/01.jpg">
        </div>
    </div>

    <!-- Transparent overlay -->
    <div class="overlay" id="overlay"></div>

    <!-- To top button -->
    <a href="#" class="to-top">
        <i class="fa-solid fa-chevron-up"></i>
    </a>

    <div id="cookies">
        <div class="container">
            <div class="subcontainer">
                <div class="cookies">
                    <p>Acest site web foloseste cookies pentru a imbunatati experienta ta de navigare. Pentru mai multe
                        informatii, <a href="privacy.html">apasati aici</a>.</p>
                    <button id="cookies-btn" onclick="allConsentGranted()">De acord</button>
                </div>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>

<footer class="footer-container">
    <div class="social-icons">
        <a href="https://www.facebook.com/artis.dsgnstudio" target="_blank" class="social-icon">
            <i class="fa-brands fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com/artisdesign_studio/" target="_blank" class="social-icon">
            <i class="fa-brands fa-instagram"></i>
        </a>
    </div>

    <!-- Privacy Policy -->
    <div class="privacy-policy">
        <a href="privacy.html">Privacy Policy</a>
    </div>
</footer>

</html>