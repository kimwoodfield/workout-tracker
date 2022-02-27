import React, { useState } from "react";
import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Popper,
  Fade,
  Paper,
  PopperPlacementType,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteIcon from "@mui/icons-material/Delete";
import { ItemActionsProps } from './ItemActions.types';

export const ItemActions = (props: ItemActionsProps) => {
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = useState<PopperPlacementType>();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick =
    (newPlacement: PopperPlacementType) =>
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
      setOpen((prev) => placement !== newPlacement || !prev);
      setPlacement(newPlacement);
    };

  const handleClickAway = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    props.onModalOpen(props.exerciseId);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box sx={{ position: "relative" }}>
        <IconButton onClick={handleClick("bottom-end")}>
          <MoreHorizIcon />
        </IconButton>
        {open ? (
          <Popper
            open={open}
            anchorEl={anchorEl}
            placement={placement}
            transition
          >
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper>
                  <Box>
                    <List>
                      {/* @TODO: Implement edit */}
                      <ListItem onClick={handleOpen}>
                        <ListItemIcon>
                          <DeleteIcon />
                        </ListItemIcon>
                        <ListItemText>Delete</ListItemText>
                      </ListItem>
                    </List>
                  </Box>
                </Paper>
              </Fade>
            )}
          </Popper>
        ) : null}
      </Box>
    </ClickAwayListener>
  );
};
