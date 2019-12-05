import React from 'react';
import { connect } from 'react-redux';

import DropdownView from './Dropdown-view';

const mapStateToProps = (state) => ({
});

const ITEM_HEIGHT = 48;

class DropdownContainer extends React.PureComponent {

  state = {
    anchorEl: null,
  }

  onClick = e => {
    this.setState({ anchorEl: e.currentTarget });
  }

  onItemClick = user => () => {
    const { onItemClick } = this.props;

    onItemClick(user);
    this.onClose();
  }

  onClose = () => this.setState({ anchorEl: null });

  render() {
    const { anchorEl } = this.state;
    const { users } = this.props;

    return (
      <DropdownView
        onClick={this.onClick}
        onClose={this.onClose}
        onItemClick={this.onItemClick}
        anchorEl={anchorEl}
        users={users}
        open={Boolean(anchorEl)}
        itemHeight={ITEM_HEIGHT}
      />
    );
  }
}

export default connect(mapStateToProps, null)(DropdownContainer);
