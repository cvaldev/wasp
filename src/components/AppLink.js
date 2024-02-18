import Link from 'next/link';

export default function AppLink(props) {
  return (
    <Link {...props} style={{ textDecoration: 'none', color: 'inherit' }} />
  );
}
