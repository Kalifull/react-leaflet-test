import { Spin } from 'antd';

import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <Spin />
    </div>
  );
};

export default Loader;
