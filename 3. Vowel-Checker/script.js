const checkBtn = document.getElementById("checkBtn");

function checkVowels() {
  let text = document.getElementById("inputText").value;
  let vowelCount = 0;

  text = text.toLowerCase();

  //*********** using traditional for loop ************//

  // for(let i = 0; i < text.length; i++){
  //     let char = text.charAt(i);
  //     if(isVowel(char)){
  //          vowelCount++;
  //     }
  // }

  //*********** using mordern for-of loop ************//

  for (let i of text) {
    if (isVowel(i)) vowelCount++;
  }

  let result = document.getElementById("result");
  text.length
    ? (result.textContent = "Total Vowels: " + vowelCount)
    : (result.textContent = "Please enter something");
}

function isVowel(char) {
  const vowels = ["a", "e", "i", "o", "u"];
  return vowels.includes(char);
}

checkBtn.addEventListener("click", checkVowels);
