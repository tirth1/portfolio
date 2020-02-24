const name = document.getElementById('name');
const last = document.getElementById('last');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const submitBtn = document.getElementById('submitBtn');

//to get current time
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;


const database = firebase.database();
const rootRef = database.ref('users')

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    const autoId = rootRef.push().key
    rootRef.child(autoId).set({
        dateTime: dateTime,
        first_name: name.value,
        last_name: last.value,
        email: email.value,
        subject: subject.value,
        message: message.value 

    }, function(error) {
        if(error) {
            alert('Sorry! Message not sent. Something went wrong!!')
        } else {
            alert('Your message sent successfully!')
        }
    })
    $('input[type="text"], input[type="email"],textarea').val('');
})