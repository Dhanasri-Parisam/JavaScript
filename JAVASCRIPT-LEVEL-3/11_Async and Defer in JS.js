/***********************************************************************
 🔹 defer and async in JavaScript
***********************************************************************/
/*
Both are attributes for <script> tags.
They allow loading external JavaScript files without blocking HTML parsing.
They improve performance by preventing "render-blocking" issues.
*/

/***********************************************************************
 🔹 defer
***********************************************************************/
/*
✅ Script is downloaded in parallel with HTML parsing
✅ Executes only AFTER the HTML is fully parsed
✅ Scripts maintain their order (if multiple <script defer> are used)
✅ Best for scripts that depend on DOM or on other scripts
*/

/***********************************************************************
 🔹 async
***********************************************************************/
/*
✅ Script is downloaded in parallel with HTML parsing
✅ Executes IMMEDIATELY after download finishes (may pause HTML parsing)
✅ Order is NOT guaranteed (whichever downloads first runs first)
✅ Best for independent scripts (analytics, ads, trackers)
*/

/***********************************************************************
 🔹 Quick Comparison
***********************************************************************/
/*
Normal <script>
   - Blocks HTML parsing
   - Executes immediately

<script async>
   - Downloads in parallel
   - Executes ASAP after download
   - Order not guaranteed

<script defer>
   - Downloads in parallel
   - Executes after HTML parsing
   - Maintains order
*/

/***********************************************************************
 🔹 Example HTML
***********************************************************************/
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Async vs Defer Example</title>

    <!-- Defer scripts -->
    <script src="defer1.js" defer></script>
    <script src="defer2.js" defer></script>

    <!-- Async script -->
    <script src="async.js" async></script>
</head>
<body>
    <h1>Async vs Defer in JavaScript</h1>
    <p>Open the console to see execution order.</p>
</body>
</html>
*/

/***********************************************************************
 🔹 Example JS
***********************************************************************/
// defer1.js
console.log("Defer Script 1 executed AFTER HTML parsing");

// defer2.js
console.log("Defer Script 2 executed AFTER HTML parsing (in order)");

// async.js
console.log("Async Script executed as soon as it downloaded (order not guaranteed)");

/***********************************************************************
 🔹 Key Takeaways
***********************************************************************/
/*
✅ Use defer for DOM-dependent or order-dependent scripts
✅ Use async for independent, fast-loading scripts
✅ Both prevent blocking HTML parsing, improving performance
*/

/***********************************************************************
 🔹 Common Mistakes
***********************************************************************/
/*
❌ Using async when scripts depend on DOM → may break
❌ Expecting async scripts to maintain order → they don’t
❌ Forgetting that defer scripts wait until DOM is parsed
*/
/************************************************************************/
