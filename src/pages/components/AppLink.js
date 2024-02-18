import Link from 'next/link';

const AppLink = (props) => {
  return (
    <Link {...props} style={{ textDecoration: 'none', color: 'inherit' }} />
  );
};

export default AppLink;
