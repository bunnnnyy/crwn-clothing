import React, { Component } from 'react';

import SHOPDATA from '../../components/Collection-preview/Shopdata'

import Collectionpreview from '../../components/Collection-preview/Collection.Preview.component'

class Shoppage extends Component{
    constructor(){
        super();
        this.state = {
            collection : SHOPDATA 
        }
    }

    render(){
        const {collection} = this.state;
        return(
        <div className='shop-page'>
            {
                collection.map(({id , ...othercollectionprops}) => (
                    <Collectionpreview key={id} {...othercollectionprops} />
                ))
            }
        </div>

        )
    }
}

export default Shoppage;