export interface Language {
  display: string;
  value: string;
  lang: string;
  langs: string[];
}

const languages: Language[] = [
  { display: 'Acholi', value: 'ach,en-GB;q=0.8,en-US;q=0.5,en;q=0.3', lang: 'ach', langs: ['ach', 'en-GB', 'en-US', 'en'] },
  { display: 'Afrikaans', value: 'af,en-ZA;q=0.8,en-GB;q=0.6,en-US;q=0.4,en;q=0.2', lang: 'af', langs: ['af', 'en-ZA', 'en-GB', 'en'] },
  { display: 'Albanian', value: 'sq,sq-AL;q=0.8,en-US;q=0.5,en;q=0.3', lang: 'sq', langs: ['sq', 'sq-AL', 'en-US', 'en'] },
  { display: 'Arabic', value: 'ar,en-US;q=0.7,en;q=0.3', lang: 'ar', langs: ['ar', 'en-US', 'en'] },
  { display: 'Aragonese', value: 'an,es-ES;q=0.8,es;q=0.7,ca;q=0.5,en-US;q=0.3,en;q=0.2', lang: 'an', langs: ['an', 'es-ES', 'es', 'ca', 'en-US', 'en'] },
  { display: 'Armenian', value: 'hy-AM,hy;q=0.8,en-US;q=0.5,en;q=0.3', lang: 'hy-AM', langs: ['hy-AM', 'hy', 'en-US', 'en'] },
  { display: 'Assamese', value: 'as,en-US;q=0.7,en;q=0.3', lang: 'as', langs: ['as', 'en-US', 'en'] },
  { display: 'Asturian', value: 'ast,es-ES;q=0.8,es;q=0.6,en-US;q=0.4,en;q=0.2', lang: 'ast', langs: ['ast', 'es-ES', 'es', 'en-US', 'en'] },
  { display: 'Azerbaijani', value: 'az-AZ,az;q=0.8,en-US;q=0.5,en;q=0.3', lang: 'az-AZ', langs: ['az-AZ', 'az', 'en-US', 'en'] },
  { display: 'Basque', value: 'eu,en-US;q=0.7,en;q=0.3', lang: 'eu', langs: ['eu', 'en-US', 'en'] },
  { display: 'Belarusian', value: 'be,en-US;q=0.7,en;q=0.3', lang: 'be', langs: ['be', 'en-US', 'en'] },
  { display: 'Bengali (Bangladesh)', value: 'bn-BD,bn;q=0.8,en-US;q=0.5,en;q=0.3', lang: 'bn-BD', langs: ['bn-BD', 'bn', 'en-US', 'en'] },
  { display: 'Bengali (India)', value: 'bn-IN,bn;q=0.8,en-US;q=0.5,en;q=0.3', lang: 'bn-IN', langs: ['bn-IN', 'bn', 'en-US', 'en'] },
  { display: 'Bosnian', value: 'bs-BA,bs;q=0.8,en-US;q=0.5,en;q=0.3', lang: 'bs-BA', langs: ['bs-BA', 'bs', 'en-US', 'en'] },
  { display: 'Breton', value: 'br,fr-FR;q=0.8,fr;q=0.6,en-US;q=0.4,en;q=0.2', lang: 'br', langs: ['br', 'fr-FR', 'fr', 'en-US', 'en'] },
  { display: 'Bulgarian', value: 'bg,en-US;q=0.7,en;q=0.3', lang: 'bg', langs: ['bg', 'en-US', 'en'] },
  { display: 'Burmese', value: 'my,en-GB;q=0.7,en;q=0.3', lang: 'my', langs: ['my', 'en-GB', 'en'] },
  { display: 'Catalan', value: 'ca,en-US;q=0.7,en;q=0.3', lang: 'ca', langs: ['ca', 'en-US', 'en'] },
  { display: 'Chinese (Hong Kong)', value: 'zh-HK,zh;q=0.8,en-US;q=0.5,en;q=0.3', lang: 'zh-HK', langs: ['zh-HK', 'zh', 'en-US', 'en'] },
  { display: 'Chinese (Simplified)', value: 'zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2', lang: 'zh-CN', langs: ['zh-CN', 'zh', 'zh-TW', 'zh-HK', 'en-US', 'en'] },
  { display: 'Chinese (Traditional)', value: 'zh-TW,zh;q=0.8,en-US;q=0.5,en;q=0.3', lang: 'zh-TW', langs: ['zh-TW', 'zh', 'en-US', 'en'] },
  { display: 'Croatian', value: 'hr-HR,hr;q=0.8,en-US;q=0.5,en;q=0.3', lang: 'hr-HR', langs: ['hr-HR', 'hr', 'en-US', 'en'] },
  { display: 'Czech', value: 'cs,sk;q=0.8,en-US;q=0.5,en;q=0.3', lang: 'cs', langs: ['cs', 'sk', 'en-US', 'en'] },
  { display: 'Danish', value: 'da,en-US;q=0.7,en;q=0.3', lang: 'da', langs: ['da', 'en-US', 'en'] },
  { display: 'Dutch', value: 'nl,en-US;q=0.7,en;q=0.3', lang: 'nl', langs: ['nl', 'en-US', 'en'] },
  { display: 'English (Australian)', value: 'en-AU,en;q=0.5', lang: 'en-AU', langs: ['en-AU', 'en'] },
  { display: 'English (British)', value: 'en-GB,en;q=0.5', lang: 'en-GB', langs: ['en-GB', 'en'] },
  { display: 'English (Canadian)', value: 'en-CA,en-US;q=0.7,en;q=0.3', lang: 'en-CA', langs: ['en-CA', 'en-US', 'en'] },
  { display: 'English (South African)', value: 'en-ZA,en-GB;q=0.8,en-US;q=0.5,en;q=0.3', lang: 'en-ZA', langs: ['en-ZA', 'en-GB', 'en-US', 'en'] },
  { display: 'English (US)', value: 'en-US,en;q=0.5', lang: 'en-US', langs: ['en-US', 'en'] },
  { display: 'Esperanto', value: 'eo,en-US;q=0.7,en;q=0.3', lang: 'eo', langs: ['eo', 'en-US', 'en'] },
  { display: 'Estonian', value: 'et,et-EE;q=0.8,en-US;q=0.5,en;q=0.3', lang: 'et', langs: ['et', 'et-EE', 'en-US', 'en'] },
  { display: 'Finnish', value: 'fi-FI,fi;q=0.8,en-US;q=0.5,en;q=0.3', lang: 'fi-FI', langs: ['fi-FI', 'fi', 'en-US', 'en'] },
  { display: 'French', value: 'fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3', lang: 'fr', langs: ['fr', 'fr-FR', 'en-US', 'en'] },
  { display: 'Frisian', value: 'fy-NL,fy;q=0.8,nl;q=0.6,en-US;q=0.4,en;q=0.2', lang: 'fy-NL', langs: ['fy-NL', 'fy', 'nl', 'en-US', 'en'] },
  { display: 'Fulah', value: 'ff,fr-FR;q=0.8,fr;q=0.7,en-GB;q=0.5,en-US;q=0.3,en;q=0.2', lang: 'ff', langs: ['ff', 'fr-FR', 'fr', 'en-GB', 'en-US', 'en'] },
  { display: 'Gaelic (Scotland)', value: 'gd-GB,gd;q=0.8,en-GB;q=0.6,en-US;q=0.4,en;q=0.2', lang: 'gd-GB', langs: ['gd-GB', 'gd', 'en-GB', 'en-US', 'en'] },
  { display: 'Galician', value: 'gl-GL,gl;q=0.8,en-US;q=0.5,en;q=0.3', lang: 'gl-GL', langs: ['gl-GL', 'gl', 'en-US', 'en'] },
  { display: 'Georgian', value: 'ka,ka-GE;q=0.7,en;q=0.3', lang: 'ka', langs: ['ka', 'ka-GE', 'en'] },
  { display: 'German', value: 'de,en-US;q=0.7,en;q=0.3', lang: 'de', langs: ['de', 'en-US', 'en'] },
  { display: 'German (Switzerland)', value: 'de-CH,de;q=0.8,en-US;q=0.5,en;q=0.3', lang: 'de-CH', langs: ['de-CH', 'de', 'en-US', 'en'] },
  { display: 'Greek', value: 'el-GR,el;q=0.8,en-US;q=0.5,en;q=0.3', lang: 'el-GR', langs: ['el-GR', 'el', 'en-US', 'en'] },
  { display: 'Guarani', value: 'gn,es;q=0.8,en;q=0.5,en-US;q=0.3', lang: 'gn', langs: ['gn', 'es', 'en', 'en-US'] },
  { display: 'Gujarati (India)', value: 'gu-IN,gu;q=0.8,en-US;q=0.5,en;q=0.3', lang: 'gu-IN', langs: ['gu-IN', 'gu', 'en-US', 'en'] },
  { display: 'Hebrew', value: 'he,he-IL;q=0.8,en-US;q=0.5,en;q=0.3', lang: 'he', langs: ['he', 'he-IL', 'en-US', 'en'] },
  { display: 'Hindi (India)', value: 'hi-IN,hi;q=0.8,en-US;q=0.5,en;q=0.3', lang: 'hi-IN', langs: ['hi-IN', 'hi', 'en-US', 'en'] },
  { display: 'Hungarian', value: 'hu-HU,hu;q=0.8,en-US;q=0.5,en;q=0.3', lang: 'hu-HU', langs: ['hu-HU', 'hu', 'en-US', 'en'] },
  { display: 'Icelandic', value: 'is,en-US;q=0.7,en;q=0.3', lang: 'is', langs: ['is', 'en-US', 'en'] },
  { display: 'Indonesian', value: 'id,en-US;q=0.7,en;q=0.3', lang: 'id', langs: ['id', 'en-US', 'en'] },
  { display: 'Interlingua', value: 'ia,en-US;q=0.7,en;q=0.3', lang: 'ia', langs: ['ia', 'en-US', 'en'] },
  { display: 'Irish', value: 'ga-IE,ga;q=0.8,en-IE;q=0.7,en-GB;q=0.5,en-US;q=0.3,en;q=0.2', lang: 'ga-IE', langs: ['ga-IE', 'ga', 'en-IE', 'en-GB', 'en-US', 'en'] },
  { display: 'Italian', value: 'it-IT,it;q=0.8,en-US;q=0.5,en;q=0.3', lang: 'it-IT', langs: ['it-IT', 'it', 'en-US', 'en'] },
  { display: 'Japanese', value: 'ja,en-US;q=0.7,en;q=0.3', lang: 'ja', langs: ['ja', 'en-US', 'en'] },
  { display: 'Kabyle', value: 'kab-DZ,kab;q=0.8,fr-FR;q=0.7,fr;q=0.5,en-US;q=0.3,en;q=0.2', lang: 'kab-DZ', langs: ['kab-DZ', 'kab', 'fr-FR', 'fr', 'en-US', 'en'] },
  { display: 'Kannada', value: 'kn-IN,kn;q=0.8,en-US;q=0.5,en;q=0.3', lang: 'kn-IN', langs: ['kn-IN', 'kn', 'en-US', 'en'] },
  { display: 'Kaqchikel', value: 'cak,kaq;q=0.8,es;q=0.6,en-US;q=0.4,en;q=0.2', lang: 'cak', langs: ['cak', 'kaq', 'es', 'en-US', 'en'] },
  { display: 'Kazakh', value: 'kk,ru;q=0.8,ru-RU;q=0.6,en-US;q=0.4,en;q=0.2', lang: 'kk', langs: ['kk', 'ru', 'ru-RU', 'en-US', 'en'] },
  { display: 'Khmer', value: 'km,en-US;q=0.7,en;q=0.3', lang: 'km', langs: ['km', 'en-US', 'en'] },
  { display: 'Korean', value: 'ko-KR,ko;q=0.8,en-US;q=0.5,en;q=0.3', lang: 'ko-KR', langs: ['ko-KR', 'ko', 'en-US', 'en'] },
  { display: 'Latvian', value: 'lv,en-US;q=0.7,en;q=0.3', lang: 'lv', langs: ['lv', 'en-US', 'en'] },
  { display: 'Ligurian', value: 'lij,it;q=0.8,en-US;q=0.5,en;q=0.3', lang: 'lij', langs: ['lij', 'it', 'en-US', 'en'] },
  { display: 'Lithuanian', value: 'lt,en-US;q=0.8,en;q=0.6,ru;q=0.4,pl;q=0.2', lang: 'lt', langs: ['lt', 'en-US', 'en', 'ru', 'pl'] },
  { display: 'Lower Sorbian', value: 'dsb,hsb;q=0.8,de;q=0.6,en-US;q=0.4,en;q=0.2', lang: 'dsb', langs: ['dsb', 'hsb', 'de', 'en-US', 'en'] },
  { display: 'Macedonian', value: 'mk-MK,mk;q=0.8,en-US;q=0.5,en;q=0.3', lang: 'mk-MK', langs: ['mk-MK', 'mk', 'en-US', 'en'] },
  { display: 'Maithili', value: 'mai,hi-IN;q=0.7,en;q=0.3', lang: 'mai', langs: ['mai', 'hi-IN', 'en'] },
  { display: 'Malay', value: 'ms,en-US;q=0.7,en;q=0.3', lang: 'ms', langs: ['ms', 'en-US', 'en'] },
  { display: 'Malayalam', value: 'ml-IN,ml;q=0.8,en-US;q=0.5,en;q=0.3', lang: 'ml-IN', langs: ['ml-IN', 'ml', 'en-US', 'en'] },
  { display: 'Marathi', value: 'mr-IN,mr;q=0.8,en-US;q=0.5,en;q=0.3', lang: 'mr-IN', langs: ['mr-IN', 'mr', 'en-US', 'en'] },
  { display: 'Nepali', value: 'ne-NP,ne;q=0.8,en-US;q=0.5,en;q=0.3', lang: 'ne-NP', langs: ['ne-NP', 'ne', 'en-US', 'en'] },
  {
    display: 'Norwegian (Bokmål)',
    value: 'nb-NO,nb;q=0.9,no-NO;q=0.8,no;q=0.6,nn-NO;q=0.5,nn;q=0.4,en-US;q=0.3,en;q=0.1',
    lang: 'nb-NO',
    langs: ['nb-NO', 'nb', 'no-NO', 'no', 'nn-NO', 'nn', 'en-US', 'en'],
  },
  {
    display: 'Norwegian (Nynorsk)',
    value: 'nn-NO,nn;q=0.9,no-NO;q=0.8,no;q=0.6,nb-NO;q=0.5,nb;q=0.4,en-US;q=0.3,en;q=0.1',
    lang: 'nn-NO',
    langs: ['nn-NO', 'nn', 'no-NO', 'no', 'nb-NO', 'nb', 'en-US', 'en'],
  },
  {
    display: 'Occitan (Lengadocian)',
    value: 'oc-OC,oc;q=0.9,ca;q=0.8,fr;q=0.6,es;q=0.5,it;q=0.4,en-US;q=0.3,en;q=0.1',
    lang: 'oc-OC',
    langs: ['oc-OC', 'oc', 'ca', 'fr', 'es', 'it', 'en-US', 'en'],
  },
  { display: 'Odia', value: 'or,en-US;q=0.7,en;q=0.3', lang: 'or', langs: ['or', 'en-US', 'en'] },
  { display: 'Persian', value: 'fa-IR,fa;q=0.8,en-US;q=0.5,en;q=0.3', lang: 'fa-IR', langs: ['fa-IR', 'fa', 'en-US', 'en'] },
  { display: 'Polish', value: 'pl,en-US;q=0.7,en;q=0.3', lang: 'pl', langs: ['pl', 'en-US', 'en'] },
  { display: 'Portuguese (Brazilian)', value: 'pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3', lang: 'pt-BR', langs: ['pt-BR', 'pt', 'en-US', 'en'] },
  { display: 'Portuguese (Portugal)', value: 'pt-PT,pt;q=0.8,en;q=0.5,en-US;q=0.3', lang: 'pt-PT', langs: ['pt-PT', 'pt', 'en-US', 'en'] },
  { display: 'Punjabi (India)', value: 'pa,pa-IN;q=0.8,en-US;q=0.5,en;q=0.3', lang: 'pa', langs: ['pa', 'pa-IN', 'en-US', 'en'] },
  { display: 'Romanian', value: 'ro-RO,ro;q=0.8,en-US;q=0.6,en-GB;q=0.4,en;q=0.2', lang: 'ro-RO', langs: ['ro-RO', 'ro', 'en-US', 'en-GB', 'en'] },
  { display: 'Romansh', value: 'rm,rm-CH;q=0.8,de-CH;q=0.7,de;q=0.5,en-US;q=0.3,en;q=0.2', lang: 'rm', langs: ['rm', 'rm-CH', 'de-CH', 'de', 'en-US', 'en'] },
  { display: 'Russian', value: 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3', lang: 'ru-RU', langs: ['ru-RU', 'ru', 'en-US', 'en'] },
  { display: 'Serbian', value: 'sr,sr-RS;q=0.8,sr-CS;q=0.6,en-US;q=0.4,en;q=0.2', lang: 'sr', langs: ['sr', 'sr-RS', 'sr-CS', 'en-US', 'en'] },
  { display: 'Sinhala', value: 'si,si-LK;q=0.8,en-GB;q=0.5,en;q=0.3', lang: 'si', langs: ['si', 'si-LK', 'en-GB', 'en'] },
  { display: 'Slovak', value: 'sk,cs;q=0.8,en-US;q=0.5,en;q=0.3', lang: 'sk', langs: ['sk', 'cs', 'en-US', 'en'] },
  { display: 'Slovenian', value: 'sl,en-GB;q=0.7,en;q=0.3', lang: 'sl', langs: ['sl', 'en-GB', 'en'] },
  { display: 'Songhai', value: 'son,son-ML;q=0.8,fr;q=0.6,en-US;q=0.4,en;q=0.2', lang: 'son', langs: ['son', 'son-ML', 'fr', 'en-US', 'en'] },
  { display: 'Spanish (Argentina)', value: 'es-AR,es;q=0.8,en-US;q=0.5,en;q=0.3', lang: 'es-AR', langs: ['es-AR', 'es', 'en-US', 'en'] },
  { display: 'Spanish (Chile)', value: 'es-CL,es;q=0.8,en-US;q=0.5,en;q=0.3', lang: 'es-CL', langs: ['es-CL', 'es', 'en-US', 'en'] },
  { display: 'Spanish (Mexico)', value: 'es-MX,es;q=0.8,en-US;q=0.5,en;q=0.3', lang: 'es-MX', langs: ['es-MX', 'es', 'en-US', 'en'] },
  { display: 'Spanish (Spain)', value: 'es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3', lang: 'es-ES', langs: ['es-ES', 'es', 'en-US', 'en'] },
  { display: 'Swedish', value: 'sv-SE,sv;q=0.8,en-US;q=0.5,en;q=0.3', lang: 'sv-SE', langs: ['sv-SE', 'sv', 'en-US', 'en'] },
  { display: 'Tamil', value: 'ta-IN,ta;q=0.8,en-US;q=0.5,en;q=0.3', lang: 'ta-IN', langs: ['ta-IN', 'ta', 'en-US', 'en'] },
  { display: 'Telugu', value: 'te-IN,te;q=0.8,en-US;q=0.5,en;q=0.3', lang: 'te-IN', langs: ['te-IN', 'te', 'en-US', 'en'] },
  { display: 'Thai', value: 'th,en-US;q=0.7,en;q=0.3', lang: 'th', langs: ['th', 'en-US', 'en'] },
  { display: 'Turkish', value: 'tr-TR,tr;q=0.8,en-US;q=0.5,en;q=0.3', lang: 'tr-TR', langs: ['tr-TR', 'tr', 'en-US', 'en'] },
  { display: 'Ukranian', value: 'uk,ru;q=0.8,en-US;q=0.5,en;q=0.3', lang: 'uk', langs: ['uk', 'ru', 'en-US', 'en'] },
  { display: 'Upper Sorbian', value: 'hsb,dsb;q=0.8,de;q=0.6,en-US;q=0.4,en;q=0.2', lang: 'hsb', langs: ['hsb', 'dsb', 'de', 'en-US', 'en'] },
  { display: 'Urdu', value: 'ur-PK,ur;q=0.8,en-US;q=0.5,en;q=0.3', lang: 'ur-PK', langs: ['ur-PK', 'ur', 'en-US', 'en'] },
  { display: 'Uzbek', value: 'uz,ru;q=0.8,en;q=0.5,en-US;q=0.3', lang: 'uz', langs: ['uz', 'ru', 'en', 'en-US'] },
  { display: 'Vietnamese', value: 'vi-VN,vi;q=0.8,en-US;q=0.5,en;q=0.3', lang: 'vi-VN', langs: ['vi-VN', 'vi', 'en-US', 'en'] },
  { display: 'Welsh', value: 'cy-GB,cy;q=0.8,en-US;q=0.5,en;q=0.3', lang: 'cy-GB', langs: ['cy-GB', 'cy', 'en-US', 'en'] },
  { display: 'Xhosa', value: 'xh-ZA,xh;q=0.8,en-US;q=0.5,en;q=0.3', lang: 'xh-ZA', langs: ['xh-ZA', 'xh', 'en-US', 'en'] },
];

export { languages };
