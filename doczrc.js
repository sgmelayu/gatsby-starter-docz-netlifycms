const projectRoot = __dirname.replace('/.docz', '');

const { menuItems } = require(`${projectRoot}/config/menu.json`);

export default {
  base: '/',
  files: '/docs/**/*.{html,md,markdown,mdx}',
  title: 'Legal Policies For SGMelayu Online',
  menu: menuItems
}
