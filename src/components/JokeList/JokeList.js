import React from 'react';
import { Table } from 'reactstrap';

const JokeList = ({ jokes }) => {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>No.</th>
          <th>ギャグ</th>
          <th>おじさん度</th>
          <th>投稿者</th>
        </tr>
      </thead>
      <tbody>
        {
          jokes.map((data, i) => {
            return ( 
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{data.joke}</td>
                <td>{data.category}</td>
                <td>{data.username}</td>
              </tr>
            );
          })
        }
      </tbody>
    </Table>
  );
}

export default JokeList;