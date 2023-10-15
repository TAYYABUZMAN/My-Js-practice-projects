<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>travel</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@700&display=swap" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css" />
    
  </head>
  <body>


  
    <img class="bg" src="bg4.jpg" alt="bg image" />
    <div class="container">
      <h1>Travel to Istanbul Turkiye
      </h1>
      <p>
        Enter your details and submit the form to confirm your participation in
        trip.
      </p>
      
      <form action="index.php" method="post">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your full name"
        />
        <input type="text" name="age" id="age" placeholder="Enter your age" />

        <input
          type="text"
          name="gender"
          id="gender"
          placeholder="Enter your gender"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
        />
        <input
          type="number"
          name="phone"
          id="phone"
          placeholder="Enter your phone"
        />
        <textarea
          name="des"
          cols="30"
          rows="10"
          id="des"
          placeholder="Enter any other information"
        ></textarea>
        <p class="thanks">
        Thanks for submitting your form .we are happy to see you for joining our
        trip.
      </p>
      
        <button class=" btn-lg btn btn-outline-primary" type="submit">Submit</button>
      </form>
    </div>
    
  </body>
</html>
