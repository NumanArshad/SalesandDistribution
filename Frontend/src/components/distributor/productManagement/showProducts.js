import React, {Component} from 'react';
import ProductCard from './productCard';


class ShowProduct extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <ul>
          <li>
          {this.props.productlist.map( product => {
            <ProductCard product={product}/>
          })}
          </li>
        </ul>
      </div>
    );
  }
}

export default ShowProduct;