document.querySelectorAll('.question-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const solutionId = link.getAttribute('data-solution');
    const solutionContent = document.getElementById(solutionId).innerHTML;

    // Desktop: update the right-side solution panel
    document.getElementById('solution-area').innerHTML = solutionContent;

    // Mobile: only show below question if screen is small
    if (window.innerWidth <= 768) {
      document.querySelectorAll('.mobile-solution').forEach(el => el.innerHTML = '');
      const mobileSol = link.nextElementSibling;
      if (mobileSol && mobileSol.classList.contains('mobile-solution')) {
        mobileSol.innerHTML = solutionContent;
      }
    } else {
      // Clear mobile solutions if not on small screen
      document.querySelectorAll('.mobile-solution').forEach(el => el.innerHTML = '');
    }

    // Highlight active question
    document.querySelectorAll('.question-link').forEach(q => q.classList.remove('active'));
    link.classList.add('active');
  });
});
