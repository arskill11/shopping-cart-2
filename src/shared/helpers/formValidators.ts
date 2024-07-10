const EMAIL_PATTERN = '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}';
const IMAGE_URL_PATTERN = '(http(s?):)([/|.|w|s|-])*.(?:jpg|gif|png)';

export const validateEmail = (email: string) => {
  const emailRegExp = new RegExp(EMAIL_PATTERN, 'gm');

  if (!email.includes('@')) {
    return 'Email must include @';
  }
  if (!emailRegExp.test(email)) {
    return 'Email is incorrect';
  } else {
    return true;
  }
};

export const validateImageUrl = (imageUrl: string) => {
  const imageUrlRegExp = new RegExp(IMAGE_URL_PATTERN, 'gi');
  if (!imageUrlRegExp.test(imageUrl)) {
    return 'Avatar must be a correct URL';
  } else {
    return true;
  }
};

// const flags = "gm";
// const pattern = "[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}"
// const regexPattern = new RegExp(pattern, flags);
// const text =`dave@akto.co`;
// const result = text.match(regexPattern);
// console.log("Matches:", result);
