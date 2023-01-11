import { Table as TableAntd } from 'antd';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Select from '../Select';

import { routerActions } from '../../store/reducers/router/routerSlice';
import { requestActions } from '../../store/reducers/request/requestSlice';

import { selectRequests, selectRequestLoadingStatus } from '../../store/reducers/request/selectors';

const Table = () => {
  const dispatch = useDispatch();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const loading = useSelector(selectRequestLoadingStatus);
  const requests = useSelector(selectRequests);

  useEffect(() => {
    dispatch(requestActions.fetchRequest());
  }, [dispatch]);

  const handleChange = (destination, type, recordId) => {
    const newPoint = destination.split(',').map((item) => +item);
    const findRequest = requests.find(({ key }) => key === recordId);
    const newRoutePoints =
      type === 'destination'
        ? {
            original: findRequest.original,
            destination: newPoint,
          }
        : {
            original: newPoint,
            destination: findRequest.destination,
          };

    dispatch(routerActions.fetchRoute(newRoutePoints));
  };

  const columns = [
    {
      title: 'Заявка',
      dataIndex: 'name',
      render: (text) => {
        return <p>{text}</p>;
      },
    },
    {
      title: 'Начальная точка',
      dataIndex: 'original',
      render: (_text, record) => {
        return (
          <Select
            defaultValue={record.original}
            handleChange={handleChange}
            options={requests.map(({ key, original }) => ({
              value: key,
              title: original.join(','),
            }))}
            type="original"
            recordId={record.key}
          />
        );
      },
    },
    {
      title: 'Конечная точка',
      dataIndex: 'destination',
      render: (_text, record) => {
        return (
          <Select
            defaultValue={record.destination}
            handleChange={handleChange}
            options={requests.map(({ key, destination }) => ({
              value: key,
              title: destination.join(','),
            }))}
            type="destination"
            recordId={record.key}
          />
        );
      },
    },
  ];

  return (
    <TableAntd
      loading={loading}
      scroll={{ x: 'max-content' }}
      onRow={(record, index) => {
        return {
          onClick: () => {
            dispatch(
              routerActions.fetchRoute({
                original: record.original,
                destination: record.destination,
              })
            );
            setSelectedRowKeys([`${index}`]);
          },
        };
      }}
      rowSelection={{ selectedRowKeys }}
      columns={columns}
      dataSource={requests}
    />
  );
};

export default Table;
