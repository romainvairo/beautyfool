import React from 'react';
import { MenuItem, Menu, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const DropdownView = ({ onClick, onClose, onItemClick, anchorEl, open, itemHeight, users }) => (
  <>
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={onClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={onClose}
        /*PaperProps={{
          style: {
            maxHeight: itemHeight * 4.5,
            width: 200,
          },
        }}*/
      >
        {users.map(user => (
          <MenuItem key={user.id} onClick={onItemClick(user)}>
            {user.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  </>
);
export default DropdownView;
