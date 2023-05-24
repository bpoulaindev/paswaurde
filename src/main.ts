import './style.css'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <div style="display: flex; justify-content: center;">
      <input type="text" style="border-color: #535bf2; border-radius: 6px" />
      <button type="button" style="margin-left: 8px">Verify</button>
      </div>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
