export const crudOptions = {
  columns: [
    {
      title: '创建时间',
      key: 'createDate',
      type: 'datetime',
      rowSlot: true,
      width: 200
    },
    {
      title: 'slot自定义',
      key: 'slotExample',
      // type: 'slot-all', // slot-all等效
      sortable: true,
      search: {
        disabled: false,
        slot: true
      },
      form: {
        slot: true,
        helper: { slot: true }
      },
      rowSlot: true
    },
    {
      title: '主题',
      key: 'topics',
      type: 'select',
      form: {
        slot: true
      }
    },
    {
      title: '自定义扩展',
      key: 'extends',
      type: 'demo-extend',
      form: {
        helper: '自定义扩展演示(d2-crud-plus-extends/src/demo-extends)',
        component: {
          span: 24
        }
      }
    },
    {
      title: 'jsx自定义',
      key: 'render',
      form: {
        component: {
          render: (h, scope) => {
            console.log('scope', scope)
            // eslint-disable-next-line
            return (<div>表单render：{scope.value}</div>)
          }
        }
      },
      component: {
        render: (h, scope) => {
          console.log('scope', scope)
          // eslint-disable-next-line
          return (<div>行render：{scope.value}</div>)
        }
      }
    }
  ],
  formOptions: {
    footer: {
      slot: true // 自定义编辑框按钮slot ， slot名称为 FormFooterSlot
    },
    center: true // 标题与按钮居中布局
  },
  rowHandle: {
    width: 400,
    custom: [
      {
        text: '自定义按钮',
        type: 'warning',
        size: 'small',
        emit: 'custom-emit'
      }
    ]
  }
}
