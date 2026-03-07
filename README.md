
_**1.**_  What is the **difference** between **getElementById**, **getElementsByClassName**, and **querySelector / querySelectorAll**?

| getElementById | getElementsByClassName | querySelector | querySelectorAll |
| --- | --- | --- | --- |
| Gets only one element by ID | Gets all the matched elements by Class Name | Gets only one element by any css selectors | Gets all the matched elements by any css selectors |
| Returns objects of the element | Returns HTML collection | Returns objects of the element | Returns NodeList |
| observable if DOM changes | observable if DOM changes | observable if DOM changes | not observable if DOM changes |

_**2.**_  How do you **create** and **insert** a **new element** into the DOM?

-   Use `document.createElement('element')` to create an element
-   Use fuctions like `appendChild(element)` or `innerHTML()` to insert the element

_**3.**_  What is **Event Bubbling**? And how does it work?

an event where it is triggered on a child element and then the same event keeps triggering on all of the parents untill reaching to the html tag

_**4.**_  What is **Event Delegation** in JavaScript? Why is it useful?

setting up the event listener to the target's initial parent with using the concept of event bubbling.

**Why Useful**

-   Set up one event instead of setting mulitple events on multiple element
-   Less hassle in code management
-   Consume less memory
-   Faster behavior


_**5.**_  What is the difference between **preventDefault()** and **stopPropagation()** methods?

`preventDefault()` prevent browser's default behavior like submitting a form or opening links

 `stopPropagation()` stops bubbling up events to the parent element