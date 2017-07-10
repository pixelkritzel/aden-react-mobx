import React, { Component } from 'react';

import { inject, observer } from 'mobx-react';

export default inject('store')(
  observer(props =>
    <div>
      <h2>Hello from React</h2>
      <p>
        <em>
          The Button was clicked {props.store.buttonClicks} times
        </em>
      </p>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-secondary" onClick={props.store.clickMore}>
          Click more
        </button>
        <button type="button" className="btn btn-secondary" onClick={props.store.clickLess}>
          Click less
        </button>
      </div>
    </div>
  )
);
