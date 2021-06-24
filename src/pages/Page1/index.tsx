import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Space, Typography } from 'antd';
import { page1Title } from 'constants/index';
import { RootState } from 'reducers/index';

import styles from './index.m.scss';

const { Title } = Typography;

const Page1: FC = () => {
  const history = useHistory();
  const { roles } = useSelector((state: RootState) => state.page1Store);

  return (
    <Space direction="vertical">
      <Title className={styles.p}>
        {page1Title} --- {roles[0]}
      </Title>
      <Space direction="horizontal">
        <Button onClick={() => history.push('/page2')}>to Page2</Button>
        <Button>
          <i className="if if-filter-icon" />
        </Button>
      </Space>
    </Space>
  );
};

export default Page1;
