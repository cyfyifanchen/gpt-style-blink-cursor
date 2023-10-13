const txtWrapper = document.querySelector('.text-container')
const txtSingle = document.querySelector('.text')
const cursor = document.querySelector('.cursor')

async function autoAppend() {
  const sampleParagraph = `Once upon a time in a quaint little village, nestled at the foot of a lush, mystical forest, there lived a young girl named Eliza. She was known for her insatiable curiosity and a deep love for books. Every afternoon, she would journey into the heart of the forest to read beneath her favorite ancient oak tree. Her sanctuary was a small clearing where birds sang melodies, and the rustling leaves provided a soothing backdrop for her adventures in the world of words.`

  function delay(duration) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, duration)
    })
  }
  function transfer(text) {
    let res = text
      .split('\n')
      .map((t) => `<p>${t}</p>`)
      .join('')
    return res
  }

  for (let i = 0; i < sampleParagraph.length; i++) {
    let text = sampleParagraph.slice(0, i)
    let res = transfer(text)
    if (txtSingle !== null) txtSingle.innerHTML = res
    updateCursor()
    await delay(100)
  }
}

autoAppend()

function getLastTextNode(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    return node
  }
  const children = node.childNodes
  for (let i = children.length - 1; i >= 0; i--) {
    const child = children[i]
    const res = getLastTextNode(child)
    if (res) {
      return res
    }
  }
  return null
}

function updateCursor() {
  const lastTextNode = getLastTextNode(txtSingle)
  const textNode = document.createTextNode('z')
  if (lastTextNode) {
    lastTextNode.parentNode.appendChild(textNode)
  } else {
    if (txtSingle !== null) txtSingle.appendChild(textNode)
  }

  const range = document.createRange()
  range.setStart(textNode, 0)
  range.setEnd(textNode, 0)
  const rect = range.getBoundingClientRect()
  const containerRect = txtWrapper?.getBoundingClientRect()
  if (containerRect !== undefined) {
    const x = rect.x - containerRect.x
    const y = rect.y - containerRect.y
    cursor.style.transform = `translate(${x}px, ${y}px)`
  }
  textNode.remove()
}
