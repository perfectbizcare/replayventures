Replay Ventures Website V3 - ROOT IMAGE STRUCTURE

WHY YOUR IMAGES WERE BROKEN
Your GitHub repo had image files in the repository root:
  bags.jpg
  footwear.jpg
  international-shipping.jpg
  etc.

But the HTML was asking the browser to load:
  assets/bags.jpg
  assets/footwear.jpg
  assets/international-shipping.jpg

Since there was no assets/ folder on GitHub, GitHub Pages correctly returned missing images.
This V3 fixes the paths to match your CURRENT GitHub repository structure.

UPLOAD/REPLACE THESE FILES IN THE ROOT OF YOUR replayventures REPO:
- index.html
- products.html
- styles.css
- script.js
- bags.jpg
- footwear.jpg
- furniture.jpg
- toys.jpg
- electronics.jpg
- home-appliances.jpg
- cutlery.jpg
- scrap.jpg
- gym-equipment.jpg
- international-shipping.jpg

Optional:
- reference-design.jpeg
- README.txt

Do NOT put the image files inside an assets folder unless you also change the HTML paths again.

WHAT IS WORKING
- Home page product images use local JPG files
- International shipping circle uses international-shipping.jpg
- View All Products opens products.html
- Products page shows all listed products
- Product Get Quote buttons open the quote modal
- Header, hero and bottom Get a Quote buttons open the quote modal
- Quote form formats the enquiry and opens WhatsApp
- Mobile navigation works
- Tracking box works as a demo UI

IMPORTANT
Real shipment tracking requires the client's courier/freight/ERP API.
