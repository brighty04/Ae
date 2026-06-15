// Sample Blog Posts Data
const blogPosts = [
    {
        id: 1,
        title: "5 Essential Tips for Budgeting",
        excerpt: "Learn the basics of budgeting and how to manage your money effectively. Start building a strong financial foundation today.",
        category: "budgeting",
        tags: ["budgeting", "tips", "basics"],
        date: "2024-01-15",
        emoji: "💳",
        content: "Full blog post content about budgeting goes here..."
    },
    {
        id: 2,
        title: "How to Start Investing with $100",
        excerpt: "You don't need to be rich to start investing. Discover how to begin your investment journey with just $100.",
        category: "investing",
        tags: ["investing", "beginners", "stocks"],
        date: "2024-01-12",
        emoji: "📈",
        content: "Full blog post content about investing goes here..."
    },
    {
        id: 3,
        title: "Emergency Fund: Why You Need One",
        excerpt: "Understand the importance of having an emergency fund and how to build one. Protect yourself from financial uncertainties.",
        category: "savings",
        tags: ["savings", "emergency", "security"],
        date: "2024-01-10",
        emoji: "🏦",
        content: "Full blog post content about emergency fund goes here..."
    },
    {
        id: 4,
        title: "10 Money-Saving Hacks You Need to Know",
        excerpt: "Quick and practical tips to save money every day. These simple hacks can add up to significant savings over time.",
        category: "tips",
        tags: ["savings", "tips", "hacks"],
        date: "2024-01-08",
        emoji: "💡",
        content: "Full blog post content about money-saving hacks goes here..."
    },
    {
        id: 5,
        title: "Diversification: The Key to Safe Investing",
        excerpt: "Learn why diversifying your investment portfolio is crucial for long-term wealth building and risk management.",
        category: "investing",
        tags: ["investing", "portfolio", "strategy"],
        date: "2024-01-05",
        emoji: "🎯",
        content: "Full blog post content about diversification goes here..."
    },
    {
        id: 6,
        title: "Creating a Monthly Budget That Works",
        excerpt: "A step-by-step guide to creating a budget that actually works for your lifestyle and financial goals.",
        category: "budgeting",
        tags: ["budgeting", "planning", "lifestyle"],
        date: "2024-01-02",
        emoji: "📊",
        content: "Full blog post content about monthly budgeting goes here..."
    }
];

// Function to render blog posts
function renderPosts(postsToRender = blogPosts) {
    const postsContainer = document.getElementById('postsContainer');
    postsContainer.innerHTML = '';

    postsToRender.forEach(post => {
        const postCard = document.createElement('div');
        postCard.className = 'post-card';
        postCard.dataset.category = post.category;
        
        const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });

        postCard.innerHTML = `
            <div class="post-image">${post.emoji}</div>
            <div class="post-content">
                <span class="post-category">${post.category.charAt(0).toUpperCase() + post.category.slice(1)}</span>
                <h3>${post.title}</h3>
                <p class="post-excerpt">${post.excerpt}</p>
                <div class="post-meta">
                    <span>${formattedDate}</span>
                    <div class="post-tags">
                        ${post.tags.map(tag => `<span class="post-tag">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;

        postCard.addEventListener('click', () => {
            showPostDetail(post);
        });

        postsContainer.appendChild(postCard);
    });
}

// Function to filter posts by category
function filterPosts(category) {
    if (category === 'all') {
        renderPosts(blogPosts);
    } else {
        const filteredPosts = blogPosts.filter(post => post.category === category);
        renderPosts(filteredPosts);
    }
}

// Filter button event listeners
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        filterPosts(this.dataset.filter);
    });
});

// Category card click event
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', function() {
        const category = this.dataset.category;
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        const categoryBtn = document.querySelector(`[data-filter="${category}"]`);
        if (categoryBtn) {
            categoryBtn.classList.add('active');
        }
        filterPosts(category);
        document.getElementById('posts').scrollIntoView({ behavior: 'smooth' });
    });
});

// Show post detail (modal or separate page)
function showPostDetail(post) {
    alert(`Opening: ${post.title}\n\nFull post would be displayed here.\n\n${post.content}`);
}

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

// Initial render
renderPosts();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
