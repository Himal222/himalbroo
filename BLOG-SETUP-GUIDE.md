# 📘 Blog Page - Quick Setup Guide

## 🎯 What You Got

✅ **blogs-page.html** - Blog page with card layout (like image 1)
✅ **blogs-page.css** - Dark theme styling (like image 2)

## 📋 Features

### Layout (from Image 1):
- ✅ Blog cards with featured images
- ✅ Author info (Himal Bhaandari)
- ✅ Reading time and date
- ✅ Tags with icons
- ✅ "Read More" button with arrow

### Styling (from Image 2):
- ✅ Dark navy background (#0a1929)
- ✅ Gold accents for hover effects
- ✅ Blue titles (matching the footer image)
- ✅ Gray text for descriptions
- ✅ Clean, professional look

## 🚀 How to Use - 3 Simple Steps

### STEP 1: Open blogs-page.html

Find these placeholder sections:

```html
<!-- ============================================ -->
<!-- PASTE YOUR NAVBAR HERE -->
<!-- ============================================ -->
```

and

```html
<!-- ============================================ -->
<!-- PASTE YOUR FOOTER HERE -->
<!-- ============================================ -->
```

### STEP 2: Copy Your Navbar

1. Open your main HTML file (the one with navbar)
2. Copy the ENTIRE navbar section from `<nav>` to `</nav>`
3. Paste it in the "PASTE YOUR NAVBAR HERE" section in blogs-page.html
4. **Important:** Add `class="active"` to the BLOGS link:
   ```html
   <li><a href="blogs.html" class="active">BLOGS</a></li>
   ```

### STEP 3: Copy Your Footer

1. From your main HTML file, copy the ENTIRE footer section from `<footer>` to `</footer>`
2. Paste it in the "PASTE YOUR FOOTER HERE" section in blogs-page.html
3. Don't forget to paste the JavaScript link too:
   ```html
   <script src="blog-script.js"></script>
   ```

## ✅ Final Structure

Your blogs-page.html should look like:

```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="blogs-page.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    
    <!-- YOUR NAVBAR (pasted) -->
    <nav class="navbar">
        ...
    </nav>
    
    <!-- PAGE HEADER -->
    <section class="page-header">
        <h1 class="page-title">Blog</h1>
    </section>
    
    <!-- BLOG CARDS -->
    <section class="blog-section">
        <!-- 4 blog cards here -->
    </section>
    
    <!-- YOUR FOOTER (pasted) -->
    <footer class="footer">
        ...
    </footer>
    
    <!-- YOUR JAVASCRIPT -->
    <script src="blog-script.js"></script>
    
</body>
</html>
```

## 🎨 What's Included

### 4 Blog Cards About Civil Engineering:

1. **Sustainable Construction Practices**
   - Tags: Sustainability, Green Building, Construction
   - 6 min read

2. **Smart Infrastructure: IoT Revolution**
   - Tags: IoT, Smart Cities, Technology
   - 12 min read

3. **Building Information Modeling**
   - Tags: BIM, Design, 3D Modeling
   - 8 min read

4. **Seismic Design: Earthquake-Resistant Structures**
   - Tags: Seismic, Geotechnical, Safety
   - 10 min read

## 📝 Customization

### Change Blog Content:
Edit the text in `blogs-page.html` - look for:
- `<h2 class="blog-title">` - Blog title
- `<p class="blog-excerpt">` - Description
- `<span class="tag">` - Tags
- `<a href="blog-post-X.html">` - Link to full article

### Change Images:
Replace the image URLs in `<img src="...">` tags with your own images

### Change Colors:
Edit `blogs-page.css` - change these CSS variables:
```css
:root {
    --primary-dark: #0a1929;      /* Background color */
    --accent-gold: #d4af37;       /* Gold accent */
    --text-light: #e8e8e8;        /* Light text */
    --text-gray: #b0b0b0;         /* Gray text */
}
```

## 📁 File Structure

```
your-website/
├── index.html           (your main page)
├── blogs-page.html      (NEW - blog page)
├── blogs-page.css       (NEW - blog styles)
├── blog-script.js       (your existing JS)
└── ...
```

## ⚠️ Important Notes

1. **CSS File Name**: The HTML links to `blogs-page.css` - make sure the name matches!

2. **Font Awesome**: Already included in the HTML for icons

3. **JavaScript**: Link your existing JS file at the bottom:
   ```html
   <script src="blog-script.js"></script>
   ```

4. **Responsive**: The page is fully responsive and works on mobile, tablet, and desktop

5. **Hover Effects**: 
   - Cards lift up on hover
   - Images zoom slightly
   - Buttons animate
   - Tags light up

## 🔍 Troubleshooting

**Navbar looks broken?**
- Check if you copied the ENTIRE `<nav>` section
- Make sure `blogs-page.css` is in the same folder

**Footer looks broken?**
- Check if you copied the ENTIRE `<footer>` section
- Make sure all social media icons use Font Awesome

**Mobile menu doesn't work?**
- Make sure you linked your JavaScript file
- Check if JS file has hamburger menu code

**Wrong page highlighted in navbar?**
- Add `class="active"` to the BLOGS link

## 🎉 You're Done!

Your blog page now has:
- ✅ Same navbar as main page
- ✅ Same footer as main page
- ✅ Card layout with images (like image 1)
- ✅ Dark theme with gold accents (like image 2)
- ✅ Fully responsive design
- ✅ Professional look

## 📞 Quick Checklist

- [ ] Copied navbar from main HTML
- [ ] Copied footer from main HTML
- [ ] Linked JavaScript file
- [ ] Added `class="active"` to BLOGS link
- [ ] Tested in browser
- [ ] Mobile menu works
- [ ] All links work

**Happy Blogging! 🚀**
