import React from 'react';
import { connect } from 'react-redux';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
// import { addAgGridRowData } from '../actions';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

class AgGrid extends React.Component {
  render() {
    const { rowData } = this.props.agGridData;
    console.log('data-ag', rowData);
    const data = rowData.map((movie) => ({
      moviename: `${movie.Title}`,
      actors: `${movie.Actors}`,
      production: `${movie.Production}`,
    }));

    return (
      <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
        <AgGridReact rowData={data}>
          <AgGridColumn field="moviename" editable={true}></AgGridColumn>
          <AgGridColumn field="actors" editable={true}></AgGridColumn>
          <AgGridColumn field="production" editable={true}></AgGridColumn>
        </AgGridReact>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('AgGrid data', state);
  return {
    agGridData: state.agGridData,
  };
}

export default connect(mapStateToProps)(AgGrid);
