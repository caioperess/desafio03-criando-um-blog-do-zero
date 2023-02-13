import Image from 'next/image';
import logo from '../../../public/Logo.svg';

import styles from './header.module.scss';

export default function Header(): JSX.Element {
  return (
    <div className={styles.container}>
      <Image src={logo} alt="logo" />
    </div>
  );
}
