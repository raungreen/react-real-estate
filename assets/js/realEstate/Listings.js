import React, { Component } from 'react';

class Listings extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Joe',
    };
  }

  render() {
    return (
      <section className="listings">
        <div className="logo"> Listings</div>
      </section>
    );
  }
}

export default Listings;
