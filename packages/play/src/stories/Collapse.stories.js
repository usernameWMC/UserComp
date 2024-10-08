import { Meta, StoryObj } from '@storybook/vue3'
import { UserCollapse, UserCollapseItem } from 'usercomp'
import 'usercomp/dist/theme/Collapse.css'

const meta = {
  title: 'Example/Collapse',
  component: UserCollapse,
  subcomponents: { UserCollapseItem },
  tags: ['autodocs']
}

const Default = {
  render: args => ({
    components: {
      UserCollapse,
      UserCollapseItem
    },
    setup() {
      return {
        args
      }
    },
    template: `
      <user-collapse v-bind="args">
        <user-collapse-item name="a" title="Title a">
          <div>this is content a</div>
        </user-collapse-item>
        <user-collapse-item name="b" title="title b">
          <div>this is content b</div>
        </user-collapse-item>
        <user-collapse-item name="c" title="title c disable" disabled>
          <div>this is content c</div>
        </user-collapse-item>
      </user-collapse>
    `
  }),
  args: {
    accordion: true,
    modelValue: ['a']
  }
}

export default meta
export { Default }
