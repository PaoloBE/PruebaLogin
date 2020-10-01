$(document).ready(function() { 
    
    $('#lgbtn').click(()=>{
        $( "#user,#pass" ).parent().removeClass( "err" )
        document.getElementById('user').setCustomValidity('')
        document.getElementById('pass').setCustomValidity('')
        if(document.getElementById('frmLog').checkValidity()){
            alert('Login Succesful')
        }else{
            if(! document.getElementById('pass').checkValidity()){ 
                $('#pass').parent().addClass("err")
                document.getElementById('pass').setCustomValidity('Enter Password')
            };
            if(! document.getElementById('user').checkValidity()) {
                $('#user').parent().addClass("err")
                document.getElementById('user').setCustomValidity('Enter Username')
            };
        }
    });
});