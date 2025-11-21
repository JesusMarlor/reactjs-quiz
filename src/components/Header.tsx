import React from "react";
import Timer from "./Timer";


interface HeaderProps {
  candidateName: string;
}

const Header: React.FC<HeaderProps> = ({candidateName}) => {
  return (
    <div>
      <header style={{
        display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    background: "#3170eec2",
    color: "white",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,
      }}>
        <h1 style={styles.name}>{candidateName}</h1>
         <Timer />     
      </header>
      <div style={styles.headerSpacer}></div>
    </div>
  );
};
const styles = {
  name: {
    fontSize: "15px",
    margin: 0,
  },
  headerSpacer: {
    height: "80px", // Ajusta según el alto real del header
  },
};


export default Header;