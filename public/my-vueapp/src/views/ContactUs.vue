<template>
    <div class="contact">
    <body class = "ContactUS"> 
    <form action="">
        <p><label for="fname">First Name</label>
            <br  />
            <input type="text" id="fname" name="firstname" placeholder="Enter first name..." maxlength="20" required autofocus></p>
        
        <p><label for="lname">Last Name</label>
            <br>
            <input type="text" id="lname" name="lastname" placeholder="Enter last name..." maxlength="20" required></p>
        <p><label for="email">Email</label>
            
            <br  />
            <input type="email" id="email" name="emailAddress" placeholder="Enter email address..." maxlength="40" required></p>
        <p><label for="subject">Message (500 character limit)</label>
            
            <br  />
            <textarea id="subject" name="subject" placeholder="Message here.." maxlength="500" required style="height:170px"></textarea></p>
                    <input type="submit" value="Submit">
                </form>


            <br  />
        
                <p>123 BlackBusiness St Bronx, NY 10468</p>
                <p>Blackbusinesses@aol.com</p>
                <p>BlackBu1snesses@hotmail.com</p>
                <p>Telephone Number: 555-123-2344</p>
                <p>Fax: 1-555-Fax-Buis</p>
                
               <div class ="black1">
                    <img src="../assets/black1.jpeg" alt="Wrong image name/location" width="30%" height="30%" />
        </div>
           
            <footer class = "footer2">
                Copyright&copy; by BlkBiz inc. All rights reserved.
            </footer>
        </body>
    </div>
</template>


  <style>
    * {
      box-sizing: border-box;
    }

    input[type=text], input[type=email], select, textarea {
      padding: 12px;
      border: 1px solid #ccc;
      margin-top: 6px;
      margin-bottom: 16px;
      resize: vertical;
    }

    input[type=text] {
      width: 30%;
    }

    input[type=email] {
      width: 30%;
    }

    select, textarea {
    width: 30%;
    }
    input[type=submit] {
    background-color: red;
    color: white;
    width: 10%;
    height: 10%;

    padding: 12px 20px;
    border: none;
    cursor: pointer;
    }

    input[type=submit]:active {
    background-color: #45a049;
    }

    .container {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 10px;
    }

    .column {
    float: left;
    width: 50%;
    margin-top: 6px;
    padding: 20px;
    }

    .row:after {
    content: "";
    display: table;
    clear: both;
    }

    @media screen and (max-width: 600px) {
    .column, input[type=submit] {
    width: 100%;
    margin-top: 0;
    }
    }


</style>