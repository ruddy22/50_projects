const panels = document.querySelectorAll('.panel');

const addActiveClass = (panel) => {
    panel.classList.add('active');
};

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClass();
        addActiveClass(panel);
    });
});

const removeActiveClass = () => {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
};