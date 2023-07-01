import React, { useState, useEffect, createContext, useContext } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import * as utils from "../Utils";

import { UserContext } from "./authprovider";
export const IssuesContext = createContext({
  issues: [],
  updateIssues: undefined,
});

export const IssuesProvider = (props) => {
  const [allIssues, setIssues] = useState();
  const userInfo = useContext(UserContext);
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const archived = searchParams.get("archived") === "true";

  const updateIssue = (issue) => {
    let issues = [...allIssues];

    issues = issues.map((value) => {
      if (value.id === issue.id) {
        return issue;
      }
      return value;
    });

    utils
      .requests("put", `/api/issue/${issue.id}`, {
        data: { issue, userInfo: userInfo },
        alert: true,
        alertMessage: `Successfully updated "${
          issue.summary
        }" with status "${utils.toTitleCase(issue.status)}"`,
      })
      .then(() => {
        setIssues(issues);
      });
  };

  const deleteIssue = (issue) => {
    utils
      .requests("delete", `/api/issue/${issue.id}`, {
        data: { issue, userInfo: userInfo },
      })
      .then(() => {
        setIssues();
      });
  };

  useEffect(() => {
    if (!allIssues) {
      utils
        .requests(
          "get",
          `/api/project/63fe47296edfc3b387628861/category/${params.category}/issues`
        )
        .then((data) => setIssues(data));
    }
  });

  useEffect(() => {
    if (allIssues) {
      setIssues();
      utils
        .requests(
          "get",
          `/api/project/63fe47296edfc3b387628861/category/${params.category}/issues`
        )
        .then((data) => setIssues(data));
    }
  }, [params.category]); // eslint-disable-line

  return (
    <IssuesContext.Provider
      value={{ issues: allIssues, updateIssue: updateIssue }}
    >
      {props.children}
    </IssuesContext.Provider>
  );
};