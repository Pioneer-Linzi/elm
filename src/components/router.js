/**
 * Created by linzi on 2017/1/18.
 */
import content from 'components/content/Content';
import ratings from 'components/content/Ratings';
import goods from 'components/content/Goods';
import seller from 'components/content/Seller';

export default {
  '/index': {
    component: content
  },
  '/ratings': {
      component: ratings
  },
  '/goods': {
      component: goods
  },
  '/seller': {
      component: seller
  }
};
