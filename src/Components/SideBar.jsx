import React from "react";
import "./SideBar.css";
import people3 from "../assets/people3.jpg";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.gif";

import { BiLogoDropbox } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import { GoBell } from "react-icons/go";
import { RxDashboard } from "react-icons/rx";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { IoMdContacts } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";

function SideBar() {
  return (
    <div>
      <div className="company">
        <div className="company-logo">
          <div style={{marginTop:"10px"}}><BiLogoDropbox /></div>
          <h2>SPECTRA</h2>
        </div>
        <div className="heading">
          <h1>Overview</h1>
        </div>
        <div className="company-searchbar">
          <div className="search-wrapper">
            <CiSearch className="company-searchbar-icon" />
            <input type="text" placeholder="Search here..." />
          </div>
        </div>
        <div className="company-icons">
          <MdOutlineDarkMode
            style={{
              border: "1px solid gray",
              padding: "5px",
              borderRadius: "10px",
            }}
          />
          <GoBell
            style={{
              border: "1px solid gray",
              padding: "5px",
              borderRadius: "10px",
            }}
          />
          <img
            src={people3}
            width={30}
            height={30}
            style={{ borderRadius: "10px" }}
            alt=""
          />
        </div>
      </div>

      <div className="main-content">
        <div className="side-title">
          <div className="title-logo">
            <RxDashboard />
            <p>Deshboard</p>
          </div>
          <div className="title-logo">
            <TbBrandGoogleAnalytics />
            <p>Analytics</p>
          </div>
          <div className="title-logo">
            <IoMdContacts />
            <p>Contacts</p>
          </div>
          <div className="title-logo">
            <CiMail size={18} />
            <p>Mail</p>
          </div>
          <div className="title-logo">
            <FaCalendarAlt />
            <p>Calendar</p>
          </div>
          <div className="title-logo">
            <CiSettings size={20} />
            <p>Settings</p>
          </div>
        </div>

        <div className="main-images">
          <img src={img1} width={300} height={200} alt="" />
          <img src={img2} width={300} alt="" />
          <img src={img3} width={300} alt="" />
        </div>
      </div>

      <div className="second-images">
        <img src={img4} width={640} height={280} alt="" />
        <img
          src={img5}
          width={300}
          height={280}
          style={{ paddingLeft: "25px", borderRadius: "50px" }}
          alt=""
        />
      </div>
      <div
        style={{
          display: "flex",
          marginLeft: "30px",
          paddingLeft: "30px",
          marginTop: "-30px",
          gap: "10px",
        }}
      >
        <IoLogOutOutline size={20} />
        <p>Log out</p>
      </div>
    </div>
  );
}

export default SideBar;
