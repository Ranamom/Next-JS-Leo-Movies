import Link from "next/link";
import React from "react";
import styles from "@/app/styles/footer.module.css";
import glb from "@/app/page.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={glb.subWidth}>
        <div className={styles.top}>
          <div>
            <h1>Leo Movie</h1>
            <p>Watch latest movies and TV shows here.</p>
          </div>
          <div>
            <Link href="/">
              <i className="fa-brands fa-facebook-square"></i>
            </Link>
            <Link href="/">
              <i className="fa-brands fa-instagram-square"></i>
            </Link>
            <Link href="/">
              <i className="fa-brands fa-behance-square"></i>
            </Link>
            <Link href="/">
              <i className="fa-brands fa-twitter-square"></i>
            </Link>
          </div>
        </div>
        <div className={styles.bottom}>
          <div>
            <h4>Project</h4>
            <Link href="/">Changelog</Link>
            <Link href="/">Status</Link>
            <Link href="/">License</Link>
            <Link href="/">All Versions</Link>
          </div>
          <div>
            <h4>Community</h4>
            <Link href="/">GitHub</Link>
            <Link href="/">Issues</Link>
            <Link href="/">Project</Link>
            <Link href="/"> Twitter</Link>
          </div>
          <div>
            <h4>Help</h4>
            <Link href="/">Support</Link>
            <Link href="/">Troubleshooting</Link>
            <Link href="/">Contact Us</Link>
          </div>
          <div>
            <h4>Others</h4>
            <Link href="/">Terms of Service</Link>
            <Link href="/">Privacy Policy</Link>
            <Link href="/">License</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
