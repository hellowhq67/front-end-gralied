"use client";
import React from "react";
import style from "./Style.module.css";
import Link from "next/link";
export default function NestedMenu() {
  return (
    <ul className={style.nestedmenu}>
      <li>
        <Link href="/"> DESIGNERS</Link>
      </li>
      <li className={style.sub1}>
        <Link href="/"> MENSWEAR</Link>
        <ul className={style.submenu1}>
          <li>
            <Link href="/product"> ALL CATEGORIES</Link>
          </li>
          <li className={style.submenu1Sub}>
            <Link href="/products/cetagory/menswear/top">TOPS</Link>

            <ul className={style.subMenu1subMenu}>
              <li>
                <Link href="/products/cetagory/menswear/top"> LONG SLEEVE T-SHIRTS</Link>
              </li>
              <li>
                <Link href="/products/cetagory/menswear/top">POLOS </Link>
              </li>
              <li>
                <Link href="/products/cetagory/menswear/top">SHIRTS (BUTTON UPS) </Link>
              </li>
              <li>
                <Link href="/products/cetagory/menswear/top">SHORT SLEEVE T-SHIRTS </Link>
              </li>
              <li>
                <Link href="/products/cetagory/menswear/top">SHORT SLEEVE T-SHIRTS </Link>
              </li>
             
            </ul>
          </li>
        <li className={style.submenu2Sub}>
            <Link href="/products/cetagory/menswear/bottoms">BOTTOMS</Link>
            <ul className={style.subMenu2subMenu}>
              <li>
                <Link href="/products/cetagory/menswear/bottoms"> Pant</Link>
              </li>
              <li>
                <Link href="/products/cetagory/menswear/bottoms">DENIMS </Link>
              </li>
              <li>
                <Link href="/products/cetagory/menswear/bottoms">Casual</Link>
              </li>
            
             
            </ul>
          </li>
          <li>
            <Link href="">OUTERWEAR</Link>
          </li>
          <li>
            <Link href="">FOOTWEAR</Link>
          </li>
          <li>
            <Link href="">TAILORING</Link>
          </li>
          <li>
            <Link href="">ACCESSORIES</Link>
          </li>
        </ul>
      </li>
      <li  >
        <Link href=""> WOMENSWEAR</Link>
      </li>
      <li  >
        <Link href="/"> SNEAKERS</Link>
      </li>
      <li  >
        <Link href="/"> STAFF PICKS</Link>
      </li>
      <li  >
        <Link href="/products"> COLLECTIONS</Link>
      </li>
    </ul>
  );
}
