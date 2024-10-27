import Image from "next/image";
import styles from './header.module.css';
import Link from "next/link";

const Header = () => {
      return (
        <header>

   <div className={styles.header}>
                   <Image src="/logo1.png"
                    alt=""
                    width={100}
                    height={400} className="styles.logo"
               />

<nav>
    <ul className={styles.navList}>
            <li><a href= "/" className={styles.link}>Home</a></li>
            <li><Link href="/" className={styles.link}>About</Link></li>
            <li><Link href="/" className={styles.link}>Services</Link></li>
            <li><Link href="/" className={styles.link}>Contact</Link></li>
          </ul>
</nav>
</div>



<h1 className={styles.title}>
𝕎𝕖𝕝𝕔𝕠𝕞𝕖 𝕥𝕠 𝕄𝕪 𝕎𝕖𝕓𝕊𝕚𝕥𝕖...
</h1>
    
      
</header>
      );

      };

      export default Header;
