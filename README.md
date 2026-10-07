# visareadynow-passport-specs

Official biometric passport and visa photo size specifications (35x45mm, 2x2 inch, 50x70mm, 33x48mm, 50x50mm) for **200+ countries worldwide**.

Powered by [VisaReadyNow - Official Passport Photo Generator](https://visareadynow.com).

## Features

- 🌍 **200+ Countries Supported**: Exact specifications for US, Canada, UK, Australia, Schengen Europe, India, China, Japan, UAE, Brazil, and more.
- 📐 **Dual Document Support**: Query specs for both `passport` and `visa` photos.
- 📏 **Multi-Unit Output**: Dimensions provided in millimeters (`mm`), pixels (`px`), and inches (`in`).
- 🎨 **Biometric Rules**: Background color requirements, DPI, file format, max/min file size, glasses policy, and face height ratios.
- 📘 **TypeScript Ready**: Complete TypeScript interfaces out of the box.

## Installation

```bash
npm install visareadynow-passport-specs
```

## Usage

```javascript
const { getPassportSpec } = require('visareadynow-passport-specs');

// Get US Passport Spec (2x2 inches / 50.8x50.8 mm)
const usPassport = getPassportSpec('US', 'passport');
console.log(usPassport);
/*
{
  country: 'United States',
  countryCode: 'US',
  documentType: 'passport',
  widthMm: 50.8,
  heightMm: 50.8,
  widthPx: 600,
  heightPx: 600,
  widthInches: 2,
  heightInches: 2,
  backgroundColor: 'white',
  dpi: 300,
  fileFormat: 'JPEG',
  fileSizeMinKb: 100,
  fileSizeMaxKb: 240,
  glassesAllowed: false,
  label: '50.8 × 50.8 mm'
}
*/

// Get Canada Passport Spec (50x70 mm)
const caPassport = getPassportSpec('CA', 'passport');
console.log(caPassport);

// Get Schengen France Visa Spec (35x45 mm)
const frVisa = getPassportSpec('FR', 'visa');
console.log(frVisa);
```

## Official Online Generator & Specs Database

For full online photo resizing, automatic background removal, and biometric compliance verification, visit:

👉 **[https://visareadynow.com](https://visareadynow.com)**

## License

MIT © [VisaReadyNow](https://visareadynow.com)
