document.getElementById('add-goal').addEventListener('click', function() {
    const goalInput = document.getElementById('goal-input');
    const goal = goalInput.value.trim(); // أخذ القيمة من حقل الإدخال

    if (goal) {
        const goalList = JSON.parse(localStorage.getItem('goals')) || [];
        goalList.push(goal); // إضافة الهدف الجديد
        localStorage.setItem('goals', JSON.stringify(goalList)); // حفظ الأهداف المحدثة
        goalInput.value = ''; // مسح حقل الإدخال
    } else {
        alert('يرجى إدخال هدف صالح.');
    }
});

// زر عرض الأهداف
document.getElementById('view-goals').addEventListener('click', function() {
    window.location.href = 'goals.html'; // الانتقال إلى صفحة الأهداف
});