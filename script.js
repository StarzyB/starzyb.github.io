document.addEventListener('DOMContentLoaded', function() {
  console.log('Page loaded!');
  const aboutButton = document.querySelector('.aboutbuttonnav');
  if (aboutButton) {
    console.log('.aboutbuttonnav found!');
    aboutButton.addEventListener('click', () => {
      console.log('About button clicked!');
      document.querySelector('.about').classList.toggle('visible');
      document.querySelector('.frontpage').classList.toggle('hidden');
    });
  } else {
    console.log('.aboutbuttonnav not found!');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.aboutbuttonnav').addEventListener('click', () => {
    document.querySelector('.about').style.opacity = '1';
    document.querySelector('.frontpage').style.opacity = '0';
  });
});