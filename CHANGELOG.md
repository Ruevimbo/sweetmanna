## Changelog

**(2025-08-27)**  

- **v1.0:** Created the initial project structure with HTML files:  
  - `index.html` (Home)  
  - `about.html` (About Us)  
  - `products.html` (Menu & Services)  
  - `gallery.html` (Gallery)  
  - `contact_us.html` (Contact Us)  
  - Added a folder for images (`_images`) to store product and branding images.  
  - Added a folder for Sweet Manna Business Plan (`_private`) to store all information needed on the business.  
  - `style,css` (All the styling of all the pages)
  - `readme` (Information on the Website - Sweet Manna.)  


- **v1.1:** Developed Home page with basic content and navigation:  
  - Added header with bakery logo, tagline, and welcome message.  
  - Created a navigation bar linking to all pages.  
  - Included featured product categories (Cakes, Cupcakes, Biscuits/Cookies, Brownies/Bars, Pastries, Sweet Snacks) with images, short descriptions, and “More…” links to the products page.  
  - Added a Daily Inspiration section with Bible verse.  
  - Added footer with copyright and bakery interior image.  

- **v1.2:** Built About Us page with full business details:  
  - Added bakery story, mission, and vision statements.  
  - Created a “Core Value” section listing all that the business - Sweet Manna standard for and live for.
  - added story on how we came up with the name "Sweet Manna"
  - Designed a Team section with descriptions for each role (Head Baker, Kitchen Crew, Decorators, Customer Service, Delivery, Marketing & Social Media).  
  - Added contact information at the bottom (email, phone, physical address).  

- **v1.3:** Developed Products (Menu) page with all categories:  
  - Added Cakes, Cupcakes, Biscuits/Cookies, Brownies/Bars, and Pastries sections with images, detailed descriptions, and prices.  
  - Added Delivery section explaining local delivery and collection options.  
  - Added Checkout form with fields for name, address, phone number, order details, and payment method.  
  - Included relevant Bible verse for inspiration.  

- **v1.4:** Created Gallery page:  
  - Added images of all products organized by category.  
  - Included captions for each product for clarity.  
  - Ensured consistency with branding and product presentation.  

- **v1.5:** Developed Contact Us page:  
  - Added bakery address, email, and phone number.  
  - Created a functional contact form for users to send messages.  
  - Embedded Google Maps for easy navigation to bakery location.  

- **v1.6:** Drafted README.md with project documentation:  
  - Included project overview, purpose, sitemap, file structure, tech stack, and future improvements.  
  - Added detailed descriptions for each page and its contents.  
  - Provided business plan goals, mission, vision, and team details. 

**(2025-09-22)**
- **v1.7:** Major improvements and refinements:  
  - **Updated Goals and Objectives:** Changed wording to fully meet marking rubric requirements.  
  - **Revised Timeline:** Updated to include days and months, not just weeks.  
  - **Enhanced Sitemap:** Added more detailed structure as requested by the lecturer.  
  - **Improved Layout Structure:** Adjusted HTML tag structure for a more appealing and clean page layout. 
  **Added Sweet Snacks Section:** Highlighted and added "snack treats" option to the menu on the Products & Services page. For it was forgotten to be added.  
  - **About Page Enhancements:**  
    - Removed “What We Do” section.  
    - Added **Core Values** and **Story on the origin of the name Sweet Manna**.  
    - Re-worded all content to explain the bakery’s story and values more clearly and professionally. 
  - **Added Rotating Bible Verses on Home Page:**  
  In Part 1, I did not include the inspirational Bible verses on `index.html` because I wasn’t sure how to implement a rotation effect. In Part 2, I added multiple verses (Matthew 6:11, Psalm 34:8, Psalm 23:1, Philippians 4:13, Proverbs 3:5) and implemented a rotation effect so that each verse displays one at a time dynamically. This improves the Home page by making it more engaging and spiritually uplifting for visitors.

  - **References:** Organized all sources in alphabetical order according to academic standards. 
  - Added style.css file that holds all the css for all the pages of Sweet Manna. as it is required in Part 2.
  - Ensured all navigation links are correct and consistent.  
  - Checked image alt attributes for accessibility.  
  - Reviewed HTML structure for semantic correctness.  
  - Ensured all pages have consistent headers, footers, and branding.

**(2025-10-24)**  
- **v1.8 — Major Design Enhancements, Layout Refinements, and Animation Improvements**  
  - **Homepage Enhancements:**  
    - Added a hero image (`_images/cef6359207669b9d78226b970ba34ca9.jpg`) to create a strong visual introduction and make the website more visually engaging.  
    - Optimized image quality and alignment for better responsiveness.  
    - Ensured the hero section matches the bakery’s warm, faith-inspired brand tone.  

  - **Footer Improvements:**    
    - Improved background color contrast, alignment, and spacing for a polished look.  
    - Enhanced readability and overall presentation for consistency across pages.  

  - **Animation & Visual Effects:**  
    - Added gold confetti animation to symbolize “manna falling from heaven,” giving a more symbolic and memorable experience.  
    - Adjusted animation timing and fade-in effects for smoother, faster page transitions.  
    - Removed slow scroll animations and replaced them with quicker, cleaner fade-ins on page load.  

  - **Contact Page Refinements:**  
    - Centered the location map and title for a balanced and professional layout.  
    - Improved form spacing, labels, and button presentation for better usability.  
    - Ensured visual consistency with the rest of the site’s design theme.  

  - **CSS and Layout Updates:**  
    - All new design features and effects were added to the central `style.css` file.  
    - Introduced a purple theme for the footer and hero section to strengthen brand identity.  
    - Adjusted font sizes, spacing, and hover effects for a more cohesive appearance.  

  - **Navigation & Structure:**  
    - Double-checked all page links for accuracy and consistency.  
    - Cleaned up HTML structure for proper semantics and easier maintenance.  

  - **Overall Result:**  
    - The website now looks more professional, modern, and visually appealing.  
    - It has improved interactivity, performance, and emotional appeal through color, layout, and subtle motion effects.  
    - The overall user experience feels smoother, engaging, and true to the Sweet Manna brand identity.  

**(2025-11-01)**  
- **v1.9 — Functional Enhancements, SEO, Security, and Additional Pages**  

  - **JavaScript Enhancements:**  
    - Consolidated all scripts into a single `script.js` file for easier management and better performance.  
    - Added daily verse rotator, page fade-ins, smooth scroll navigation, contact form handling, checkout table calculations, FAQ accordion functionality, modals, button hover glow, confetti animation, and zoomable images.  
    - Improved readability and maintainability by adding comments in all JavaScript functions.  

  - **SEO and Meta Improvements:**  
    - Added both on-page and off-page SEO tags to all HTML files, including meta description, keywords, author, Open Graph (OG), and Twitter card tags.  
    - Purpose: Improve search engine visibility and social media sharing.  

  - **Inquiry Page:**  
    - Added a new inquiry page as requested.  
    - Linked inquiry page to `script.js` and `style.css` for consistent functionality and design.  
    - Updated navigation menus to include the inquiry page, ensuring seamless site navigation.  

  - **Security Enhancements:**  
    - Implemented Content Security Policy (CSP) headers across all pages.  
    - Secured all external resources to reduce risk of malicious scripts or attacks.  

  - **Robots.txt & Sitemap:**  
    - Added `robots.txt` to guide search engine crawlers.  
    - Added `sitemap.xml` to improve indexing and ensure all pages are discoverable by search engines.  

  - **Social Media Integration:**  
    - Added links to Facebook, Instagram, and TikTok in the footer.  
    - Improved visibility and accessibility of social media connections.  

  - **FAQs Section:**  
    - Added FAQ accordion functionality to the Contact Us page.  
    - Purpose: Provide quick answers to common questions and improve user experience.  

  - **Comments Across Files:**  
    - Added detailed comments to HTML, CSS, and JS files to enhance readability and ease of future maintenance.  

  -  **References** 
    - Adeded more references as i have used other ways to help me understand and code my website properly.

    **Improved HTML Structure on All Pages**
- Reorganized and cleaned up the HTML structure across all files.
- Fixed improper nesting, added semantic tags where necessary (header, main, footer, section).
- Purpose: Comply with lecturer feedback, improve maintainability, readability, and accessibility.


  - **Overall Result:**  
    - Website now has improved functionality, SEO, security, and navigation.  
    - User experience enhanced with interactive features, FAQs, and smoother animations.  
    - Fully centralized scripts and styling ensure consistency across all pages and simplify future updates.  



  

---

## References    

- Canva. (2025). *Design inspiration and templates.* Retrieved from: https://www.canva.com  
- Investopedia. (2024). *How Digital Marketing Can Help a Business Succeed.* Retrieved from: https://www.investopedia.com  
- OpenAI. (2025). *ChatGPT – Project structure and planning support.* Retrieved from: https://chat.openai.com  
- Pinterest. (2025). *Creative bakery ideas.* Retrieved from: https://www.pinterest.com  
- Reddit users. (2024). *Advice on Cheap Hosting and Domains in South Africa.* r/johannesburg. .co.za domains ~R100/year, free or cheap hosting options.  
- Smith, J. (2023). *The Role of Faith in Christian Small Business Branding.* Cape Town: Divine Business Publishing.  

- Contentsquare (2024) *Web design checklist: 15 steps to creating an amazing site*. [online] Available at: <https://contentsquare.com/guides/web-design/checklist/> [Accessed 3 Nov 2025].  
  Source: contentsquare.com
- Neil Patel (2025) *10 Best Practice to Improve Your SEO Rankings in 2025*. [online] Available at: <https://backlinko.com/hub/seo/best-practices> [Accessed 3 Nov 2025].  
  Source: Backlinko
   Google Search Central (2025) *How To Add Javascript in your Website as an xEternal File*. [online] Available at: <https://developers.google.com/search/docs/fundamentals/seo-starter-guide> [Accessed 3 Nov 2025].  
  Source: developers.google.com

