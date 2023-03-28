import Link from 'next/link';

const path = [
  { uid: 21, name: ' Home', id: 1, path: '/' },
  { uid: 31, name: 'Projects', id: 2, path: 'projects/notBored' },
  { uid: 41, name: 'About', id: 3, path: 'about' },
];
export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          {path.map((value) => {
            return (
              <li key={value.uid}>
                <Link href={value.path}>
                  <a> {value.name} </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
