# Website Interface Contract

## Page Structure

### Header Section
- **brandName**: string - Name of the business
- **tagline**: string - Business tagline
- **navigation**: object - Contains navigation elements

### Products Section
- **products**: array - List of products
  - **name**: string - Product name (Juice, Biscuit, Nimco)
  - **description**: string - 1-line product description
  - **image**: string - Path to product image

### About Section
- **content**: string - Short business introduction

### Contact Section
- **phone**: string - Contact phone number
- **whatsapp**: string - WhatsApp contact information

### Footer Section
- **content**: string - Footer information

## Visual Requirements
- Mobile-first responsive design
- Clean, minimal aesthetic
- Simple English language throughout
- Fast loading (<2 seconds)
- Accessible to screen readers