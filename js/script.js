













//userinterface
$(document).ready(function(){
    
   
    $(".val").click(function(){
        $(".form").toggle();
      })
      $(".form").submit(function(event){
          event.preventDefault();
        let age = parseInt($("#age").val());
        if(age > 18){
            window.location.href="register.html"
        }
        else if(age<18){
            window.location.href="voting information.html"
        }

      })
     
   
   
    
    
   
    
})