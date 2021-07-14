import React from "react";

// material-ui
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const MenuUser: React.FunctionComponent = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>      
        <Button aria-controls="menu" aria-haspopup="true" onClick={handleClick}>
          Menu
        </Button>
        <Menu
          id="menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Log in</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>   
    </React.Fragment>
  );
};

export default MenuUser;
