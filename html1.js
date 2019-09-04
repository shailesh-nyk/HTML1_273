var start = () => {
     let user = localStorage.getItem('user');
     let pass = localStorage.getItem('password');
     if(user) document.getElementById('email').value = user; 
     if(pass) document.getElementById('pass').value = pass;
     goToLoginPage(); 
}

var login = () => {
     if(confirm('Do you want us to save these credentials?')) {
          localStorage.setItem('user', document.getElementById('email').value); 
          localStorage.setItem('password', document.getElementById('pass').value); 
     }
     goToSecondPage();
}

var logout = () => {
    if(confirm('Forget credentials?')) {
         localStorage.removeItem('user'); 
         localStorage.removeItem('password');
         clearLogin(); 
    }
    goToLoginPage();
}
var goToSecondPage = () => {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('second-screen').style.display = 'flex';
}
var goToLoginPage = () => {
    document.getElementById('login-screen').style.display = 'flex';
    document.getElementById('second-screen').style.display = 'none';
}
var clearLogin = () => {
    let ele = document.getElementsByTagName('input');
    for(let x of ele) {
        x.value = '';
    }
}
