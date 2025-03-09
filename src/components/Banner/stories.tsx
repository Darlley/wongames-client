import { Story, Meta } from '@storybook/react/types-6-0'
import Banner, { BannerProps, DefaultBannerProps } from '.'

export default {
  title: 'Banner',
  component: Banner,
  args: DefaultBannerProps,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
)
