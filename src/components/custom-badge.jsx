import { Box } from "@mui/material";

const CustomBadge = ({
  size = 64,
  bgColor = "rgba(0, 200, 83, 0.1)",
  iconColor = "#00C853",
  Icon,
  sx
}) => {
  return (
    <Box
      sx={{
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: bgColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...sx
      }}
    >
      {Icon && <Icon sx={{ fontSize: size * 0.5, color: iconColor }} />}
    </Box>
  );
};

export default CustomBadge;
