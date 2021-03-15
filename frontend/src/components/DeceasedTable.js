import React from 'react'
import { MDBDataTableV5 } from 'mdbreact'

export default function DeceasedTable({ res }) {
  const resFiltered = res.filter((r) => {
    return r.age !== -1
  })

  const datatable = {
    columns: [
      {
        label: 'ID Number',
        field: 'idNumber',
        width: 10,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Last Name',
        field: 'lastName',
        width: 10,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'First Name',
        field: 'firstName',
        width: 50,
      },

      {
        label: 'Age',
        field: 'age',
        sort: 'asc',
        width: 50,
      },

      {
        label: '',
        field: 'view',
        sort: 'disabled',
        width: 50,
      },
      {
        label: '',
        field: 'edit',
        sort: 'disabled',
        width: 50,
      },
    ],
    rows: [...resFiltered],
  }

  return (
    <MDBDataTableV5
      hover
      entriesOptions={[100, 500, 1000]}
      entries={100}
      pagesAmount={4}
      data={datatable}
      pagingTop
      searchTop
      searchBottom={false}
      barReverse
    />
  )
}
