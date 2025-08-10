# Code Styling Test

This document tests our improved code styling that aligns with the blue theme.

## Inline Code Test

Here's some inline code: `console.log('Hello World')` and another example: `let x = 42;`

The inline code should have:
- Light blue background (`var(--primary-50)`)  
- Dark blue text (`var(--primary-700)`)
- Subtle border in blue (`var(--primary-200)`)
- Monospace font

## Code Block Test

```javascript
function greetUser(name) {
    console.log(`Hello, ${name}!`);
    return `Welcome to Software Engineering, ${name}`;
}

const userName = "Student";
const message = greetUser(userName);
```

The code blocks should have:
- Light gray background (`var(--gray-50)`)
- Dark gray text (`var(--gray-800)`)  
- Blue border (`var(--primary-200)`)
- No Mac OS buttons
- Clean, professional appearance

## Multiple Languages

```python
def calculate_factorial(n):
    if n <= 1:
        return 1
    return n * calculate_factorial(n - 1)

result = calculate_factorial(5)
print(f"Factorial of 5 is: {result}")
```

```css
.example-class {
    background: var(--primary-50);
    color: var(--primary-700);
    border: 1px solid var(--primary-200);
}
```

This styling should work consistently across all code languages and maintain readability in both light and dark modes!
