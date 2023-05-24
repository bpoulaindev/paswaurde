import './style.css'
import { setupCounter } from './counter.ts'
import {validatePassword} from "../validators/passwordValidator";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Vite + TypeScript</h1>
    <div style="display: flex; justify-content: center;">
      <input type="text" style="border-color: #535bf2; border-radius: 6px" />
      <button type="button" id="checkButton" style="margin-left: 8px">Verify</button>
    </div>
    <p id="errorText" style="color: red; margin-top: 8px;"></p>
  </div>
`

document.addEventListener("DOMContentLoaded", () => {
    const verifyButton = document.querySelector<HTMLButtonElement>("#checkButton");
    const errorText = document.querySelector<HTMLParagraphElement>("#errorText");
    verifyButton?.addEventListener("click", () => {
        console.log('ah que coucou', errorText)
        const input = document.querySelector<HTMLInputElement>('input[type="text"]');
        const password = input?.value;
        const result = validatePassword(password ?? '');
        if (errorText) {
            if (result.isValid) {
                errorText.textContent = "";
            } else {
                errorText.textContent = result.errors.join(". ");
            }
        }
    });
});

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
