function analyzeSentence(sentence) {
    //Initialize the 3 counter Variables: "sentenceLength" to keep track of total number of characters in the sentence,  "wordCount" to count the number of words, and "vowelCount" this is to keep count of the number of vowels in the sentence
    // wordCount will start at 1 since it counts words as spaces btn them 
    let sentenceLength = 0;
    let wordCount = 1;
    let vowelCount = 0;

    //defining the vowels using const because vowels always remain the same
    const vowels = "aeiouAEIOU";

        // process characters until the '.' is encoutered
if (char=== '.') {
    charCount++; 
    break;
}

// increment total character length
charCount++;

// increment the word count when a space is encountered
if (char === '') {
    wordCount++;
}

     }

// We also define the words by Spliting the sentence into words using spaces as separators.
    const words = sentence.split(' ');

    //Now we run an iteration through each character in the sentence using the for Loop; for (let i = 0; i < length; i++)
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence.charAt(i);
        // increment the sentence length for each character
        sentenceLength++;

        // Run some checks to see if the character is a letter (not a space or punctuation)
        if (char.match(/[a-zA-Z]/)) {
            // check if the character is a vowel 
            if (vowels.includes(char)) {
    vowelCount++;
            }
        }
    }

    // Count the number of words
    wordCount = words.length;

    //now output the calculated Results 
    console.log("sentence Length:", sentenceLength);
    console.log("Number of Words:", wordCount);
    console.log("Number of Vowels:", vowelCount);


// Example:
const yourSentence = "Walyn is a software development student.";
analyzeSentence(yourSentence);
