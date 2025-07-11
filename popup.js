document.getElementById('customJobBtn').addEventListener('click', () => {
  const jobTitle = document.getElementById('customJobTitle').value.trim();
  if (!jobTitle) return alert("Enter a job title");
  const encoded = encodeURIComponent(jobTitle);
  const url = `https://www.linkedin.com/jobs/search/?f_TPR=r3600&keywords=${encoded}&location=India&sortBy=DD`;
  window.open(url, '_blank');
});

document.getElementById('customPostBtn').addEventListener('click', () => {
  const postKeyword = document.getElementById('customPostTitle').value.trim();
  if (!postKeyword) return alert("Enter a keyword to search posts");
  const encoded = encodeURIComponent(postKeyword);
  const url = `https://www.linkedin.com/search/results/content/?keywords=${encoded}&sortBy=DATE_POSTED`;
  window.open(url, '_blank');
});