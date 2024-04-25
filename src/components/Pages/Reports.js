import React, { useState, useEffect } from 'react';
import './Reports.css';
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,  CardFooter,
  Table,
  Row,
  Col,
  Form,
} from "reactstrap";
import { Link, Outlet } from 'react-router-dom'; 
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
import {
  dashboard24HoursPerformanceChart,
} from './charts.js';

function Reports() {

  return (
    <div className='reports'>
      <h1>Reports</h1>
      <div className='Stats'>
        <Row>
           <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4" className="card-title-box"> COVID Data: Confirmed Cases</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Country</th>
                        <th>Total Cases</th>
                        <th>Total Cases Per Million</th>
                        <th>Latest New Cases</th>
                        <th>Latest New Cases Per Million</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>USA</td>
                        <td>103,436,829</td>
                        <td>305,763.91</td>
                        <td>93,260</td>
                        <td>275.681</td>
                      </tr>
                      <tr>
                        <td>France</td>
                        <td>38,997,490</td>
                        <td>603,427.621</td>
                        <td>7,982</td>
                        <td className="text-right">123.509</td>
                      </tr>
                      <tr>
                        <td>Canada</td>
                        <td>4,788,109</td>
                        <td>124,514.177</td>
                        <td>974</td>
                        <td className="text-right">25.329</td>
                      </tr>
                      <tr>
                        <td>United Kingdom</td>
                        <td>24,917,163</td>
                        <td>369,094.293</td>
                        <td>1,517</td>
                        <td className="text-right">22.471</td>
                      </tr>
                      <tr>
                        <td>United Arab Emirates</td>
                        <td>1,067,030</td>
                        <td>113,019.214</td>
                        <td>389</td>
                        <td className="text-right">41.203</td>
                      </tr>
                      <tr>
                        <td>Portugal</td>
                        <td>5,643,184</td>
                        <td>549,436.527</td>
                        <td>64</td>
                        <td className="text-right">6.231</td>
                      </tr>
                      <tr>
                        <td>Italy</td>
                        <td>26,719,139</td>
                        <td>452,579.321</td>
                        <td>151</td>
                        <td className="text-right">2.558</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
            </Card>
          </Col>
          </Row>
          <Row>
            <Col md="6">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4"className="card-title-box">COVID Data: Deaths</CardTitle>
                </CardHeader>
                <CardBody>
                <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Country</th>
                        <th>Total Deaths</th>
                        <th>Total Deaths Per Million</th>
                        <th>Latest New Deaths Reported</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>United States</td>
                        <td>1,184,883</td>
                        <td>3,502.567</td>
                        <td>457</td>
                      </tr>
                      <tr>
                        <td>France</td>
                        <td>168,091</td>
                        <td>2,600.956</td>
                        <td className="text-right">62</td>
                      </tr>
                      <tr>
                        <td>Canada</td>
                        <td>54,262</td>
                        <td>1,411.077</td>
                        <td className="text-right">1</td>
                      </tr>
                      <tr>
                        <td>United Kingdom</td>
                        <td>232,112</td>
                        <td>3,438.241</td>
                        <td className="text-right">388</td>
                      </tr>
                      <tr>
                        <td>United Arab Emirates</td>
                        <td>2,349</td>
                        <td> 248.805</td>
                        <td className="text-right">1</td>
                      </tr>
                      <tr>
                        <td>Portugal</td>
                        <td>28,132</td>
                        <td>2,739.012</td>
                        <td className="text-right">4</td>
                      </tr>
                      <tr>
                        <td>Italy</td>
                        <td>196,910</td>
                        <td>3,335.339</td>
                        <td className="text-right">11</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
              </Col>
          </Row>
          <Row>
            <Col md="6">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4"className="card-title-box">COVID Data: Hospitals & ICU</CardTitle>
                </CardHeader>
                <CardBody>
                <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Country</th>
                        <th>Latest ICU Patients</th>
                        <th>Latest ICU Patients per Million</th>
                        <th>Latest Hospital Patients</th>
                        <th>Latest Hospital Patients Per Million</th>
                        <th>Weekly ICU Admissions</th>
                        <th>Weekly ICU Admisions per Million</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>United States</td>
                        <td>701</td>
                        <td>2.072</td>
                        <td>5215</td>
                        <td>15.416</td>
                        <td>6268</td>
                        <td>12.528</td>
                      </tr>
                      <tr>
                        <td>France</td>
                        <td>709</td>
                        <td>10.455</td>
                        <td className="text-right">13149</td>
                        <td>193.901</td>
                        <td>215</td>
                        <td>3.17</td>
                      </tr>
                      <tr>
                        <td>Canada</td>
                        <td>76</td>
                        <td>1.976</td>
                        <td className="text-right">1779</td>
                        <td>46.236</td>
                        <td>76</td>
                        <td>1.976</td>                      
                        </tr>
                      <tr>
                        <td>United Kingdom</td>
                        <td>175</td>
                        <td>2.592</td>
                        <td className="text-right">1325</td>
                        <td>19.627</td>
                        <td>NA</td>
                        <td>NA</td>
                      </tr>
                      <tr>
                        <td>United Arab Emirates</td>
                        <td>NA</td>
                        <td>NA</td>
                        <td className="text-right">NA</td>
                        <td>NA</td>
                        <td>NA</td>
                        <td>NA</td>
                      </tr>
                      <tr>
                        <td>Portugal</td>
                        <td>34</td>
                        <td>3.31</td>
                        <td className="text-right">525</td>
                        <td>51.116</td>
                        <td>27</td>
                        <td>1.324</td>
                      </tr>
                      <tr>
                        <td>Italy</td>
                        <td>22</td>
                        <td>0.373</td>
                        <td className="text-right">722</td>
                        <td>12.23</td>
                        <td>10</td>
                        <td>0.169</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
              </Col>
          </Row>
{/*          <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Users Behavior</CardTitle>
                <p className="card-category">24 Hours performance</p>
              </CardHeader>
              <CardBody>
                <Line
                  data={dashboard24HoursPerformanceChart.data}
                  options={dashboard24HoursPerformanceChart.options}
                  width={400}
                  height={100}
                />
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fa fa-history" /> Updated 3 minutes ago
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>*/}
        <Outlet />  
      </div>
    </div>
  );
}

export default Reports;