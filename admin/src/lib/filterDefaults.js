/**
 * Default filter-bar config — mirrors the customer engine's
 * dbDefaultFilterBarConfig() so the admin edits from the exact baseline the
 * dashboard uses. Region options are injected live from /api/regions.
 */
export function defaultFilterBar() {
  return {
    filters: [
      { key: 'branch', labelEn: 'Branch', labelAr: 'الفرع', allValue: 'All Branches', allLabelEn: 'All Branches', allLabelAr: 'جميع الفروع', options: [
        { value: 'Riyadh', labelEn: 'Riyadh', labelAr: 'الرياض' }, { value: 'Jeddah', labelEn: 'Jeddah', labelAr: 'جدة' }, { value: 'Dammam', labelEn: 'Dammam', labelAr: 'الدمام' },
      ] },
      { key: 'gender', labelEn: 'Gender', labelAr: 'الجنس', allValue: 'All Genders', allLabelEn: 'All Genders', allLabelAr: 'الجنسين', options: [
        { value: 'Male', labelEn: 'Male', labelAr: 'ذكر' }, { value: 'Female', labelEn: 'Female', labelAr: 'أنثى' },
      ] },
      { key: 'service', labelEn: 'Service', labelAr: 'الخدمة', allValue: 'All Services', allLabelEn: 'All Services', allLabelAr: 'جميع الخدمات', options: [
        { value: 'Mechanical', labelEn: 'Mechanical', labelAr: 'ميكانيكي' }, { value: 'Bodyshop', labelEn: 'Bodyshop', labelAr: 'هيكل السيارة' },
      ] },
      { key: 'frequency', labelEn: 'Frequency', labelAr: 'تكرار الزيارات', allValue: 'All Frequencies', allLabelEn: 'All Frequencies', allLabelAr: 'كل التكرارات', options: [
        { value: '1 Visit', labelEn: '1 Visit', labelAr: 'زيارة واحدة' }, { value: '2–3 Visits', labelEn: '2–3 Visits', labelAr: '2–3 زيارات' }, { value: '4+ Visits', labelEn: '4+ Visits', labelAr: '4+ زيارات' },
      ] },
      { key: 'age', labelEn: 'Age', labelAr: 'العمر', allValue: 'All Ages', allLabelEn: 'All Ages', allLabelAr: 'كل الأعمار', options: [
        { value: '<25', labelEn: '<25', labelAr: 'أقل من 25' }, { value: '25–34', labelEn: '25–34', labelAr: '25–34' }, { value: '35–44', labelEn: '35–44', labelAr: '35–44' }, { value: '45+', labelEn: '45+', labelAr: '45+' },
      ] },
      { key: 'extra1', labelEn: 'Nationality', labelAr: 'الجنسية', allValue: '__ALL__', allLabelEn: 'All', allLabelAr: 'الكل', options: [
        { value: 'Saudi', labelEn: 'Saudi', labelAr: 'سعودي' }, { value: 'Non-Saudi', labelEn: 'Non-Saudi', labelAr: 'غير سعودي' },
      ] },
      { key: 'extra2', labelEn: 'Who paid', labelAr: 'من قام بالدفع', allValue: '__ALL__', allLabelEn: 'All', allLabelAr: 'الكل', options: [
        { value: 'Self', labelEn: 'Self', labelAr: 'ذاتي' }, { value: 'Insurance', labelEn: 'Insurance', labelAr: 'تأمين' }, { value: 'Company', labelEn: 'Company', labelAr: 'شركة' },
      ] },
      { key: 'extra3', labelEn: 'Day part', labelAr: 'فترة اليوم', allValue: '__ALL__', allLabelEn: 'All', allLabelAr: 'الكل', options: [
        { value: 'Weekday', labelEn: 'Weekday', labelAr: 'يوم عمل' }, { value: 'Weekend', labelEn: 'Weekend', labelAr: 'عطلة' },
      ] },
      { key: 'region', labelEn: 'Region', labelAr: 'المنطقة', allValue: 'All Regions', allLabelEn: 'All Regions', allLabelAr: 'كل المناطق', options: [] },
    ],
  };
}

export const FILTER_META = {
  branch: 'Branch (DB master) — mutually exclusive with Region',
  region: 'Region (DB master) — options come from Regions; mutually exclusive with Branch',
  service: 'Service line',
  gender: 'Gender',
  age: 'Age group',
  frequency: 'Visit frequency',
  extra1: 'Extra filter 1 (e.g. Nationality)',
  extra2: 'Extra filter 2 (e.g. Who paid)',
  extra3: 'Extra filter 3 (e.g. Day part)',
};
