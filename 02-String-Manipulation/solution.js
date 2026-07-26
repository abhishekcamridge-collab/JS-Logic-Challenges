// Challenge 2: User Voice Note Text Formatting Logic

function formatVoiceNote(rawText) {
    // Step 1: Aage aur piche ke faltu extra spaces hataye
    let cleanText = rawText.trim();
    
    // Step 2: Pehle letter ko Uppercase kiya aur baaki string (.slice) se jod diya
    return cleanText.charAt(0).toUpperCase() + cleanText.slice(1);
}

// Code Testing
const speech1 = "   javascript is awesome   ";
const speech2 = "   html is structure   ";

console.log("Result 1:", formatVoiceNote(speech1)); // Output: "Javascript is awesome"
console.log("Result 2:", formatVoiceNote(speech2)); // Output: "Html is structure"
