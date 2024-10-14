// التأكد من أن المستخدم مسجل دخول
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // المستخدم مسجل دخول
        displayGoals(user.uid);
    } else {
        // المستخدم غير مسجل دخول
        window.location.href = 'login.html'; // الانتقال إلى صفحة تسجيل الدخول
    }
});

// دالة لإضافة هدف
document.getElementById('add-goal').addEventListener('click', function() {
    const goalInput = document.getElementById('goal-input');
    const goal = goalInput.value.trim();

    if (goal) {
        const userId = firebase.auth().currentUser.uid;
        const goalsRef = firebase.database().ref('users/' + userId + '/goals');
        goalsRef.push(goal); // إضافة الهدف إلى قاعدة البيانات
        goalInput.value = ''; // مسح حقل الإدخال
        displayGoals(userId); // تحديث عرض الأهداف
    } else {
        alert('يرجى إدخال هدف صالح.');
    }
});

// دالة لعرض الأهداف
function displayGoals(userId) {
    const goalsRef = firebase.database().ref('users/' + userId + '/goals');
    goalsRef.on('value', (snapshot) => {
        const goalListElement = document.getElementById('goal-list');
        goalListElement.innerHTML = ''; // مسح القائمة الحالية

        snapshot.forEach((childSnapshot) => {
            const li = document.createElement('li');
            li.textContent = childSnapshot.val();

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'حذف';
            deleteButton.addEventListener('click', function() {
                deleteGoal(childSnapshot.key); // حذف الهدف
            });

            li.appendChild(deleteButton);
            goalListElement.appendChild(li);
        });
    });
}

// دالة لحذف الهدف
function deleteGoal(goalId) {
    const userId = firebase.auth().currentUser.uid;
    const goalRef = firebase.database().ref('users/' + userId + '/goals/' + goalId);
    goalRef.remove(); // حذف الهدف من قاعدة البيانات
}

// دالة لتسجيل الخروج
document.getElementById('logout-button').addEventListener('click', function() {
    firebase.auth().signOut().then(() => {
        window.location.href = 'login.html'; // الانتقال إلى صفحة تسجيل الدخول
    });
});