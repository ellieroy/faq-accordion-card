document.querySelectorAll('.accordian-question').forEach(item => {
    item.addEventListener('click', event => {
        let accCollapse = item.nextElementSibling;

        // Open accordian item
        if(!item.classList.contains('open')){
            // Get height of .accordian-collapse 
            accCollapse.style.display = 'block'; 
            let accHeight = accCollapse.clientHeight;

            // Opening transition
            setTimeout(() => {
                accCollapse.style.height = accHeight + 'px';
                accCollapse.style.display = '';
            }, 1);

            // Remove "collapse", add "collapsing" class to .accordian-collapse (sibling)            
            accCollapse.classList = 'accordian-collapse collapsing';
            
            // After 300ms, remove "collapsing" class and add "collapse open" class
            setTimeout(() => {
                accCollapse.classList = 'accordian-collapse collapse open';
            }, 300);
        }

        // Close accordian item 
        else {
            // Remove "collapse open", add "collapsing" class to .accordian-collapse (sibling)
            accCollapse.classList = 'accordian-collapse collapsing';

            setTimeout(() => {
                accCollapse.style.height = '0px';
            }, 1);

            // After 300ms, remove "collapsing" class and add "collapse" class
            setTimeout(() => {
                accCollapse.classList = 'accordian-collapse collapse';
                accCollapse.style.height = '';
            }, 300);
        }
    
        item.classList.toggle('open');
    });
});
