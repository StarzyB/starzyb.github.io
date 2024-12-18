/*about*/
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.aboutbuttonnav').addEventListener('click', () => {
        const aboutElement = document.querySelector('.about');
        const shopElement = document.querySelector('.shop');
        const frontpageElement = document.querySelector('.frontpage');
        if (aboutElement.classList.contains('visible')) {
            console.log('About is visible');
        } else {
            if (aboutElement.classList.contains('visible')) {
                console.log('About is visible');
            } else {
                aboutElement.classList.toggle('visible');
            }
            if (frontpageElement.classList.contains('hidden')) {
                console.log('frontpage is hidden');
            } else {
                frontpageElement.classList.toggle('hidden');
            }
            if (shopElement.classList.contains('visible')) {
                shopElement.classList.toggle('visible');
            } else {
                console.log('shop is hidden');
            }
        }
        aboutElement.style.transition = 'opacity 0.5s';
        frontpageElement.style.transition = 'opacity 0.5s';
    }
    );
}
);

/*home*/
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.homebuttonnav').addEventListener('click', () => {
        const aboutElement = document.querySelector('.about');
        const shopElement = document.querySelector('.shop');
        const frontpageElement = document.querySelector('.frontpage');
        if (frontpageElement.classList.contains('hidden')) {
            if (aboutElement.classList.contains('visible')) {
                aboutElement.classList.toggle('visible');
            } else {
                console.log('About is hidden');
            }
            if (frontpageElement.classList.contains('hidden')) {
                frontpageElement.classList.toggle('hidden');
            } else {
                console.log('frontpage is visible');
            }
            if (shopElement.classList.contains('visible')) {
                shopElement.classList.toggle('visible');
            } else {
                console.log('shop is hidden');
            }
        } else {
            console.log('Home is visible');
        }
        aboutElement.style.transition = 'opacity 0.5s';
        frontpageElement.style.transition = 'opacity 0.5s';
    }
    );
}
);

/*shop*/
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.shopbuttonnav').addEventListener('click', () => {
        const aboutElement = document.querySelector('.about');
        const shopElement = document.querySelector('.shop');
        const frontpageElement = document.querySelector('.frontpage');
        if (shopElement.classList.contains('visible')) {
            console.log('Shop is visible');
        } else {
            if (aboutElement.classList.contains('visible')) {
                aboutElement.classList.toggle('visible');
            } else {
                console.log('About is hidden');
            }
            if (frontpageElement.classList.contains('hidden')) {
                console.log('frontpage is hidden');
            } else {
                frontpageElement.classList.toggle('hidden');
            }
            if (shopElement.classList.contains('visible')) {
                console.log('shop is visible');
            } else {
                shopElement.classList.toggle('visible');
            }
        }
        aboutElement.style.transition = 'opacity 0.5s';
        frontpageElement.style.transition = 'opacity 0.5s';
    }
    );
}
);

document.addEventListener('DOMContentLoaded', function() {
  // GitHub repository details
  const username = 'StarzyB';
  const repoName = 'starzyb.github.io';

  // GitHub API endpoint
  const apiUrl = `https://api.github.com/repos/StarzyB/starzyb.github.io`;

  // Fetch repository data
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Get the size of the repo in KB
      const repoSizeInKB = data.size;

      // Convert the size to GB (1 GB = 1,000,000 KB)
      const repoSizeInGB = (repoSizeInKB / 1000).toFixed(2);

      // Update the project size in the div
      document.getElementById('project-size').textContent = `${repoSizeInGB} MB`;
    })
    .catch(error => {
      console.error('Error fetching repository data:', error);
      document.getElementById('project-size').textContent = 'Error fetching data';
    });
});
