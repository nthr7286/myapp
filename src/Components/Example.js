import React, { Fragment, useState } from 'react'

export default () => <Fragment>
  <p>You clicked {count} times</p>
  <button onClick={() => setCount(count + 1)}>
    Click me
  </button>
</Fragment>

