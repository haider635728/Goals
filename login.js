document.getElementById('login-button').addEventListener('click', function() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // تسجيل الدخول ناجح
            window.location.href = 'dashboard.html'; // الانتقال إلى لوحة التحكم
        })
        .catch((error) => {
            alert(error.message);
        });
});