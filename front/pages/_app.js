import React from 'react';
import PropTypes from 'prop-types';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { Container } from 'next/app';
import axios from 'axios';
import Helmet from 'react-helmet';

import GlobalStyles from '../components/designs/GlobalStyles';
import Layout from '../components/Layout';
import reducer from '../reducers';
import rootSaga from '../sagas';
import { LOAD_USER_REQUEST } from '../reducers/user';
import { frontUrl } from '../config/config';

const Backpot = ({ Component, store, pageProps }) => {
  return (
    <Container>
      <Provider store={store}>
        <Helmet
          title="BackPot"
          htmlAttributes={{ lang: 'ko' }}
          meta={[
            {
              charSet: 'UTF-8',
            },
            {
              name: 'viewport',
              content:
                'width=device-width, initial-scale=1.0,minumum-scale=1.0, maximum-scale=1.0, user-scaleable=yes, viewport-fit=cover',
            },
            {
              'http-equiv': 'X-UA-Compatible',
              content: 'IE=edge',
            },
            {
              name: 'description',
              content: '웹소설 플랫폼 Backpot',
            },
            {
              name: 'og:title',
              content: 'Backpot',
            },
            {
              name: 'og:description',
              content: '웹소설 플랫폼 Backpot',
            },
            {
              property: 'og:type',
              content: 'website',
            },
            {
              property: 'og:image',
              content: `${frontUrl}/favicon`,
            },
          ]}
          link={[
            {
              rel: 'shortcut icon',
              href: '/favicon',
            },
          ]}
        />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <GlobalStyles />
      </Provider>
    </Container>
  );
};

Backpot.propTypes = {
  Component: PropTypes.elementType.isRequired,
  store: PropTypes.object.isRequired,
  pageProps: PropTypes.object.isRequired,
};

Backpot.getInitialProps = async (context) => {
  const { ctx, Component } = context;
  let pageProps = {};
  const state = ctx.store.getState();
  const cookie = ctx.isServer ? ctx.req.headers.cookie : '';
  // axios.defaults.headers.Cookie = '';
  if (ctx.isServer && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  if (!state.user.me) {
    ctx.store.dispatch({
      type: LOAD_USER_REQUEST,
    });
  }
  if (Component.getInitialProps) {
    pageProps = (await Component.getInitialProps(ctx)) || {};
  }

  return { pageProps };
};

const configureStore = (initialState, options) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [
    sagaMiddleware,
    (store) => (next) => (action) => {
      // saga Loging
      console.log(action);
      next(action);
    },
  ];
  const enhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares))
      : compose(
          applyMiddleware(...middlewares),
          !options.isServer &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : (f) => f,
        );
  const store = createStore(reducer, initialState, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export default withRedux(configureStore)(withReduxSaga(Backpot));
