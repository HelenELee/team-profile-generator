
function fillInTemplate(templateValue){
  const template = `<html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile</title>

      <!--Add Google Fonts-->

      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet">
      

    <!--Add my stylesheet-->

      <link rel="stylesheet" href="./dist/reset.css" />
      <link rel="stylesheet" href="./dist/style.css" />
    </head>
    <body>
      <header class="header-class">
        <nav > 
          <h1>My Team</h1>
        </nav>
      </header>
      <main>
        <section class="main-container" id="main-container">              
            <!--Team Cards-->    
            ${templateValue}
            <!--end team Card-->                  
        </section>
      </main>
      
      <!-- jQuery jquery tag -->
      <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
      <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
      
      <script src="https://kit.fontawesome.com/b3cf47db47.js" crossorigin="anonymous"></script>
      
    </body>
    </html>`;
    return template;
}

module.exports = fillInTemplate;
