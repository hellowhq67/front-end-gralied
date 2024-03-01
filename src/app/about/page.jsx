import Navbar from "@/components/Navigations/Navbar";
import NestedMenu from "@/components/Navigations/NestedMenu";
import React from "react";
import styles from "./style.module.css";
import Footer from "@/components/Navigations/Footer";

export default function page() {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: "4rem", borderBottom: "1px solid black" }}>
        <NestedMenu />
      </div>
      <div
        className={styles.bannerCOl}
        style={{
          backgroundImage:
            "url('https://images.ctfassets.net/bdvz0u6oqffk/6Nt6EReVvGm6QkCuGyqkK/68ea21684b8178c18ffc60d66e26d032/about-hero.jpg')",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <h1 className={styles.bannerText}>
            Grailed is the one stop destination <br /> for buying selling and
            exploring <br /> menswear and womenswear import Navbar from{" "}
          </h1>
          <button>EXPLORE</button>
        </div>
      </div>
      <div className={styles.contentCol}>
        <div className={styles.contentCards}>
          <img
            src="https://images.ctfassets.net/bdvz0u6oqffk/6Ry5ndBEQWe7QuTbDL29lB/ebad1225ee429d3697627b7c822d039e/Screenshot_2019-03-11_19.07.10.png"
            alt=""
          />
          <div className={styles.desc}>
            <h2>The Best Selection, at the Best Prices</h2>
            <p>
              Browse our marketplace for incredible new and used clothing that
              you cant find anywhere else. We curate the largest men’s fashion
              marketplace, with new products arriving every day. Grailed, with
              help from community, ensures all items are authentic. If anything
              goes wrong, every transaction conducted through Grailed with
              PayPal is eligible for a full refund.
            </p>
            <div className={styles.buttons}>
              <button className={styles.btn}> BROWSE THE SHOP</button>
              <button className={styles.btn}>BUYER PROTECTION</button>
            </div>
          </div>
        </div>
        <div className={styles.contentCards}>
          <div className={styles.desc}>
            <h2>Make Money From Your Closet</h2>
            <p>
              Your closet is valuable. Flip your wardrobe on Grailed and find
              like-minded buyers from within our community. Listing an item is
              always free.
            </p>
            <div className={styles.buttons}>
              <button className={styles.btn}> SELL ITEM</button>
              <button className={styles.btn}>SELLER PROTECTION</button>
            </div>
          </div>
          <img
            src="https://images.ctfassets.net/bdvz0u6oqffk/5MyOj39KBaWYsYcM8MqoIy/5bf97a9b7b0255d1566072b05c108040/ccp.jpg"
            alt=""
          />
        </div>
      </div>
      <div
        className={styles.bannerCOl2}
        style={{
          backgroundImage:
            "url(' https://images.ctfassets.net/bdvz0u6oqffk/2tqXZIj93WYMs8kgGi0kmu/6ca7b2e30f323ce1b25fbef662c06a8b/fee-back.jpg')",
        }}
      >
        
      </div>

      <div className={styles.contentCol}>
        <div className={styles.contentCards}>
          <img
            src="https://images.ctfassets.net/bdvz0u6oqffk/21G02rapz20oqMAuE4KqCA/bf75259843b60cd0ad6a0dbb85ac5692/About-Asset.jpeg"
            alt=""
          />
          <div className={styles.desc}>
            <h2>The Best Selection, at the Best Prices</h2>
            <p>
              Browse our marketplace for incredible new and used clothing that
              you cant find anywhere else. We curate the largest men’s fashion
              marketplace, with new products arriving every day. Grailed, with
              help from community, ensures all items are authentic. If anything
              goes wrong, every transaction conducted through Grailed with
              PayPal is eligible for a full refund.
            </p>
            <div className={styles.buttons}>
              <button className={styles.btn}> BROWSE THE SHOP</button>
              <button className={styles.btn}>BUYER PROTECTION</button>
            </div>
          </div>
        </div>
        <div className={styles.contentCards}>
          <div className={styles.desc}>
            <h2>Make Money From Your Closet</h2>
            <p>
              Your closet is valuable. Flip your wardrobe on Grailed and find
              like-minded buyers from within our community. Listing an item is
              always free.
            </p>
            <div className={styles.buttons}>
              <button className={styles.btn}> SELL ITEM</button>
              <button className={styles.btn}>SELLER PROTECTION</button>
            </div>
          </div>
          <img
            src="https://images.ctfassets.net/bdvz0u6oqffk/4QTRFW7XMAG0s4Ie4GC8mI/c3366b86e94b33b6ca04217c1b771152/dcoasdf.jpg"
            alt=""
          />
        </div>
      </div>
    <Footer/>
    </>
  );
}
