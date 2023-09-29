import React from "react";
import Link from "next/link";
import styles from "../navigation.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <ul className={styles.flexrow}>
        <li>
          <Link href="/">
            <Image
              src="/images/logo_udla.png"
              alt="Logo"
              width={"100"}
              height={"45"}
              className="relative"
            />
          </Link>
        </li>
        <div className={styles.nav_items}>
          <li>
            <Link href="/">
              <p>Inicio</p>
            </Link>
          </li>
          <li>
            <Link href="/canchas">
              <p>Reserva Canchas</p>
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
