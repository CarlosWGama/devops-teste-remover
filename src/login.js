function doLogin (email, senha) {
    const emails = ['teste@teste.com', 'admin@teste.com'];
    if (emails.includes(email) && password == '123456') 
        return true;
    return false;
}
// ================

function onSubmit() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(doLogin(email, password)) document.location.href = 'welcome.html';
    else  document.getElementById('error').style.display = "block";
}

try {
    module.exports = { doLogin };
} catch (e) {}