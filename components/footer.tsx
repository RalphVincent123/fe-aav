import style from "@/styles/footer.module.scss";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiOutlineTikTok } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io5";
export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.rowGroup}>
          {/* LEFT COLUMN */}
          <div className={style.footerCol}>
            <span className={style.title}>GoNewsPlus</span>
            <span className={style.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vehicula quam at tortor posuere, non placerat erat varius.
            </span>
          </div>

          {/* MIDDLE COLUMN */}
          <div className={style.footerCol}>
            <span className={style.title}>Select Your Country</span>
            <ul className={style.unList}>
              <li className={style.companyList}>
                <select className={style.core}>
                  <option value="usa">United States</option>
                  <option value="jp">Japan</option>
                  <option value="ph">Philippines</option>
                </select>
              </li>
            </ul>
          </div>

          {/* RIGHT COLUMN */}
          <div className={style.footerCol}>
            <span className={style.title}>Follow Us</span>
            <div className={style.socialLinks}>
              <a href="#" className={style.links}>
                <FaFacebook />
              </a>
              <a href="#" className={style.links}>
                <FaSquareXTwitter />
              </a>
              <a href="#" className={style.links}>
                <AiOutlineTikTok />
              </a>
              <a href="#" className={style.links}>
                <IoLogoInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={style.footContainer}>
        <span className={style.Copyright}>© All Rights Reserved Ralph</span>
      </div>
    </footer>
  );
}
