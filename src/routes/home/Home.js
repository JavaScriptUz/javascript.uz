/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

class Home extends React.Component {
  static propTypes = {
    news: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        content: PropTypes.string,
      }),
    ).isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <article className={s.newsItem}>
            <h1 className={s.newsTitle}>Салом!!!</h1>
            <div className={s.newsDesc}>
              Менинг исмим Фаррух! Бир неча йиллардан бери JavaScript дастурлаш
              тилида код ёзаман. Узбек тилида очиқ кодли дастулар бўлмаганлиги
              сабабли, ўзим бўш вақтимда шу лойихани бошладим.
            </div>
          </article>

          <h1>Нима гаплар?</h1>
          {this.props.news.map(item => (
            <article key={item.link} className={s.newsItem}>
              <h1 className={s.newsTitle}>
                <a href={item.link}>{item.title}</a>
              </h1>
              <div
                className={s.newsDesc}
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </article>
          ))}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
