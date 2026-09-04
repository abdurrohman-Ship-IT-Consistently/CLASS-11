console.log('=== Coders Club Register Form JS Loaded ===');

document.addEventListener('DOMContentLoaded', function () {
  // DOM Elements
  const registrationForm = document.getElementById('registrationForm');
  const successCard = document.getElementById('successCard');
  const resubmitBtn = document.getElementById('resubmitBtn');
  const nameInput = document.getElementById('nameInput');
  const nameInfo = document.getElementById('nameInfo');
  const classSelect = document.getElementById('classSelect');
  const interestSelect = document.getElementById('interestSelect');
  const reasonInput = document.getElementById('reasonInput');
  const agreementCheckbox = document.getElementById('agreement');
  const resetButton = document.getElementById('resetButton');
  const submitBtn = document.getElementById('submitBtn');

  // Preview Elements
  const previewName = document.getElementById('previewName');
  const previewClass = document.getElementById('previewClass');
  const previewInterestBadge = document.getElementById('previewInterestBadge');
  const previewReason = document.getElementById('previewReason');
  const previewStatus = document.getElementById('previewStatus');
  const characterCount = document.getElementById('characterCount');
  const messageBox = document.getElementById('message');

  // Progress & Theme
  const formProgress = document.getElementById('formProgress');
  const progressPercent = document.getElementById('progressPercent');
  const themeToggle = document.getElementById('themeToggle');

  function updateFormProgressAndPreview() {
    let filledFields = 0;
    const totalFields = 5;

    // Nama
    const nameVal = nameInput.value.trim();
    if (nameVal) {
      filledFields++;
      nameInfo.textContent = `Hi, ${nameVal} 👋`;
      previewName.textContent = nameVal;
    } else {
      nameInfo.textContent = '✍️ Ketik nama lengkap kamu.';
      previewName.textContent = 'Belum diisi';
    }

    // Kelas
    const classVal = classSelect.value;
    if (classVal) {
      filledFields++;
      previewClass.textContent = classVal.startsWith('Kelas') ? classVal : `Kelas ${classVal}`;
    } else {
      previewClass.textContent = 'Belum dipilih';
    }

    // Minat
    const interestVal = interestSelect.value;
    if (interestVal) {
      filledFields++;
      previewInterestBadge.textContent = interestVal;
      previewInterestBadge.className = 'badge badge-success';
    } else {
      previewInterestBadge.textContent = 'Belum dipilih';
      previewInterestBadge.className = 'badge';
    }

    // Alasan
    const reasonVal = reasonInput.value.trim();
    const charLen = reasonInput.value.length;
    characterCount.textContent = charLen;

    if (charLen >= 90) {
      characterCount.style.color = 'var(--pico-del-color, #d9534f)';
    } else if (charLen >= 70) {
      characterCount.style.color = 'var(--pico-ins-color, #f0ad4e)';
    } else {
      characterCount.style.color = 'inherit';
    }

    if (reasonVal) {
      filledFields++;
      previewReason.textContent = `"${reasonVal}"`;
      previewReason.style.fontStyle = 'normal';
    } else {
      previewReason.textContent = 'Belum ada alasan...';
      previewReason.style.fontStyle = 'italic';
    }

    // Checkbox
    if (agreementCheckbox.checked) {
      filledFields++;
    }

    // Progress
    const percentage = Math.round((filledFields / totalFields) * 100);
    if (formProgress) formProgress.value = percentage;
    if (progressPercent) progressPercent.textContent = `${percentage}%`;

    // Status & Message
    if (percentage === 100) {
      previewStatus.textContent = '✅ Siap Dikirim';
      previewStatus.className = 'badge badge-success';
      if (messageBox) {
        messageBox.style.backgroundColor = 'var(--pico-ins-color, #2e7d32)';
        messageBox.style.color = '#ffffff';
        messageBox.textContent = '🎉 Semua data lengkap! Klik "Kirim Pendaftaran".';
      }
    } else {
      previewStatus.textContent = '⏳ Belum Lengkap';
      previewStatus.className = 'badge badge-warning';
      if (messageBox) {
        messageBox.style.backgroundColor = 'var(--pico-card-background-color)';
        messageBox.style.color = 'inherit';
        messageBox.textContent = `👋 Lengkapi ${totalFields - filledFields} kolom lagi.`;
      }
    }
  }

  // Event Listeners Input
  [nameInput, classSelect, interestSelect, reasonInput, agreementCheckbox].forEach((input) => {
    if (input) {
      input.addEventListener('input', updateFormProgressAndPreview);
      input.addEventListener('change', updateFormProgressAndPreview);
    }
  });

  // Dark Mode Toggle
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      themeToggle.textContent = newTheme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';
    });
  }

  // Reset Button
  if (resetButton) {
    resetButton.addEventListener('click', function () {
      if (confirm('Apakah Anda yakin ingin mengosongkan seluruh isi formulir?')) {
        registrationForm.reset();
        updateFormProgressAndPreview();
      }
    });
  }

  // Submit Handler -> Tukar Form dengan Success Card
  if (registrationForm) {
    registrationForm.addEventListener('submit', function (e) {
      e.preventDefault();

      if (submitBtn) {
        submitBtn.setAttribute('aria-busy', 'true');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Mengirim pendaftaran...';
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.removeAttribute('aria-busy');
          submitBtn.disabled = false;
          submitBtn.textContent = '🚀 Kirim Pendaftaran';
        }

        // Sembunyikan form & tampilkan kartu sukses
        registrationForm.classList.add('hidden');
        successCard.classList.remove('hidden');

        // Update status di Live Preview
        previewStatus.textContent = '🎉 Formulir Terkirim';
        previewStatus.className = 'badge badge-success';
        messageBox.textContent = 'Data pendaftaran kamu sudah berhasil terkirim!';
      }, 1200);
    });
  }

  // Tombol Kirim Form Lagi
  if (resubmitBtn) {
    resubmitBtn.addEventListener('click', function () {
      registrationForm.reset();
      updateFormProgressAndPreview();
      successCard.classList.add('hidden');
      registrationForm.classList.remove('hidden');
    });
  }

  updateFormProgressAndPreview();
});