const GITHUB_USER = 'yoku';
const TOOL_REPOS = ['fuin', 'memdroid', 'enma'];

async function fetchGitHubUser() {
  const res = await fetch(`https://api.github.com/users/${GITHUB_USER}`);
  if (!res.ok) return;
  const data = await res.json();
  document.getElementById('stat-repos').textContent = data.public_repos;
  document.getElementById('stat-followers').textContent = data.followers;
}

async function fetchRepoStars() {
  const results = await Promise.all(
    TOOL_REPOS.map(repo =>
      fetch(`https://api.github.com/repos/${GITHUB_USER}/${repo}`)
        .then(r => r.ok ? r.json() : null)
    )
  );

  let totalStars = 0;
  results.forEach((data, i) => {
    if (!data) return;
    totalStars += data.stargazers_count;
    const el = document.getElementById(`stars-${TOOL_REPOS[i]}`);
    if (el) el.textContent = `★ ${data.stargazers_count}`;
  });

  document.getElementById('stat-stars').textContent = totalStars;
}

fetchGitHubUser();
fetchRepoStars();
