export default function isFontFamilyAvailable(fontFamily) {
    var testElement = document.createElement("span");
    testElement.style.fontFamily = fontFamily;
    testElement.innerText = "Sample Text";
    document.body.appendChild(testElement);

    var computedFontFamily = window.getComputedStyle(testElement).fontFamily;
    document.body.removeChild(testElement);

    return computedFontFamily === fontFamily;
}

// Usage example
if (isFontFamilyAvailable("Arial")) {
    console.log("Arial available.");
} else {
    console.log("Arial not available.");
}