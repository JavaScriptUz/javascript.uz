/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.css';
import Link from '../Link';

class Footer extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <span className={s.text}>© Open Source ва Farrukh.me</span>
          <span className={s.spacer}>·</span>
          <Link className={s.link} to="/">
            Бош сахифа
          </Link>
          <span className={s.spacer}>·</span>
          <Link className={s.link} to="/privacy">
            Терминлар
          </Link>
          <span className={s.spacer}>·</span>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Footer);
