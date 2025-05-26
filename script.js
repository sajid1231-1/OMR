const questionForm = document.getElementById('questionForm');
const questionInput = document.getElementById('questionInput');
const questionList = document.getElementById('questionList');

questionForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const question = questionInput.value.trim();
  if (question !== '') {
    const li = document.createElement('li');
    li.textContent = question;
    questionList.appendChild(li);
    questionInput.value = '';
  }
});

document.getElementById('uploadBtn').addEventListener('click', () => {
  const omrFile = document.getElementById('omrInput').files[0];
  if (omrFile) {
    console.log('OMR File uploaded:', omrFile.name);
    // বাস্তব OMR রিডিং API/AI এখানে যুক্ত হবে
    alert("OMR File submitted! (Processing not implemented)");
  } else {
    alert("Please upload an OMR image first.");
  }
});
