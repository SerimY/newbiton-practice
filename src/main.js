import './style.css'

document.querySelector('#app').innerHTML = `
  <main class="container">
    <p class="eyebrow">NEWBITHON PRACTICE</p>

    <h1>뉴비톤 D-1 Todo</h1>

    <p>내일 준비할 일을 적어보세요.</p>

    <form id="todo-form">
      <input
        id="todo-input"
        type="text"
        placeholder="예: Git branch 연습하기"
      />

      <button type="submit">추가</button>
    </form>

    <ul id="todo-list"></ul>
  </main>
`

const form = document.querySelector('#todo-form')
const input = document.querySelector('#todo-input')
const list = document.querySelector('#todo-list')

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const text = input.value.trim()

  if (text === '') {
    return
  }

  const item = document.createElement('li')
  item.textContent = text

  list.appendChild(item)

  input.value = ''
})