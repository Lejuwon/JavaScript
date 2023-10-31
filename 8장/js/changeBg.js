window.onload = function() {
    const bgCount = 5;
    let randNum = Math.floor(Math.random() * bgCount + 1);
    document.body.style.backgroundImage = `url(Images/bg-${randNum}.jpg)`;
}