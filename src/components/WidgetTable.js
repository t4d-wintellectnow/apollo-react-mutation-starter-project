import * as React from 'react';

export const WidgetTable = ({ widgets }) =>
  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Description</th>
        <th>Color</th>
        <th>Size</th>
        <th>Price</th>
        <th>Quantity</th>
      </tr>
    </thead>
    <tbody>
      {widgets.map(widget => <tr key={widget.id}>
        <td>{widget.id}</td>
        <td>{widget.name}</td>
        <td>{widget.description}</td>
        <td>{widget.color}</td>
        <td>{widget.size}</td>
        <td>{widget.price}</td>
        <td>{widget.quantity}</td>
      </tr>)}
    </tbody>
  </table>;