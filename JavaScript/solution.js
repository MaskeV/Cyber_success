// Solution class containing the logic
class Solution {
    // Function to print characters that occur more than once
    printDuplicates(str) {
        // Array to store frequency of 26 lowercase letters
        const freq = new Array(26).fill(0);

        // Loop through the string and count character frequency
        for (let i = 0; i < str.length; i++) {
            freq[str.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        }

        // Print characters that appear more than once
        for (let i = 0; i < 26; i++) {
            if (freq[i] > 1) {
                console.log(String.fromCharCode(i + 'a'.charCodeAt(0)) + " - " + freq[i]);
            }
        }
    }
}

// Driver code
const str = "sinstriiintng";

// Create object of Solution class
const sol = new Solution();

// Call the function to print duplicates
sol.printDuplicates(str);
