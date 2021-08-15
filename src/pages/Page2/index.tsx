import type { FC } from 'react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Space, Typography } from 'antd';
import { useAppSelector } from 'hooks/typedReducer';

const { Title } = Typography;

const Page2: FC = () => {
  const history = useHistory();
  const { count } = useAppSelector(state => state.page2Store);

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
