const searchToggle = document.querySelector('.search-toggle');
const searchPanel = document.querySelector('.search-panel');
const searchInput = document.querySelector('#site-search');
const searchResults = document.querySelector('#search-results');
const posts = [{'title': 'Balanced Nutrition for Busy Adults: A Practical Guide', 'category': 'Nutrition', 'url': 'articles/balanced-nutrition-for-busy-adults-a-practical-guide.html', 'summary': 'Simple, sustainable nutrition habits that support energy, digestion, and long-term health without extreme dieting.'}, {'title': 'Sleep Hygiene Habits That Support Better Recovery', 'category': 'Sleep', 'url': 'articles/sleep-hygiene-habits-that-support-better-recovery.html', 'summary': 'Improve sleep quality with consistent routines, light exposure, bedroom habits, and smarter evening choices.'}, {'title': 'Daily Movement for Heart and Metabolic Health', 'category': 'Fitness', 'url': 'articles/daily-movement-for-heart-and-metabolic-health.html', 'summary': 'A beginner-friendly explanation of how walking, strength training, and reduced sitting support long-term health.'}, {'title': 'Hydration and Electrolytes: What Most People Need to Know', 'category': 'Wellness', 'url': 'articles/hydration-and-electrolytes-what-most-people-need-to-know.html', 'summary': 'Understand thirst, water intake, electrolytes, and when sports drinks may or may not be useful.'}, {'title': 'Preventive Health Checkups: Questions to Ask Your Clinician', 'category': 'Prevention', 'url': 'articles/preventive-health-checkups-questions-to-ask-your-clinician.html', 'summary': 'Make routine appointments more useful with prepared questions about screenings, vaccines, risk factors, and lifestyle goals.'}, {'title': 'Stress Management Skills for Everyday Life', 'category': 'Mental Wellness', 'url': 'articles/stress-management-skills-for-everyday-life.html', 'summary': 'Practical stress tools including breathing, boundaries, movement, sleep routines, and when to seek support.'}];

function normalizePath(url) {
  const current = window.location.pathname;
  if (current.includes('/articles/') || current.includes('/legal/')) {
    return '../' + url;
  }
  return './' + url;
}

function renderResults(query) {
  const value = query.trim().toLowerCase();
  if (!value) {
    searchResults.innerHTML = '';
    return;
  }
  const matches = posts.filter(post => (post.title + ' ' + post.category + ' ' + post.summary).toLowerCase().includes(value));
  searchResults.innerHTML = matches.length
    ? matches.map(post => `<a href="${normalizePath(post.url)}"><strong>${post.title}</strong><span>${post.category}</span></a>`).join('')
    : '<p>No matching articles found.</p>';
}

searchToggle?.addEventListener('click', () => {
  const isHidden = searchPanel.hasAttribute('hidden');
  if (isHidden) {
    searchPanel.removeAttribute('hidden');
    searchInput.focus();
  } else {
    searchPanel.setAttribute('hidden', '');
  }
});

searchInput?.addEventListener('input', event => renderResults(event.target.value));