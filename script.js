document.getElementById('compareButton').addEventListener('click', function() {
    // Получаем значения из форм ввода
    const sourceData = document.getElementById('sourceDataInput').value.trim().split(',').map(item => item.trim());
    const compareData = document.getElementById('compareDataInput').value.trim().split(',').map(item => item.trim());

    // Выполняем сравнение массивов
    const result = sourceData.filter(item => compareData.includes(item));

    // Сортируем результат в алфавитном порядке
    result.sort();

    // Отображаем результат в текстовом поле
    document.getElementById('resultTextarea').value = result.join(', ');
});
