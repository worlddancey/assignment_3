document.addEventListener('DOMContentLoaded', () => {
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    
    readMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.parentElement.querySelector('.full-content');
            content.style.display = 'block';
            button.style.display = 'none';
        });
    });
});
