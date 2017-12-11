/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Fetch from 'node-fetch';
import Home from './Home';
import Layout from '../../components/Layout';

async function action() {
  const resp = await Fetch('http://localhost:3000/feed');
  const data = await resp.json();
  return {
    chunks: ['home'],
    title: 'Бош сахифа',
    component: (
      <Layout>
        <Home news={data} />
      </Layout>
    ),
  };
}

export default action;
