import { Story, Meta } from '@storybook/react'
import Button from '.'
import React from 'react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story = (args) => <Button {...args} />

Default.args = {
  children: 'Buy now'
}

export const withIcon: Story = (args) => <Button {...args} />

withIcon.args = {
  size: 'small',
  children: 'Buy now',
  icon: <AddShoppingCart />
}

export const asLink: Story = (args) => <Button {...args} />

asLink.args = {
  size: 'large',
  children: 'Buy now',
  as: 'a',
  href: '#'
}
