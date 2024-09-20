// javascript // Function to change text color based on the input in colorbox
document.getElementById('colorchange').addEventListener('click', function() {
    const color = document.getElementById('colorbox').value;
    document.getElementById('text-container').style.color = color;
});

// Function to change font size based on the range input value
document.getElementById('fontsize').addEventListener('input', function() {
    const fontSize = document.getElementById('fontsize').value;
    document.getElementById('text-container').style.fontSize = fontSize + 'px';
});

// Toggle italic style
document.getElementById('italic').addEventListener('click', function() {
    const text = document.getElementById('text-container');
    if (text.style.fontStyle === 'italic') {
        text.style.fontStyle = 'normal';
    } else {
        text.style.fontStyle = 'italic';
    }
});

// Toggle underline style
document.getElementById('underline').addEventListener('click', function() {
    const text = document.getElementById('text-container');
    if (text.style.textDecoration === 'underline') {
        text.style.textDecoration = 'none';
    } else {
        text.style.textDecoration = 'underline';
    }
});

// Toggle bold style
document.getElementById('bold').addEventListener('click', function() {
    const text = document.getElementById('text-container');
    if (text.style.fontWeight === 'bold') {
        text.style.fontWeight = 'normal';
    } else {
        text.style.fontWeight = 'bold';
    }
});

// Change the font family based on the dropdown selection
document.getElementById('list').addEventListener('change', function() {
    const selectedFont = document.getElementById('list').value;
    document.getElementById('text-container').style.fontFamily = selectedFont;
});

// Get and display the CSS properties
document.getElementById('getstyle').addEventListener('click', function() {
    const text = document.getElementById('text-container');
    const styles = window.getComputedStyle(text);
    
    const cssProperties = `color: ${styles.color}; font-size: ${styles.fontSize}; font-family: ${styles.fontFamily}; text-decoration: ${styles.textDecoration}; font-style: ${styles.fontStyle}; font-weight: ${styles.fontWeight};`;
    
    document.getElementById('css-props').textContent = cssProperties;
});
