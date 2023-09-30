export enum RoutesPath {
  HOME = '/',
  ABOUT = '/about',
  BLOG = '/blog',
  APP = '/app',
  SIGNIN = '/signin',
  LOGIN = '/log-in',
}

export const pages = [
  { link: RoutesPath.BLOG, text: 'blog' },
  { link: RoutesPath.APP, text: 'app' },
  { link: RoutesPath.ABOUT, text: 'about' },
];
export const settings = [
  { link: RoutesPath.HOME, text: 'home' },
  { link: RoutesPath.HOME, text: 'dashboard' },
];
