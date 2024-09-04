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
            <img src="./Photos/Project1/COVER.jpg">
        </div>
        <div class="interior-text">
            <h2>APARTAMENT A.B.</h2>
            <p>In proiectul nostru de amenajare al acestui apartament modern si minimalist, am abordat cu atentie paleta
                de culori si am optat pentru o combinatie indrazneata de griuri, verde si negru, pentru a sublinia
                simplitatea si eleganta designului. <br><br>

                Griurile, in diferite nuante si texturi, sunt utilizate pentru a crea un cadru neutru si rafinat, care
                sa puna in valoare elementele esentiale ale spatiului. Verdele este introdus pentru a aduce o nota de
                prospetime si naturalete in acest context minimalist, fiind integrat subtil in accentele si detaliile
                precum plantele sau piesele de mobilier. <br><br>

                Negrul este folosit strategic pentru a accentua liniile si formele moderne ale mobilierului si
                obiectelor, creand un contrast puternic si definind contururile spatiului. Aceasta paleta de culori
                este completata cu materiale si finisaje de calitate superioara, care adauga o nota de lux discreta
                si durabila in intregul design. <br><br>

                Prin aceasta abordare echilibrata si atenta la detalii, am reușit sa cream un interior modern si
                minimalist, care imbina functionalitatea cu estetica într-un mod armonios si rafinat. Este un spatiu
                care emana echilibru, liniste si simplitate, oferind un cadru perfect pentru un stil de viata
                contemporan si confortabil.
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

            $sql = "SELECT Img_Dir FROM Project1";
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
            <img src="./Photos/Project1/COVER.jpg">
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