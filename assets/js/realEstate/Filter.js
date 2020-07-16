import React, { Component } from 'react';

class Filter extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Joe',
    };
    this.cities = this.cities.bind(this);
    this.homeTypes = this.homeTypes.bind(this);
    this.bedrooms = this.bedrooms.bind(this);
  }

  componentWillMount() {
    this.props.populateAction();
  }
  cities() {
    if (this.props.globalState.populateFormsData.cities != undefined) {
      var { cities } = this.props.globalState.populateFormsData;
      console.log(cities);
      return cities.map((item) => {
        return (
          <option key={item} value={item}>
            {item}
          </option>
        );
      });
    }
  }
  homeTypes() {
    if (this.props.globalState.populateFormsData.cities != undefined) {
      var { homeTypes } = this.props.globalState.populateFormsData;
      console.log(homeTypes);
      return homeTypes.map((item) => {
        return (
          <option key={item} value={item}>
            {item}
          </option>
        );
      });
    }
  }
  bedrooms() {
    if (this.props.globalState.populateFormsData.cities != undefined) {
      var { bedrooms } = this.props.globalState.populateFormsData;
      console.log(bedrooms);
      return bedrooms.map((item) => {
        return (
          <option key={item} value={item}>
            {item}+ Bedrooms
          </option>
        );
      });
    }
  }

  render() {
    return (
      <section id="filter">
        <div className="inside">
          <h4>Filter</h4>
          <label htmlFor="city">City</label>
          <select
            name="city"
            className="filters city"
            onChange={this.props.change}
          >
            <option value="All">All</option>
            {this.cities()}
          </select>
          <label htmlFor="homeType">Home Type</label>
          <select
            name="homeType"
            className="filters homeType"
            onChange={this.props.change}
          >
            <option value="All">All Home Types</option>
            {this.homeTypes()}
            {/* <option value="studio">Studio</option>
            <option value="apartment">Apartment</option>
            <option value="loft">Loft</option>
            <option value="duplex">Duplex</option>
            <option value="ranch">Ranch</option>
            <option value="2-story">2-Story</option>
            <option value="multiFamily">Multi-Family</option> */}
          </select>
          <label htmlFor="bedrooms">Bedrooms</label>
          <select
            name="bedrooms"
            className="filters bedrooms"
            onChange={this.props.change}
          >
            <option value="0">0+ Bedrooms</option>
            {this.bedrooms()}
            {/* <option value="1">1+ Bedrooms</option>
            <option value="2">2+ Bedrooms</option>
            <option value="3">3+ Bedrooms</option>
            <option value="4">4+ Bedrooms</option>
            <option value="5">5+ Bedrooms</option> */}
          </select>
          <div className="filters price">
            <span className="title">Price</span>
            <input
              type="text"
              name="min_price"
              className="min-price"
              onChange={this.props.change}
              value={this.props.globalState.min_price}
            />
            <input
              type="text"
              name="max_price"
              className="max-price"
              onChange={this.props.change}
              value={this.props.globalState.max_price}
            />
          </div>
          <div className="filters floor-space">
            <span className="title">Floor Space</span>
            <input
              type="text"
              name="min_floor_space"
              className="min-floor-space"
              onChange={this.props.change}
              value={this.props.globalState.min_floor_space}
            />
            <input
              type="text"
              name="max_floor_space"
              className="max-floor-space"
              onChange={this.props.change}
              value={this.props.globalState.max_floor_space}
            />
          </div>

          <div className="filters extras">
            <span className="title">Facilities</span>
            <label htmlFor="extras">
              <span>Elevator</span>{' '}
              <input
                name="elevator"
                value="elevator"
                type="checkbox"
                onChange={this.props.change}
              />
            </label>
            <label htmlFor="extras">
              <span>Storage</span>{' '}
              <input
                name="storage"
                value="storage"
                type="checkbox"
                onChange={this.props.change}
              />
            </label>
            <label htmlFor="extras">
              <span>Bath Tub</span>{' '}
              <input
                name="bath_tub"
                value="bath-tub"
                type="checkbox"
                onChange={this.props.change}
              />
            </label>
            <label htmlFor="extras">
              <span>Seperate Shower</span>{' '}
              <input
                name="seperate_shower"
                value="seperate-shower"
                type="checkbox"
                onChange={this.props.change}
              />
            </label>
            <label htmlFor="extras">
              <span>Fireplace</span>{' '}
              <input
                name="fireplace"
                value="fireplace"
                type="checkbox"
                onChange={this.props.change}
              />
            </label>
            <label htmlFor="extras">
              <span>Swimming Pool</span>{' '}
              <input
                name="swimming_pool"
                value="swimming-pool"
                type="checkbox"
                onChange={this.props.change}
              />
            </label>
            <label htmlFor="extras">
              <span>Finished Basement</span>{' '}
              <input
                name="finished_basement"
                value="finished-basement"
                type="checkbox"
                onChange={this.props.change}
              />
            </label>
            <label htmlFor="extras">
              <span>Gym</span>{' '}
              <input
                name="gym"
                value="gym"
                type="checkbox"
                onChange={this.props.change}
              />
            </label>
          </div>
        </div>
      </section>
    );
  }
}

export default Filter;
