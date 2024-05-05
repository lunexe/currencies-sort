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
/* Tab select
function openTab(tabName) {
    var i, tabcontent, navlinks;
    tabcontent = document.getElementsByClassName("tab");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    navlinks = document.getElementsByClassName("nav__link");
    for (i = 0; i < navlinks.length; i++) {
        navlinks[i].className = navlinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}
*/
/* Version info */
// Open
function showDialog() {
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
}

// Close
function closeDialog() {
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
}

// Click
document.getElementById('footerContainer').addEventListener('click', showDialog);
