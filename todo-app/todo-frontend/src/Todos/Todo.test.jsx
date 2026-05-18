import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import Todo from './Todo'

test('renders todo text and done status', () => {
  const todo = {
    _id: '123',
    text: 'Write component test',
    done: false
  }

  render(
    <Todo
      todo={todo}
      deleteTodo={() => {}}
      completeTodo={() => {}}
    />
  )

  expect(screen.getByText('Write component test')).toBeInTheDocument()
  expect(screen.getByText('This todo is not done')).toBeInTheDocument()
})