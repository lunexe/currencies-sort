document.getElementById('compareButton').addEventListener('click', function() {
    const sourceData = document.getElementById('sourceDataInput').value.trim().split(',').map(item => item.trim());
    const compareData = document.getElementById('compareDataInput').value.trim().split(',').map(item => item.trim());

    const result = sourceData.filter(item => compareData.includes(item));
    result.sort();

    const resultTextarea = document.getElementById('resultTextarea');
    resultTextarea.value = result.join(', ');
});

document.getElementById('copyButton').addEventListener('click', function() {
    const resultTextarea = document.getElementById('resultTextarea');
    resultTextarea.select();
    document.execCommand('copy');
    alert('Copied!');
});
