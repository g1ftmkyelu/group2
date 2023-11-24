import React, { useState } from 'react';
import DashboardCardSection from './DashboardCardSection';
import 'react-resizable/css/styles.css';
import 'react-grid-layout/css/styles.css';
import DynamicCRUD from './NestedObjectInput';
import DynamicChart from '../../dashboardComponents/charts/DynamicChart';

const Home = ({ metrics }) => {
  const nestedData = [
    {
      name: 'John',
      age: 30,
      posts: [
        {
          name: "post 1"
        },
        {
          name: "post 2"
        },
        {
          name: "post 3"
        }
      ]

    },
    {
      name: 'Alice',
      age: 25,
      posts: [
        {
          name: "post 4",
          comments: [
            {
              author: "user1",
              content: "comment1"
            },
            {
              author: "user2",
              content: "comment2"
            }
          ]
        },
        {
          name: "post 5",
          comments: []
        },
        {
          name: "post 6",
          comments: [
            {
              author: "userx",
              content: "commentx"
            }
          ]
        }
      ]
    }
  ];

  const [data, setData] = useState(nestedData);

  const handleFormSubmit = (updatedData) => {
    setData(updatedData);
    console.log(updatedData);
  }

  const schema = [
    { name: 'name', title: 'Name', type: 'text' },
    { name: 'age', title: 'Age', type: 'number' },
    {
      name: 'posts',
      title: 'posts',
      type: 'object',
      schema: [
        { name: 'name', title: 'name', type: 'text' },
        {
          name: 'comments', title: 'comments', type: 'object', schema: [
            { name: 'author', title: 'author', type: 'text' },
            { name: 'content', title: 'content', type: 'text' }
          ]
        },

      ]
    }
  ];

  const chartType = 'bar';
  const labels = ['January', 'February', 'March', 'April', 'May'];
  const datasets = [
    {
      label: 'Data Set 1',
      data: [65, 59, 80, 81, 56],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },

  ];

  return (
    <div className=''>
      <div className="">
        <DashboardCardSection {...{ metrics }} />
      </div>

      <div className='m-6'>

        <DynamicChart
          chartType={chartType}
          labels={labels}
          datasets={datasets}
        />

      </div>
    </div>
  );
};

export default Home;
