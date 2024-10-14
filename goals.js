// دالة لعرض الأهداف
function displayGoals() {
    const goalList = JSON.parse(localStorage.getItem('goals')) || [];
    const goalListElement = document.getElementById('goal-list');
    goalListElement.innerHTML = ''; // مسح القائمة الحالية

    if (goalList.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'لا توجد أهداف مسجلة بعد.';
        goalListElement.appendChild(li);
    } else {
        goalList.forEach((goal, index) => {
            const li = document.createElement('li');
            li.textContent = goal;

            // إضافة زر الحذف
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'حذف';
            deleteButton.addEventListener('click', function() {
                deleteGoal(index);
            });

            li.appendChild(deleteButton);
            goalListElement.appendChild(li);
        });
    }
}

// دالة لحذف الهدف
function deleteGoal(index) {
    const goalList = JSON.parse(localStorage.getItem('goals')) || [];
    goalList.splice(index, 1); // حذف الهدف بناءً على الفهرس
    localStorage.setItem('goals', JSON.stringify(goalList)); // حفظ الأهداف المحدثة
    displayGoals(); // تحديث عرض الأهداف
}

// دالة للعودة إلى الصفحة الرئيسية
document.getElementById('back-button').addEventListener('click', function() {
    window.location.href = 'index.html'; // العودة إلى الصفحة الرئيسية
});

// عرض الأهداف عند تحميل الصفحة
displayGoals();