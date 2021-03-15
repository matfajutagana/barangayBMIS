import React from 'react'
import { MDBDataTableV5 } from 'mdbreact'

export default function BlotterTable({ res }) {
  const resFiltered = res.filter((r) => {
    return r.complainant !== 'sample' && r.complainee !== 'sample'
  })

  const datatable = {
    columns: [
      {
        label: 'Complainant',
        field: 'complainant',
        width: 10,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Complainee',
        field: 'complainee',
        width: 50,
      },
      {
        label: 'Status',
        field: 'isResolve',
        width: 50,
      },

      {
        label: '',
        field: 'details',
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
