// Auto-style "To-Do List" text throughout the site
document.addEventListener('DOMContentLoaded', function() {
    // Function to wrap "To-Do List" text with styled span
    function styleTodoText() {
        // Get all text nodes in the document
        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );

        const textNodes = [];
        let node;
        
        // Collect all text nodes
        while (node = walker.nextNode()) {
            textNodes.push(node);
        }

        // Process each text node
        textNodes.forEach(textNode => {
            const text = textNode.textContent;
            if (text.includes('To-Do List')) {
                // Create a span element with our custom class
                const span = document.createElement('span');
                span.className = 'todo-styled';
                
                // Replace the text node with formatted content
                const newHTML = text.replace(/To-Do List/g, '<span class="todo-styled">To-Do List</span>');
                
                // Create a temporary div to parse the HTML
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = newHTML;
                
                // Replace the text node with the new content
                const parent = textNode.parentNode;
                while (tempDiv.firstChild) {
                    parent.insertBefore(tempDiv.firstChild, textNode);
                }
                parent.removeChild(textNode);
            }
        });
    }

    // Run the styling function
    styleTodoText();
    
    // Also run after any dynamic content loads (optional)
    setTimeout(styleTodoText, 1000);
});
