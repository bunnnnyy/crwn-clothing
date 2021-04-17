import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import MenuItem from "../menuitem/MenuItem.component";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import "./Directory.style.scss";

const Directory = ({ section }) => {
  return (
    <div className="directory-menu">
      {section.map(({ id, ...othersectionitem }) => (
        <MenuItem key={id} {...othersectionitem} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  section: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
