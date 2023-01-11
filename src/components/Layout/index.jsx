import { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout as LayoutAntd } from 'antd';

import Table from '../Table';

const Layout = () => {
  const resizableRef = useRef(null);

  const { Content, Sider } = LayoutAntd;

  return (
    <LayoutAntd>
      <Content>
        <LayoutAntd>
          <Sider ref={resizableRef} id="Resizable" width="30%" background="#fff">
            <Table />
          </Sider>
          <Content>
            <Outlet />
          </Content>
        </LayoutAntd>
      </Content>
    </LayoutAntd>
  );
};

export default Layout;
