import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.navContainer}>
        <h1 style={styles.logo}>My Weather App</h1>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#4CAF50", // Green background
    padding: "10px 20px",
    borderBottom: "2px solid #388E3C",
    width: "100%",
  },
  navContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    margin: 0,
    fontSize: "1.5rem",
    color: "white",
    fontFamily: "Arial, sans-serif",
  },
  nav: {
    display: "flex",
    gap: "20px",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "bold",
  },
  navLinkHover: {
    textDecoration: "underline",
  },
};

export default Header;
