import type { FC } from 'react';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Space, Typography } from 'antd';
import { RootState } from 'reducers/index';

const { Title } = Typography;

const Page2: FC = () => {
  const { count } = useSelector((state: RootState) => state.page2Store);
  const history = useHistory();

  return (
    <Space direction="vertical">
      <Title level={3}>this is Page2 component! --- {count}</Title>

      <Space>
        <Button type="primary" onClick={() => history.push('/page1')}>
          to Page1
        </Button>
      </Space>
    </Space>
  );
};

export default Page2;
