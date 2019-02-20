console.log('It Works');

$(document).ready(function (){
    $('#submit').click(function (event){
        console.log('Clicked button submit')
        
        var name = $('#name').val();
        var email = $('#mail').val();
        var subject = $('#subject').val();
        var message = $('#message').val();
        
        var statusElm = $('.status');
        var statusName = $('.status-name');
        statusElm.empty();
        statusName.empty();
        
         if(email.length > 5 && email.includes('@') && email.includes('.')){
            statusElm.append('<div>Email is valid </div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Email is not valid</div>')
            
        }
        
        if(subject.length > 2 ){
            statusElm.append('<div>Subject is valid </div>')
        }else {
            event.preventDefault()
            statusElm.append('<div>Subject is not valid </div>')
        }
        
        if(message.length >= 10){
            statusElm.append('<div>Message is valid </div>')
        }else{
            event.preventDefault()
            statusElm.append('<div>Message is not valid </div>')
        }
        
        if(name.length > 2){
            statusName.append('<div>Name is valid </div>')
        }else{
            event.preventDefault()
            statusName.append('<div>Name is not valid </div>')
        }

        
        
    })
})