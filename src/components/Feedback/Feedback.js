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
import s from './Feedback.css';

class Feedback extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <a
            className={s.link}
            href="https://t.me/webstyle"
          >
            Савол бериш
          </a>
          <span className={s.spacer}>|</span>
          <a
            className={s.link}
            href="https://github.com/JavaScriptUz/javascript.uz/issues/new"
          >
            Муаммо хақида хабар бериш
          </a>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Feedback);
