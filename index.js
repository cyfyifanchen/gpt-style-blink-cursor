const textContainer = document.querySelector('.text-container')
const textElem = document.querySelector('.text')
const cursor = document.querySelector('.cursor')

async function autoAppend() {
  function delay(duration) {}

  function transfer(text) {}

  const content = `Once upon a time in a quaint little village, nestled at the foot of a lush, mystical forest, there lived a young girl named Eliza. She was known for her insatiable curiosity and a deep love for books. Every afternoon, she would journey into the heart of the forest to read beneath her favorite ancient oak tree. Her sanctuary was a small clearing where birds sang melodies, and the rustling leaves provided a soothing backdrop for her adventures in the world of words.`

  for (let i = 0; i < content.length; i++) {
    let text = content.slice(0, i)
    let res = transfer(text)
    textElem.innerHTML = res
    updateCursor()
    await delay(100)
  }
}

autoAppend()

function updateCursor() {}

console.log('123')
