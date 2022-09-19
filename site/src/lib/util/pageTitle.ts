export default function formatPageTitle (title: string | null): string {
  if (!title) return 'Home';
  return title
    ?.replaceAll('-', ' ')
    .split(' ')
    .reduce((accum, word) => 
      `${accum} <span>${word[0].toUpperCase() + word.slice(1, word.length)}</span>`, ``) ?? '';
}