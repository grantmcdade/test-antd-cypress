import React, { MouseEvent } from 'react'

import { Issue } from 'api/githubAPI'
import { shorten } from 'utils/stringUtils'

import { IssueLabels } from 'components/IssueLabels'
import { UserWithAvatar } from 'components/UserWithAvatar'

import styles from './IssueListItem.module.css'
import { List } from 'antd'

type Props = Issue & {
  showIssueComments: (issueId: number) => void
}

export const IssueListItem = ({
  number,
  title,
  labels,
  user,
  comments,
  body = '',
  showIssueComments,
}: Props) => {
  const onIssueClicked = (e: MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    showIssueComments(number)
  }

  const pluralizedComments = comments === 1 ? 'comment' : 'comments'

  return (
    <List.Item>
      <List.Item.Meta
        avatar={<UserWithAvatar user={user} />}
        title={
          <React.Fragment>
            <a href="#comments" onClick={onIssueClicked}>
              <span className={styles.number}>#{number}</span>
              <span className={styles.title}>{title}</span>
            </a>
            <br /> ({comments} {pluralizedComments})
          </React.Fragment>
        }
        description={
          <React.Fragment>
            {shorten(body)}
            <IssueLabels labels={labels} className={styles.label} />
          </React.Fragment>
        }
      />
    </List.Item>
  )
}
