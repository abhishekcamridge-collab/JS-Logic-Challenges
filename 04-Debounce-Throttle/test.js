const { debounce, throttle } = require('./challenge');

console.log("=== Testing Rate Limiters ===");

// Test Debounce
let debounceCount = 0;
const processSearch = debounce(() => { debounceCount++; }, 200);

processSearch();
processSearch();
processSearch(); // Sirf yeh last call execute honi chahiye 200ms baad

setTimeout(() => {
    console.log(debounceCount === 1 ? "✅ Debounce Passed" : "❌ Debounce Failed");
}, 300);

// Test Throttle
let throttleCount = 0;
const handleScroll = throttle(() => { throttleCount++; }, 200);

handleScroll(); // Yeh turant execute hogi
handleScroll(); // Ignored
handleScroll(); // Ignored

setTimeout(() => {
    console.log(throttleCount === 1 ? "✅ Throttle Passed" : "❌ Throttle Failed");
}, 300);
