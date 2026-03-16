function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('open');
}

function filterWorks(type, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.work-card').forEach(card => {
    if (type === 'all' || card.dataset.type === type) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}

function openMedia(src, type) {
  const modal = document.getElementById('mediaModal');
  const content = document.getElementById('modalContent');
  if (!modal) return;
  if (type === 'video') {
    content.innerHTML = '<video controls autoplay src="' + src + '"></video>';
  } else {
    content.innerHTML = '<img src="' + src + '" />';
  }
  modal.classList.add('open');
}

function closeModal() {
  const modal = document.getElementById('mediaModal');
  if (modal) modal.classList.remove('open');
  const content = document.getElementById('modalContent');
  if (content) content.innerHTML = '';
}

function handleForm(e) {
  e.preventDefault();
  document.getElementById('formSuccess').style.display = 'block';
}
