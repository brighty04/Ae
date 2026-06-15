# Making Cents in Time - Personal Finance Blog

A fast, simple, static blog hosted on GitHub Pages. Perfect for sharing financial tips, investment strategies, and money-saving hacks.

## Features

✅ **Fast & Lightweight** - Static HTML/CSS/JavaScript (no database)
✅ **Blog Posts** - Easy to add and manage
✅ **Categories & Tags** - Organize content by topics
✅ **Responsive Design** - Works on all devices
✅ **Ad-Ready** - Monetag ad placeholders included
✅ **GitHub Pages Hosting** - Free and fast
✅ **Light Theme** - Easy on the eyes

## Project Structure

```
ae/
├── index.html       # Main blog page
├── styles.css       # Styling
├── script.js        # JavaScript functionality
└── README.md        # This file
```

## How to Deploy to GitHub Pages

### Step 1: Enable GitHub Pages
1. Go to your repository settings: `https://github.com/brighty04/ae/settings`
2. Scroll down to "GitHub Pages" section
3. Select "Deploy from a branch"
4. Choose the `main` branch as the source
5. Click "Save"

### Step 2: Access Your Blog
Your blog will be available at: `https://brighty04.github.io/ae/`

## How to Add Blog Posts

Open `script.js` and add new posts to the `blogPosts` array:

```javascript
{
    id: 7,
    title: "Your Post Title",
    excerpt: "A short description of your post",
    category: "investing",  // or "budgeting", "savings", "tips"
    tags: ["tag1", "tag2"],
    date: "2024-01-20",
    emoji: "🎯",
    content: "Full post content here..."
}
```

## Categories Available

- **investing** - Investment tips and strategies
- **budgeting** - Budget planning and management
- **savings** - Saving money techniques
- **tips** - General money-saving tips

## Adding Monetag Ad Codes

Monetag ad placeholders are located in `index.html`:

1. **Top Ad** - After hero section
   ```html
   <div id="monetag-ad-top"><!-- MONETAG AD CODE GOES HERE --></div>
   ```

2. **Middle Ad** - Between posts and categories
   ```html
   <div id="monetag-ad-middle"><!-- MONETAG AD CODE GOES HERE --></div>
   ```

3. **Bottom Ad** - Before contact section
   ```html
   <div id="monetag-ad-bottom"><!-- MONETAG AD CODE GOES HERE --></div>
   ```

Replace the comments with your Monetag ad scripts:
```html
<script async src="your-monetag-script-url"></script>
```

## Customization

### Change Blog Title
Edit the logo in `index.html`:
```html
<div class="logo">💰 Making Cents in Time</div>
```

### Change Colors
Edit `styles.css` - Main color is `#2c5aa0` (blue)

### Add More Categories
1. Add new category button in the filter section
2. Add new posts with that category in `script.js`

## Performance Tips

- Static site = Super fast ⚡
- No external dependencies
- Optimized images (emojis used instead of images)
- GitHub Pages CDN for fast delivery

## Contact & Support

For questions or support, create an issue in this repository.

## License

This blog template is free to use and modify.

---

**Happy Blogging! 💰**
