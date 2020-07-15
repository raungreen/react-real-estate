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
      <section id="listings">
        <section className="search-area">
          <input type="text" name="search" />
        </section>
        <section className="sortby-area">
          <div className="results">3920 results found</div>
          <div className="sort-options">
            <select name="sortby" className="sortby">
              <option value="price-asc">Highest Price</option>
              <option value="price-asc">Lowest Price</option>
            </select>
            <div className="view">
              <i className="fa fa-th-list"></i>
              <i className="fa fa-th"></i>
            </div>
          </div>
        </section>
        <section className="listings-results">
          <div className="listing">
            <div className="listing-img">
              <span className="address">2613 State St.</span>
              <div className="details">
                <div className="col-md-3">
                  <div className="user-img"></div>
                </div>
                <div className="col-md-9">
                  <div className="user-details">
                    <span className="user-name">Nina Smith</span>
                    <span className="post-date">Posted on 05/08/17</span>
                  </div>
                  <div className="listing-details">
                    <div className="floor-space">
                      <i className="fa fa-square-o"></i>
                      <span>900 ft&sup2;</span>
                    </div>
                    <div className="bedrooms">
                      <i className="fa fa-bed"></i>
                      <span>3 bedrooms</span>
                    </div>
                  </div>
                  <div className="view-btn">
                    <a href="#">View Listing</a>
                    {/* View Listing */}
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-info">
              <span>$1000 / month </span>
              <span>
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                Ridgewood MO{' '}
              </span>
            </div>
          </div>
        </section>
        <section className="pagination">
          <ul className="pagination">
            <li>Prev</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>Next</li>
          </ul>
        </section>
      </section>
    );
  }
}

export default Listings;
