import React, { Component } from 'react';

class Filter extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Joe',
    };
  }

  render() {
    return (
      <section id="filter">
        <div className="inside">
          <h4>Filter</h4>
          <select name="neighborhood" className="filters neighborhood">
            <option value="">Ridgewood</option>
            <option value="">Frontenac</option>
            <option value="">Clayton</option>
            <option value="">Downtown</option>
            <option value="">Rural Areas</option>
          </select>
          <select name="housetype" className="filters housetype">
            <option value="">Ranch</option>
            <option value="">Loft</option>
            <option value="">2-Story</option>
            <option value="">Multi-Family</option>
          </select>
          <select name="bedrooms" className="filters bedrooms">
            <option value="">2 BR</option>
            <option value="">3 BR</option>
            <option value="">4 BR</option>
            <option value="">5+ BR</option>
          </select>
          <div className="filters price">
            <span className="title">Price</span>
            <input type="text" name="min-price" className="min-price" />
            <input type="text" name="max-price" className="max-price" />
          </div>
          <div className="filters floor-space">
            <span className="title">Floor Space</span>
            <input
              type="text"
              name="min-floor-space"
              className="min-floor-space"
            />
            <input
              type="text"
              name="max-floor-space"
              className="max-floor-space"
            />
          </div>
          <div className="filters bedrooms">
            <span className="title">Rooms</span>
            <input type="text" name="min-bedrooms" className="min-bedrooms" />
            <input type="text" name="max-bedrooms" className="max-bedrooms" />
          </div>
          <div className="filters extras">
            <span className="title">Extras</span>
            <label htmlFor="extras">
              <span>Elevators</span>{' '}
              <input name="extras" value="elevator" type="checkbox" />
            </label>
            <label htmlFor="extras">
              <span>Storage</span>{' '}
              <input name="extras" value="storage" type="checkbox" />
            </label>
            <label htmlFor="extras">
              <span>Bath Tub</span>{' '}
              <input name="extras" value="bath-tub" type="checkbox" />
            </label>
            <label htmlFor="extras">
              <span>Seperate Shower</span>{' '}
              <input name="extras" value="seperate-shower" type="checkbox" />
            </label>
            <label htmlFor="extras">
              <span>Fireplace</span>{' '}
              <input name="extras" value="fireplace" type="checkbox" />
            </label>
            <label htmlFor="extras">
              <span>Swimming Pool</span>{' '}
              <input name="extras" value="swimming-pool" type="checkbox" />
            </label>
            <label htmlFor="extras">
              <span>Finished Basement</span>{' '}
              <input name="extras" value="finished-basement" type="checkbox" />
            </label>
            <label htmlFor="extras">
              <span>Gym</span>{' '}
              <input name="extras" value="gym" type="checkbox" />
            </label>
          </div>
        </div>
      </section>
    );
  }
}

export default Filter;
