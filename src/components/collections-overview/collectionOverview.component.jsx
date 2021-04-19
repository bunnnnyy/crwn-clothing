import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import Collectionpreview from "../Collection-preview/Collection.Preview.component";

import "./collectionOverview.style.scss";

const CollectionOverview = ({ collections }) => {
  console.log("collections", collections);
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...othercollectionprops }) => (
        <Collectionpreview key={id} {...othercollectionprops} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
