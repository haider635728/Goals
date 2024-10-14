document.getElementById('register-button').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // تسجيل ناجح
            alert('تم إنشاء الحساب بنجاح!');
            window.location.href = 'login.html'; // الانتقال إلى صفحة تسجيل الدخول
        })
        .catch((error) => {
            alert(error.message);
        });
});