import React from 'react'
import {Button, Table} from 'react-bootstrap'

export const Stock = () => {
  return (
    <Table striped bordered hover variant="dark" responsive='sm'>
  <thead>
    <tr>
      <th>Item</th>
      <th>Product ID</th>
      <th>Price</th>
      <th>Status</th>
      <th>Qty</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Blue Shirt</td>
      <td>00123</td>
      <td>GHc 20</td>
      <td><Button className='btn-danger'>Out of Stock</Button></td>
      <td>0</td>
    </tr>
    <tr>
      <td>Grey sweater</td>
      <td>00234</td>
      <td>GHc 45</td>
      <td><Button>In of Stock</Button></td>
      <td>45</td>
    </tr>
  </tbody>
</Table>
  )
}
