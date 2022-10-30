document.addEventListener("DOMContentLoaded", () => {
  createSquares();
  let guessedWords = [[]];
  let availableSpace = 1;
  let word = "ፓስፖርት";
  let keys = document.querySelectorAll(".selector button, .wide-button");

  function getCurrentWordArr() {
  const numberOfGuessedWords = guessedWords.length;
  return guessedWords[numberOfGuessedWords - 1];
}





function handleSubmitWord() {
  const currentWordArr = getCurrentWordArr();
    if (currentWordArr.length !== 5) {
      window.alert("Word must be 5 letters");
    }

  const currentWord = currentWordArr.join('');

  if (currentWord == word) {
    window.alert("ጎበዝ!(Congrats)")
    let solved = True;
  }
  if (guessedWords.length >= 6 && currentWordArr.length == 5) {
          window.alert(`Sorry, you have no more guesses! The word is ${word}.(passport)`);
        }

  guessedWords.push([]);

}

function updateGuessedWords(letter) {
  const currentWordArr = getCurrentWordArr();

  if (currentWordArr && currentWordArr.length < 5) {
    currentWordArr.push(letter);

    const availableSpaceEl = document.getElementById(String(availableSpace));

    availableSpace = availableSpace + 1;
    availableSpaceEl.textContent = letter;
  }
}


  for (let i = 0; i < keys.length; i++) {
    keys[i].onclick = ({ target }) => {
      const key = target.textContent;

      if (key === "Enter") {
        handleSubmitWord();
        return;
      }

      if (key === "Del") {
        handleDeleteLetter();
        return;
      }

      console.log(key);
      updateGuessedWords(key);
    }
  }
  function handleDeleteLetter() {
    const currentWordArr = getCurrentWordArr();
    if (currentWordArr.length === 5) {
      return
    }
    const removedLetter = currentWordArr.pop();

    guessedWords[guessedWords.length - 1] = currentWordArr;

    const lastLetterEl = document.getElementById(String(availableSpace - 1));

    lastLetterEl.textContent = "";
    availableSpace = availableSpace - 1;
  }

  function createSquares() {
    const gameBoard = document.getElementById("board");

    for (let index = 0; index < 30; index++) {
      let square = document.createElement("div");
      square.classList.add("square");
      square.setAttribute("id", index + 1);
      gameBoard.appendChild(square);
    }
  }
  const test = document.getElementById('ለ');
  const ሀ = document.getElementById('ሀ');
  const ፐ = document.getElementById('ፐ');
  const ፈ = document.getElementById('ፈ');
  const ፀ = document.getElementById('ፀ');
  const ጸ = document.getElementById('ጸ');
  const ሐ = document.getElementById('ሐ');
  const መ = document.getElementById('መ');
  const ሠ = document.getElementById('ሠ');
  const ረ = document.getElementById('ረ');
  const ሰ = document.getElementById('ሰ');
  const ሸ = document.getElementById('ሸ');
  const ቀ = document.getElementById('ቀ');
  const ቐ = document.getElementById('ቐ');
  const በ = document.getElementById('በ');
  const ቨ = document.getElementById('ቨ');
  const ተ = document.getElementById('ተ');
  const ቸ = document.getElementById('ቸ');
  const ነ = document.getElementById('ነ');
  const ኘ = document.getElementById('ኘ');
  const አ = document.getElementById('አ');
  const ከ = document.getElementById('ከ');
  const ኸ = document.getElementById('ኸ');
  const ወ = document.getElementById('ወ');
  const ዐ = document.getElementById('ዐ');
  const ዘ = document.getElementById('ዘ');
  const ዠ = document.getElementById('ዠ');
  const የ = document.getElementById('የ');
  const ደ = document.getElementById('ደ');
  const ዸ = document.getElementById('ዸ');
  const ጀ = document.getElementById('ጀ');
  const ገ = document.getElementById('ገ');
  const ጘ = document.getElementById('ጘ');
  const ጠ = document.getElementById('ጠ');
  const ጨ = document.getElementById('ጨ');
  const ጰ = document.getElementById('ጰ');

  const key1 = document.getElementById('key1');
  const key2 = document.getElementById('key2');
  const key3 = document.getElementById('key3');
  const key4 = document.getElementById('key4');
  const key5 = document.getElementById('key5');
  const key6 = document.getElementById('key6');
  const key7 = document.getElementById('key7');


  test.addEventListener('click', function handleClick() {
    key1.textContent = 'ለ';
    key2.textContent = 'ሉ';
    key3.textContent = 'ሊ';
    key4.textContent = 'ላ';
    key5.textContent = 'ሌ';
    key6.textContent = 'ል';
    key7.textContent = 'ሎ';
    let keys = document.querySelectorAll(".selector button");
    console.log(keys);
  });
  ሀ.addEventListener('click', function handleClick() {
    key1.textContent = 'ሀ';
    key2.textContent = 'ሁ';
    key3.textContent = 'ሂ';
    key4.textContent = 'ሃ';
    key5.textContent = 'ሄ';
    key6.textContent = 'ህ';
    key7.textContent = 'ሆ';
    let keys = document.querySelectorAll(".selector button");
    console.log(keys);
  });
  ፐ.addEventListener('click', function handleClick() {
    key1.textContent = 'ፐ';
    key2.textContent = 'ፑ';
    key3.textContent = 'ፒ';
    key4.textContent = 'ፓ';
    key5.textContent = 'ፔ';
    key6.textContent = 'ፕ';
    key7.textContent = 'ፖ';
    let keys = document.querySelectorAll(".selector button");
    console.log(keys);
  });
  ፈ.addEventListener('click', function handleClick() {
    key1.textContent = 'ፈ';
    key2.textContent = 'ፉ';
    key3.textContent = 'ፊ';
    key4.textContent = 'ፋ';
    key5.textContent = 'ፌ';
    key6.textContent = 'ፍ';
    key7.textContent = 'ፎ';
    let keys = document.querySelectorAll(".selector button");
    console.log(keys);
  });
  ፀ.addEventListener('click', function handleClick() {
    key1.textContent = 'ፀ';
    key2.textContent = 'ፁ';
    key3.textContent = 'ፂ';
    key4.textContent = 'ፃ';
    key5.textContent = 'ፄ';
    key6.textContent = 'ፅ';
    key7.textContent = 'ፆ';
    let keys = document.querySelectorAll(".selector button");
    console.log(keys);
  });
  ጸ.addEventListener('click', function handleClick() {
    key1.textContent = 'ጸ';
    key2.textContent = 'ጹ';
    key3.textContent = 'ጺ';
    key4.textContent = 'ጻ';
    key5.textContent = 'ጼ';
    key6.textContent = 'ጽ';
    key7.textContent = 'ጾ';
    let keys = document.querySelectorAll(".selector button");
    console.log(keys);
  });
  ሐ.addEventListener('click', function handleClick() {
    key1.textContent = 'ሐ';
    key2.textContent = 'ሑ';
    key3.textContent = 'ሒ';
    key4.textContent = 'ሓ';
    key5.textContent = 'ሔ';
    key6.textContent = 'ሕ';
    key7.textContent = 'ሖ';
    let keys = document.querySelectorAll(".selector button");
    console.log(keys);
  });
  መ.addEventListener('click', function handleClick() {
    key1.textContent = 'መ';
    key2.textContent = 'ሙ';
    key3.textContent = 'ሚ';
    key4.textContent = 'ማ';
    key5.textContent = 'ሜ';
    key6.textContent = 'ም';
    key7.textContent = 'ሞ';
    let keys = document.querySelectorAll(".selector button");
    console.log(keys);
  });
  ሠ.addEventListener('click', function handleClick() {
    key1.textContent = 'ሠ';
    key2.textContent = 'ሡ';
    key3.textContent = 'ሢ';
    key4.textContent = 'ሣ';
    key5.textContent = 'ሤ';
    key6.textContent = 'ሥ';
    key7.textContent = 'ሦ';
    let keys = document.querySelectorAll(".selector button");
    console.log(keys);
  });

  ረ.addEventListener('click', function handleClick() {
    key1.textContent = 'ረ';
    key2.textContent = 'ሩ';
    key3.textContent = 'ሪ';
    key4.textContent = 'ራ';
    key5.textContent = 'ሬ';
    key6.textContent = 'ር';
    key7.textContent = 'ሮ';
    let keys = document.querySelectorAll(".selector button");
    console.log(keys);
  });
  ሸ.addEventListener('click', function handleClick() {
    key1.textContent = 'ሸ';
    key2.textContent = 'ሹ';
    key3.textContent = 'ሺ';
    key4.textContent = 'ሻ';
    key5.textContent = 'ሼ';
    key6.textContent = 'ሽ';
    key7.textContent = 'ሾ';
    let keys = document.querySelectorAll(".selector button");
    console.log(keys);
  });
  ሰ.addEventListener('click', function handleClick() {
    key1.textContent = 'ሰ';
    key2.textContent = 'ሱ';
    key3.textContent = 'ሲ';
    key4.textContent = 'ሳ';
    key5.textContent = 'ሴ';
    key6.textContent = 'ስ';
    key7.textContent = 'ሶ';
    let keys = document.querySelectorAll(".selector button");
    console.log(keys);
  });
  ቀ.addEventListener('click', function handleClick() {
    key1.textContent = 'ቀ';
    key2.textContent = 'ቁ';
    key3.textContent = 'ቂ';
    key4.textContent = 'ቃ';
    key5.textContent = 'ቄ';
    key6.textContent = 'ቅ';
    key7.textContent = 'ቆ';
    let keys = document.querySelectorAll(".selector button");
    console.log(keys);
  });
  ቐ.addEventListener('click', function handleClick() {
    key1.textContent = 'ቐ';
    key2.textContent = 'ቑ';
    key3.textContent = 'ቒ';
    key4.textContent = 'ቓ';
    key5.textContent = 'ቔ';
    key6.textContent = 'ቕ';
    key7.textContent = 'ቖ';
    let keys = document.querySelectorAll(".selector button");
    console.log(keys);
  });
  በ.addEventListener('click', function handleClick() {
    key1.textContent = 'በ';
    key2.textContent = 'ቡ';
    key3.textContent = 'ቢ';
    key4.textContent = 'ባ';
    key5.textContent = 'ቤ';
    key6.textContent = 'ብ';
    key7.textContent = 'ቦ';
    let keys = document.querySelectorAll(".selector button");
    console.log(keys);
  });
  ቨ.addEventListener('click', function handleClick() {
    key1.textContent = 'ቨ';
    key2.textContent = 'ቩ';
    key3.textContent = 'ቪ';
    key4.textContent = 'ቫ';
    key5.textContent = 'ቬ';
    key6.textContent = 'ቭ';
    key7.textContent = 'ቮ';
    let keys = document.querySelectorAll(".selector button");
    console.log(keys);
  });
  ተ.addEventListener('click', function handleClick() {
    key1.textContent = 'ተ';
    key2.textContent = 'ቱ';
    key3.textContent = 'ቲ';
    key4.textContent = 'ታ';
    key5.textContent = 'ቴ';
    key6.textContent = 'ት';
    key7.textContent = 'ቶ';
    let keys = document.querySelectorAll(".selector button");
    console.log(keys);
  });
  ቸ.addEventListener('click', function handleClick() {
    key1.textContent = 'ቸ';
    key2.textContent = 'ቹ';
    key3.textContent = 'ቺ';
    key4.textContent = 'ቻ';
    key5.textContent = 'ቼ';
    key6.textContent = 'ች';
    key7.textContent = 'ቾ';
    let keys = document.querySelectorAll(".selector button");
    console.log(keys);
  });
  ነ.addEventListener('click', function handleClick() {
    key1.textContent = 'ነ';
    key2.textContent = 'ኑ';
    key3.textContent = 'ኒ';
    key4.textContent = 'ና';
    key5.textContent = 'ኔ';
    key6.textContent = 'ን';
    key7.textContent = 'ኖ';
    let keys = document.querySelectorAll(".selector button");
    console.log(keys);
  });
  ኘ.addEventListener('click', function handleClick() {
    key1.textContent = 'ኘ';
    key2.textContent = 'ኙ';
    key3.textContent = 'ኚ';
    key4.textContent = 'ኛ';
    key5.textContent = 'ኜ';
    key6.textContent = 'ኝ';
    key7.textContent = 'ኞ';
    let keys = document.querySelectorAll(".selector button");
    console.log(keys);
  });
  አ.addEventListener('click', function handleClick() {
    key1.textContent = 'አ';
    key2.textContent = 'ኡ';
    key3.textContent = 'ኢ';
    key4.textContent = 'ኣ';
    key5.textContent = 'ኤ';
    key6.textContent = 'እ';
    key7.textContent = 'ኦ';
    let keys = document.querySelectorAll(".selector button");
    console.log(keys);
  });
  ከ.addEventListener('click', function handleClick() {
    key1.textContent = 'ከ';
    key2.textContent = 'ኩ';
    key3.textContent = 'ኪ';
    key4.textContent = 'ካ';
    key5.textContent = 'ኬ';
    key6.textContent = 'ክ';
    key7.textContent = 'ኮ';
    let keys = document.querySelectorAll(".selector button");
    console.log(keys);
  });
  ኸ.addEventListener('click', function handleClick() {
    key1.textContent = 'ኸ';
    key2.textContent = 'ኹ';
    key3.textContent = 'ኺ';
    key4.textContent = 'ኻ';
    key5.textContent = 'ኼ';
    key6.textContent = 'ኽ';
    key7.textContent = 'ኾ';
    let keys = document.querySelectorAll(".selector button");
    console.log(keys);
  });
  ወ.addEventListener('click', function handleClick() {
    key1.textContent = 'ወ';
    key2.textContent = 'ዉ';
    key3.textContent = 'ዊ';
    key4.textContent = 'ዋ';
    key5.textContent = 'ዌ';
    key6.textContent = 'ው';
    key7.textContent = 'ዎ';
    let keys = document.querySelectorAll(".selector button");
    console.log(keys);
  });
  ዐ.addEventListener('click', function handleClick() {
    key1.textContent = 'ዐ';
    key2.textContent = 'ዑ';
    key3.textContent = 'ዒ';
    key4.textContent = 'ዓ';
    key5.textContent = 'ዔ';
    key6.textContent = 'ዕ';
    key7.textContent = 'ዖ';
    let keys = document.querySelectorAll(".selector button");
    console.log(keys);
  });
  ዘ.addEventListener('click', function handleClick() {
    key1.textContent = 'ዘ';
    key2.textContent = 'ዙ';
    key3.textContent = 'ዚ';
    key4.textContent = 'ዛ';
    key5.textContent = 'ዜ';
    key6.textContent = 'ዝ';
    key7.textContent = 'ዞ';
    let keys = document.querySelectorAll(".selector button");
    console.log(keys);
  });
  ዠ.addEventListener('click', function handleClick() {
    key1.textContent = 'ዠ';
    key2.textContent = 'ዡ';
    key3.textContent = 'ዢ';
    key4.textContent = 'ዣ';
    key5.textContent = 'ዤ';
    key6.textContent = 'ዥ';
    key7.textContent = 'ዦ';
    let keys = document.querySelectorAll(".selector button");
    console.log(keys);
  });
  የ.addEventListener('click', function handleClick() {
    key1.textContent = 'የ';
    key2.textContent = 'ዩ';
    key3.textContent = 'ዪ';
    key4.textContent = 'ያ';
    key5.textContent = 'ዬ';
    key6.textContent = 'ይ';
    key7.textContent = 'ዮ';
    let keys = document.querySelectorAll(".selector button");
    console.log(keys);
  });
  ደ.addEventListener('click', function handleClick() {
    key1.textContent = 'ደ';
    key2.textContent = 'ዱ';
    key3.textContent = 'ዲ';
    key4.textContent = 'ዳ';
    key5.textContent = 'ዴ';
    key6.textContent = 'ድ';
    key7.textContent = 'ዶ';
    let keys = document.querySelectorAll(".selector button");
    console.log(keys);
  });
  ዸ.addEventListener('click', function handleClick() {
    key1.textContent = 'ዸ';
    key2.textContent = 'ዹ';
    key3.textContent = 'ዺ';
    key4.textContent = 'ዻ';
    key5.textContent = 'ዼ';
    key6.textContent = 'ዽ';
    key7.textContent = 'ዾ';
    let keys = document.querySelectorAll(".selector button");
    console.log(keys);
  });
  ጀ.addEventListener('click', function handleClick() {
    key1.textContent = 'ጀ';
    key2.textContent = 'ጁ';
    key3.textContent = 'ጂ';
    key4.textContent = 'ጃ';
    key5.textContent = 'ጄ';
    key6.textContent = 'ጅ';
    key7.textContent = 'ጆ';
    let keys = document.querySelectorAll(".selector button");
    console.log(keys);
  });
  ገ.addEventListener('click', function handleClick() {
    key1.textContent = 'ገ';
    key2.textContent = 'ጉ';
    key3.textContent = 'ጊ';
    key4.textContent = 'ጋ';
    key5.textContent = 'ጌ';
    key6.textContent = 'ግ';
    key7.textContent = 'ጎ';
    let keys = document.querySelectorAll(".selector button");
    console.log(keys);
  });
  ጘ.addEventListener('click', function handleClick() {
    key1.textContent = 'ጘ';
    key2.textContent = 'ጙ';
    key3.textContent = 'ጚ';
    key4.textContent = 'ጛ';
    key5.textContent = 'ጜ';
    key6.textContent = 'ጝ';
    key7.textContent = 'ጞ';
    let keys = document.querySelectorAll(".selector button");
    console.log(keys);
  });
  ጠ.addEventListener('click', function handleClick() {
    key1.textContent = 'ጠ';
    key2.textContent = 'ጡ';
    key3.textContent = 'ጢ';
    key4.textContent = 'ጣ';
    key5.textContent = 'ጤ';
    key6.textContent = 'ጥ';
    key7.textContent = 'ጦ';
    let keys = document.querySelectorAll(".selector button");
    console.log(keys);
  });
  ጨ.addEventListener('click', function handleClick() {
    key1.textContent = 'ጨ';
    key2.textContent = 'ጩ';
    key3.textContent = 'ጪ';
    key4.textContent = 'ጫ';
    key5.textContent = 'ጬ';
    key6.textContent = 'ጭ';
    key7.textContent = 'ጮ';
    let keys = document.querySelectorAll(".selector button");
    console.log(keys);
  });
  ጰ.addEventListener('click', function handleClick() {
    key1.textContent = 'ጰ';
    key2.textContent = 'ጱ';
    key3.textContent = 'ጲ';
    key4.textContent = 'ጳ';
    key5.textContent = 'ጴ';
    key6.textContent = 'ጵ';
    key7.textContent = 'ጶ';
    let keys = document.querySelectorAll(".selector button");
    console.log(keys);
  });


});
