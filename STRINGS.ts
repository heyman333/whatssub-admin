const STRINGS = {
  en: { // English
    BUTTON: 'Button',
    SIGNUP: 'Sign Up',
    LOGIN: 'Login',
    LOGOUT: 'Logout',
    GOOGLE_LOGIN: 'Login with Google',
    FACEBOOK_LOGIN: 'Login with Facebook',
    EMAIL: 'Email',
    EMAIL_HINT: 'Write email address.',
    EMAIL_ERROR: 'Wrong email address',
    PASSWORD: 'Password',
    PASSWORD_HINT: 'Write password.',
    COMPLETE: 'Done',
    GOTO_Temp: 'No Page',
    BACK: 'Back',
    NAVIGATE: 'Navigate',
    CHANGE_THEME: 'Change theme',
    SIGN_IN_SCREEN: 'Sign in screen',
    MAIN_SCREEN: 'Main screen',
    UPDATE_BUTTON: 'Update',
    DELETE_BUTTON: 'Delete',
    SERVICE_LIST: 'Service List',
    SERVICE_ADD_BUTTON: 'Add Service',
    PRODUCT_LIST: 'Product List',
    PRODUCT_ADD_BUTTON: 'Add Product',
    SAVE: 'Save',
    CANCEL: 'Cancel',
    ICON: 'Icon',
    SERVICE_NAME: 'Service Name',
    SERVICE_NAME_KOR: 'Service Name(KOR)',
    WEB_PAGE: 'Web Page',
    DESCRIPTION: 'Description',
    PNG_GIF_ONLY: 'you can upload png and gif files only',
    INPUT_REQUIRED: 'is required',
    INPUT_MAX_VALIDATION: 'you exceeded max length of',
  },
  ko: { // Korean
    BUTTON: '버튼',
    SIGNUP: '회원가입',
    LOGIN: '로그인',
    LOGOUT: '로그아웃',
    GOOGLE_LOGIN: '구글 로그인',
    FACEBOOK_LOGIN: '페이스북 로그인',
    EMAIL: '이메일',
    EMAIL_ERROR: '이메일이 잘못 입력되었습니다.',
    EMAIL_HINT: '이메일 주소를 입력해주세요.',
    PASSWORD: '비밀번호',
    PASSWORD_HINT: '비밀번호를 입력해주세요.',
    COMPLETE: '완료',
    GOTO_Temp: '없는 페이지',
    BACK: '뒤로',
    NAVIGATE: '이동하기',
    CHANGE_THEME: '테마 변경',
    SIGN_IN_SCREEN: '로그인 화면',
    MAIN_SCREEN: '메인 화면',
    UPDATE_BUTTON: '수정',
    DELETE_BUTTON: '삭제',
    SERVICE_LIST: '서비스 목록',
    SERVICE_ADD_BUTTON: '서비스 추가',
    PRODUCT_LIST: '상품 목록',
    PRODUCT_ADD_BUTTON: '상품 추가',
    SAVE: '저장',
    CANCEL: '취소',
    ICON: '아이콘',
    SERVICE_NAME: '서비스명',
    SERVICE_NAME_KOR: '서비스명(한글)',
    WEB_PAGE: '웹페이지',
    DESCRIPTION: '설명',
    PNG_GIF_ONLY: 'png파일과 gif파일만 업로드 가능합니다',
    INPUT_REQUIRED: '의 입력이 필요합니다',
    INPUT_MAX_VALIDATION: '해당 길이 이상으로 입력될 수 없습니다:',
  },
  // ja: { // Japanese
  // },
  // zh: { // Chinese
  // },
  // es: { // Spanish
  // },
  // fr: { // French
  // },
  // id: { // Indonesian
  // },
};

const DEFAULT_LANG = 'en';
let lang = DEFAULT_LANG;

if (navigator) {
  lang = navigator.language.substr(0, 2);
}

export const getString = (str: string) => {
  str = STRINGS[lang]
    ? STRINGS[lang][str]
    : STRINGS[DEFAULT_LANG][str];

  if (!str) {
    str = '...';
  }
  return str;
};

export default STRINGS;
