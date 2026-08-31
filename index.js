/**
 * Official Passport & Visa Photo Specifications Database (190+ Countries)
 * Powered by VisaReadyNow (https://visareadynow.com)
 */

const rawCountries = require('./countries-data.json');

const photoSpecs = {};

for (const item of rawCountries) {
  const code = item.country_code ? item.country_code.toUpperCase() : null;
  if (!code) continue;

  if (!photoSpecs[code]) {
    photoSpecs[code] = {
      country: item.country_name,
      code: code,
      specs: {}
    };
  }

  const docType = item.document_type || 'passport';
  photoSpecs[code].specs[docType] = {
    country: item.country_name,
    countryCode: code,
    documentType: docType,
    widthMm: item.size_mm ? item.size_mm[0] : 35,
    heightMm: item.size_mm ? item.size_mm[1] : 45,
    widthPx: item.size_px ? item.size_px[0] : 413,
    heightPx: item.size_px ? item.size_px[1] : 531,
    widthInches: item.size_inches ? item.size_inches[0] : 1.38,
    heightInches: item.size_inches ? item.size_inches[1] : 1.77,
    backgroundColor: item.background_color || 'white',
    dpi: item.dpi || 300,
    fileFormat: item.file_format || 'JPEG',
    fileSizeMinKb: item.file_size_kb_min ?? 0,
    fileSizeMaxKb: item.file_size_kb_max ?? 2048,
    glassesAllowed: item.glasses_allowed ?? false,
    faceHeightMin: item.face_height_min,
    faceHeightMax: item.face_height_max,
    label: `${item.size_mm ? item.size_mm[0] + ' × ' + item.size_mm[1] + ' mm' : '35 × 45 mm'}`
  };
}

/**
 * Get official passport or visa photo specification for a given country ISO code
 * @param {string} code - 2-letter ISO country code (e.g. 'US', 'AU', 'CA', 'FR', 'IN')
 * @param {string} [docType='passport'] - 'passport' or 'visa'
 * @returns {object} Photo specification details
 */
function getPassportSpec(code, docType = 'passport') {
  if (!code) return photoSpecs.US.specs.passport;
  const normalized = String(code).trim().toUpperCase();
  const countryEntry = photoSpecs[normalized] || photoSpecs.US;
  return countryEntry.specs[docType] || countryEntry.specs.passport || countryEntry.specs[Object.keys(countryEntry.specs)[0]];
}

module.exports = {
  photoSpecs,
  getPassportSpec
};
