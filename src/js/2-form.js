const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.message');


form.addEventListener('input', () => {
  const data = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
})

form.addEventListener('submit', () => {
  if (form.elements.email.value && form.elements.message.value) {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));

    localStorage.removeItem(STORAGE_KEY);
    console.log(data);
  }
})


function restoreData() {
  const { email, message } = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  form.elements.email.value = email || '';
  form.elements.message.value = message || '';
}

restoreData();