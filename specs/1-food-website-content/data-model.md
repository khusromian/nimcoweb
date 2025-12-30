# Data Model: Food Website

## Entities

### Product
- **name**: string (Juice, Biscuit, or Nimco)
- **description**: string (1-line description)
- **image**: string (path to product image)
- **order**: integer (position in display sequence)

### Business
- **name**: string ("Fresh Bites")
- **tagline**: string ("Delicious food made fresh daily")
- **about**: string (short business introduction)
- **contact_phone**: string (phone number)
- **contact_whatsapp**: string (WhatsApp number)

### PageSection
- **header**: object (brand name, tagline)
- **products**: array of Product (Juice, Biscuit, Nimco)
- **about**: string (business introduction)
- **contact**: object (phone, WhatsApp)
- **footer**: object (copyright, additional info)