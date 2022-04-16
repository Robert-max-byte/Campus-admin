import React from 'react'
import { Button, Table } from 'react-bootstrap'

export const Orders = () => {
  return (
    <Table striped bordered hover variant="dark" responsive='sm'>
    <thead>
      <tr>
        <th>Order ID</th>
        <th>Created</th>
        <th>Customer</th>
        <th>Total</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>001234</td>
        <td>15-04-2022</td>
        <td>Emmanuel</td>
        <td>GHc 300</td>
        <td><Button className='btn-danger'>Delivered</Button></td>
      </tr>
      <tr>
      <td>001234</td>
        <td>15-04-2022</td>
        <td>Emmanuel</td>
        <td>GHc 300</td>
        <td><Button>Delivering</Button></td>
      </tr>
    </tbody>
  </Table>
  )
}
