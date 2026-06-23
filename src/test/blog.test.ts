import { describe, expect, test } from 'vitest'

const users = [
  { no: 1, email: `user1@gmail.com` },
  { no: 2, email: `user2@gmail.com` },
  { no: 3, email: `user3@gmail.com` },
]

export function getUser(no: number) {
  return {
    no,
    email: `user${no}@test.com`,
  }
}

export function findUser(no: number) {
  return users.find((user) => user.no === no)
}

describe('테스트 Matcher 종류 실습', () => {
  test('예상값 테스트', () => {
    expect('예상 값').not.toBe('실제 값')
  })

  test('숫자 테스트', () => {
    expect(1).toBe(1)
  })

  test('객체 반환 테스트', () => {
    expect(getUser(1)).toEqual({
      no: 1,
      email: 'user1@test.com',
    })
  })

  test('객체 포함 여부 테스트', () => {
    const user = {
      no: 1,
      email: 'john.doe@test,com',
      firstName: 'john',
      lastName: 'doe',
    }
    expect(user).toMatchObject({ firstName: 'john', lastName: 'doe' })
    expect(user).toHaveProperty('firstName', 'john')
    expect(user).toHaveProperty('email')
  })

  test('배열 포함 여부 테스트', () => {
    const colors = ['red', 'blue', 'green']
    expect(colors).toHaveLength(3)
    expect(colors).toContain('red')
    expect(colors).not.toContain('yellow')
  })

  test('문자열 정규식 테스트', () => {
    expect(getUser(1).email).toBe('user1@test.com')
    expect(getUser(1).email).match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
  })

  test('오브젝트 정의 여부 탐색 테스트', () => {
    expect(findUser(1)).toBeDefined()
    expect(findUser(4)).not.toBeDefined()
  })

  test('Boolean값 검증 테스트', () => {
    expect(0).toBeFalsy()
    expect(1).toBeTruthy()
    expect(null).toBeFalsy()
    expect(undefined).toBeFalsy()
    expect('').toBeFalsy()
    expect('').toBeTruthy()
  })
})
