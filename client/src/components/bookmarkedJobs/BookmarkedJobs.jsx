import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { SiJavascript } from "react-icons/si";

export default class BookmarkedJobs extends Component {
  state = {
    bookmarkedJobs: [],
  };
  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Job Role + Position</th>
              <th>Location</th>
              <th>Challenge</th>

              <th>Bookmarked Jobs</th>
            </tr>
          </thead>
          <tbody className="bg-white shadow-sm">
            <tr>
              <td>1</td>
              <td>Junior Fullstack Development</td>
              <td>Germany, Berlin</td>
              <td>
                <SiJavascript className="text-warning" />
              </td>
              <td className="text-info">@mdo</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
