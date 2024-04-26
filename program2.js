
module.exports = { longestSubstring };
function longestSubstring(s) {


    // Implementation of longestSubstring function
    let n = s.length;
    if (n === 0) return 0;

    let maxLength = 0;
    let left = 0;
    let seen = new Set();

    for (let right = 0; right < n; right++) {
        // If the character at 'right' is already in the set,
        // move 'left' pointer until the character is removed from the set
        while (seen.has(s[right])) {
            seen.delete(s[left]);
            left++;
        }

        // Add the character at 'right' to the set
        seen.add(s[right]);

        // Update max length
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

module.exports = { longestSubstring };
