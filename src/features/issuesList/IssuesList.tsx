import React from 'react'

import { Issue } from 'api/githubAPI'
import { IssueListItem } from './IssueListItem'

import { List } from 'antd'

interface Props {
  issues: Issue[]
  showIssueComments: (issueId: number) => void
}

export const IssuesList = ({ issues, showIssueComments }: Props) => {
  return (
    <List
      dataSource={issues}
      renderItem={issue => (
        <IssueListItem key={issue.id} {...issue} showIssueComments={showIssueComments} />
      )}
    />
  )
}
