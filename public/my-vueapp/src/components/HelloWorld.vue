<template>
  <div class="home">
    <body class = "ContactUS">
     
        <header class="BLK BIZ">
        </header>
        
        <main>
        <div class ="image1">
                    <h1 id ="HomePageGreeting" >Welcome to Black Biz!</h1>
                    <img src="../assets/website_background2.jpeg" alt="Wrong image name/location" width="1247" height="500" />
                    <h2 class ="hook">All black owned businesses can be found here. This is your small business advantage.</h2>
        </div>
            
        <section id="mainsect1">
            <h2 id="mission">Mission Statement</h2>
            
            <p>
                We aim to give small an medium sized minority owned businessess a platform and the ability to connect with <br />customers and potential partners the world over. We are more than just a directory,
                we are your business advantage. 
            </p>
            
            <hr />
       </section>
            
        <section id="tableSection">

            <h2>Featured Business of the Day!</h2>
            <p><strong id="BusinessAd1">Qunnections Management Group, LLC</strong> 
                <br />
                Click <a href="http://www.qmgconstruction.com/" target="_blank">here</a> to view website.
            </p>
            <p> To see our full list of businesses,  Click <a href="businesses">here</a></p>
            <hr  />
            
            </section>

    
            <div>
            
            <p>
                This is your connection to the world of black and minority owned businesses. 
            </p>

            <section id="asidesect2">
              <p>
                  To learn more, go to our <a href="aboutus">about us</a> page to get the story behind the movement. 
                  If you would like to contact, visit our <a href="contactus">contact</a> page and reach out.
              </p>
            </section>
    
             <a id = "topink" href="#">Go to Top</a>

            </div>
    
    </main>
      
    <footer class = "footer2">
        Copyright&copy; by BlkBiz inc. All rights reserved.
    </footer>

    </body>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}


ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  //color: #42b983;
  color: red;
}
</style>
