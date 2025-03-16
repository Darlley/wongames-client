import { Story, Meta } from '@storybook/react/types-6-0'
import Radio, { RadioProps } from '.'

export default {
  title: 'Radio',
  component: Radio,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  },
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta

export const Default: Story<RadioProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Radio
        label="primeiro"
        htmlFor="primeiro"
        id="primeiro"
        name="nome"
        value="primeiro"
        defaultChecked
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        label="segundo"
        htmlFor="segundo"
        id="segundo"
        name="nome"
        value="segundo"
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        label="terceiro"
        htmlFor="terceiro"
        id="terceiro"
        name="nome"
        value="terceiro"
      />
    </div>
  </>
)