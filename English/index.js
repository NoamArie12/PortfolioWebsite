// Change language func
function changelanguage(){
    window.location.href = '/Hebrew/index.he.html';
}


//------------------------- Scall About ---------------------\\


function scrollAbout() {
    window.location.href = 'index.html?scrollToBottom=true';
}
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const scrollToBottom = urlParams.get('scrollToBottom');

    if (scrollToBottom === 'true') {
        setTimeout(() => {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        }, 100); // Add a slight delay to ensure the page is fully rendered
    }
};