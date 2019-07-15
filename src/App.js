/* jshint esversion: 6 */
import React, { Component } from 'react';
import './App.css';
import { Row, Col } from 'antd';
import "antd/dist/antd.css";

import NetworkPanel from './component/NetworkPanel';
import ProjectionPanel from './component/ProjectionPanel';
import Thumbnail from './component/Thumbnail';
import ControlPanel from './component/ControlPanel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Row type="flex" gutter={16}>
          <Col span={4}>
            < Thumbnail / >
            < ControlPanel / >
          </Col>
          <Col span={10}>
            < NetworkPanel / >
          </Col>
          <Col span={10}>
            < ProjectionPanel / >
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
