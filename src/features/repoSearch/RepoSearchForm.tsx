import React, { useEffect } from 'react'
import { Button, Form, Input, InputNumber } from 'antd'

const useForm = Form.useForm

interface Props {
  org: string
  repo: string
  setOrgAndRepo: (org: string, repo: string) => void
  setJumpToPage: (page: number) => void
}

export const RepoSearchForm = ({
  org,
  repo,
  setOrgAndRepo,
  setJumpToPage,
}: Props) => {
  const [form1] = useForm()
  const [form2] = useForm()

  const onForm1Finish = (values: any) => {
    const { org, repo } = values as { org: string; repo: string }
    setOrgAndRepo(org, repo)
  }

  useEffect(() => {
    const values = {
      org,
      repo,
    }
    form1.setFieldsValue(values)
  }, [org, repo, form1])

  const onForm2Finish = (values: any) => {
    const { jumpToPage } = values as { jumpToPage: number }

    if (jumpToPage >= 1) {
      setJumpToPage(jumpToPage)
    }
  }

  useEffect(() => {
    const values = {
      jumpToPage: 1,
    }
    form2.setFieldsValue(values)
  }, [form2])

  return (
    <div>
      <Form layout="inline" form={form1} onFinish={onForm1Finish}>
        <Form.Item label="Org:" name="org">
          <Input />
        </Form.Item>
        <Form.Item label="Repo:" name="repo">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Load Repo
          </Button>
        </Form.Item>
      </Form>
      <Form
        style={{ marginTop: 5 }}
        layout="inline"
        form={form2}
        onFinish={onForm2Finish}
      >
        <Form.Item label="Issues Page:" name="jumpToPage">
          <InputNumber min={1} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Jump to Page
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
