import { within, userEvent, expect } from '@storybook/test'
import { UserButton } from 'usercomp'
// import "eric-ui/dist/theme/Button.css";

// 不再使用 TypeScript 的类型注解
const meta = {
  title: 'Example/Button',
  component: UserButton,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'success', 'warning', 'danger', 'info', '']
    },
    size: {
      control: { type: 'select' },
      options: ['large', 'default', 'small', '']
    },
    disabled: {
      control: 'boolean'
    },
    loading: {
      control: 'boolean'
    },
    useThrottle: {
      control: 'boolean'
    },
    throttleDuration: {
      control: 'number'
    },
    autofocus: {
      control: 'boolean'
    },
    tag: {
      control: { type: 'select' },
      options: ['button', 'a', 'div']
    },
    nativeType: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset', '']
    },
    icon: {
      control: { type: 'text' }
    },
    loadingIcon: {
      control: { type: 'text' }
    }
  },
  args: { onClick: () => {} } // 使用普通函数替代 TypeScript 的 `fn`
}

const container = val => `
<div style="margin:5px">
  ${val}
</div>
`

export const Default = {
  argTypes: {
    content: {
      control: { type: 'text' }
    }
  },
  args: {
    type: 'primary',
    content: 'Button'
  },
  render: args => ({
    components: { UserButton },
    setup() {
      return { args }
    },
    template: container(`<er-button v-bind="args">{{args.content}}</er-button>`)
  }),
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement)
    await step('click button', async () => {
      await userEvent.tripleClick(canvas.getByRole('button'))
    })
    expect(args.onClick).toHaveBeenCalled()
  }
}

export const Circle = {
  args: {
    icon: 'search'
  },
  render: args => ({
    components: { UserButton },
    setup() {
      return { args }
    },
    template: container(`
      <er-button circle v-bind="args"/>
    `)
  }),
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement)
    await step('click button', async () => {
      await userEvent.click(canvas.getByRole('button'))
    })
    expect(args.onClick).toHaveBeenCalled()
  }
}

Circle.parameters = {}

export const Group = {
  argTypes: {
    groupType: {
      control: { type: 'select' },
      options: ['primary', 'success', 'warning', 'danger', 'info', '']
    },
    groupSize: {
      control: { type: 'select' },
      options: ['large', 'default', 'small', '']
    },
    groupDisabled: {
      control: 'boolean'
    },
    content1: {
      control: { type: 'text' },
      defaultValue: 'Button1'
    },
    content2: {
      control: { type: 'text' },
      defaultValue: 'Button2'
    }
  },
  args: {
    round: true,
    content1: 'Button1',
    content2: 'Button2'
  },
  render: args => ({
    components: { UserButton, ErButtonGroup },
    setup() {
      return { args }
    },
    template: container(`
       <er-button-group :type="args.groupType" :size="args.groupSize" :disabled="args.groupDisabled">
         <er-button v-bind="args">{{args.content1}}</er-button>
         <er-button v-bind="args">{{args.content2}}</er-button>
       </er-button-group>
    `)
  }),
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement)
    await step('click btn1', async () => {
      await userEvent.click(canvas.getByText('Button1'))
    })
    await step('click btn2', async () => {
      await userEvent.click(canvas.getByText('Button2'))
    })
    expect(args.onClick).toHaveBeenCalled()
  }
}

export default meta
