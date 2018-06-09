import _ from "lodash";
import React from "react";
import classNames from "classnames";
import { TextField } from "@material-ui/core/TextField";
import { Button } from "@material-ui/core/Button";

import {
  TEACHER,
  STUDENT,
  CLASSROOMS
} from "./src/components/teacher/teacher_constants.js";

export default class UserSearch extends React.Component {
  render() {
    return (
      <div className="user-search">
        <h1 className="user-search-header">User Search</h1>
        <main className="user-search-main">
          <p>This is where the user search details go</p>
        </main>
      </div>
    );
  }
}
