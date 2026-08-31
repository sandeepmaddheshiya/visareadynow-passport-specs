export interface SpecDetails {
  country: string;
  countryCode: string;
  documentType: 'passport' | 'visa' | string;
  widthMm: number;
  heightMm: number;
  widthPx: number;
  heightPx: number;
  widthInches: number;
  heightInches: number;
  backgroundColor: string;
  dpi: number;
  fileFormat: string;
  fileSizeMinKb: number;
  fileSizeMaxKb: number;
  glassesAllowed: boolean;
  faceHeightMin?: number;
  faceHeightMax?: number;
  label: string;
}

export interface CountryEntry {
  country: string;
  code: string;
  specs: Record<string, SpecDetails>;
}

export declare const photoSpecs: Record<string, CountryEntry>;

/**
 * Get official passport or visa photo specification for a given country ISO code
 * @param code 2-letter ISO country code (e.g. 'US', 'AU', 'CA', 'FR', 'IN')
 * @param docType Document type ('passport' or 'visa')
 */
export declare function getPassportSpec(code?: string, docType?: 'passport' | 'visa' | string): SpecDetails;
