const form = document.getElementById('userForm');
const tableBody = document.getElementById('userTableBody');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('username').value;
  const email = document.getElementById('useremail').value;

  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td class="border px-4 py-2">${name}</td>
    <td class="border px-4 py-2">${email}</td>
  `;

  tableBody.appendChild(newRow);
  form.reset(); 
});
