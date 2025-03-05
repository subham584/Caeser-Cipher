// Helper function for both encryption and decryption
function caesarCipher(inputText, key, isEncrypting = true) {
    let resultText = "";

    // Loop through each character of the input text
    for (let i = 0; i < inputText.length; i++) {
        const charCode = inputText.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {  // Uppercase letters
            resultText += String.fromCharCode(((charCode - 65 + (isEncrypting ? key : -key) + 26) % 26) + 65);
        }
        else if (charCode >= 97 && charCode <= 122) {  // Lowercase letters
            resultText += String.fromCharCode(((charCode - 97 + (isEncrypting ? key : -key) + 26) % 26) + 97);
        }
        else {  // Non-alphabetic characters (spaces, punctuation, etc.)
            resultText += inputText[i];
        }
    }
    return resultText;
}

// Encrypt function
function encrypt() {
    const inputText = document.getElementById("input-text").value.trim();  // Trim spaces
    let key = parseInt(document.getElementById("key").value);

    // Validate the key
    if (isNaN(key) || key < 1 || key > 25) {
        alert("Please enter a valid key between 1 and 25.");
        return;
    }

    // Encrypt the message and display it
    const encryptedText = caesarCipher(inputText, key, true);
    document.getElementById("output-text").value = encryptedText;
}

// Decrypt function
function decrypt() {
    const inputText = document.getElementById("input-text").value.trim();  // Trim spaces
    let key = parseInt(document.getElementById("key").value);

    // Validate the key
    if (isNaN(key) || key < 1 || key > 25) {
        alert("Please enter a valid key between 1 and 25.");
        return;
    }

    // Decrypt the message and display it
    const decryptedText = caesarCipher(inputText, key, false);
    document.getElementById("output-text").value = decryptedText;
}

// Reset function
function reset() {
    // Clear the input and output text areas
    document.getElementById("input-text").value = "";
    document.getElementById("output-text").value = "";

    // Reset the key to the default value (3)
    document.getElementById("key").value = 3;
}