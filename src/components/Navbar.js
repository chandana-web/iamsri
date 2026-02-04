import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  // ✅ Scroll to section function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // ✅ Detect active section on scroll
  useEffect(() => {
    const sections = ["home", "skills", "projects", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6, // ✅ section is active when 60% visible
      }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "rgba(0,0,0,0.4)",
        backdropFilter: "blur(12px)",
        boxShadow: "none",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        padding: { xs: "0 10px", md: "0 50px" },
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: {
        xs: "center", md: "space-between"
      } }}>
        
        {/* Logo */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "#00ff99",
            letterSpacing: "1px",
            cursor: "pointer",
            display: { xs: "none", md: "block" },
          }}
          onClick={() => handleScroll("home")}
        >
            WebDev
        </Typography>

        {/* Nav Links */}
        <Box sx={{ display: "flex", gap: { xs: "15px", md: "30px" }, flexWrap: "wrap", justifyContent: "center" }}>
          {navItems.map((item) => (
            <Button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              sx={{
                color: "white",
                fontSize: "14px",
                textTransform: "none",
                position: "relative",
                opacity: activeSection === item.id ? 1 : 0.7,

                /* ✅ Green underline when active */
                borderBottom:
                  activeSection === item.id
                    ? "2px solid #00ff99"
                    : "2px solid transparent",

                borderRadius: "0px",
                paddingBottom: "6px",

                "&:hover": {
                  opacity: 1,
                  color: "#00ff99",
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

/* ✅ Navbar Items */
const navItems = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
