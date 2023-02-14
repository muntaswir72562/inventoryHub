import { useState } from "react";
import { ProSidebarProvider, Menu, MenuItem } from "react-pro-sidebar";
import { Box, Typography } from "@mui/material";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";

const Sidebar = () => {
  return (
    <ProSidebarProvider>
      <Box>
        <Typography>hello </Typography>
      </Box>
    </ProSidebarProvider>
  );
};

export default Sidebar;
