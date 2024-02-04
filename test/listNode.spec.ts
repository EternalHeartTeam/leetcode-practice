import { test, expect, describe } from 'vitest';
const ListNode = require('../common/structures/ListNode');

test('toArray 正常数组', () => {
  // 创建链表
  const head = new ListNode(1);
  const node1 = new ListNode(2);
  const node2 = new ListNode(3);
  head.next = node1;
  node1.next = node2;

 const arr = ListNode.toArray(head)
 expect(arr).toEqual([1, 2, 3])
})
test('toArray undefined', () => {
  const arr = ListNode.toArray(undefined)
  expect(arr).toEqual([])
})
test('toArray false', () => {
  const arr = ListNode.toArray(false)
  expect(arr).toEqual([undefined])
})
test('toArray 1', () => {
  const arr = ListNode.toArray(1)
  expect(arr).toEqual([undefined])
})
test('parse [1,2,3]', () => {
  const listNode = ListNode.parse([1,2,3])
  expect(listNode.val).toEqual(1)
  expect(listNode.next?.val).toEqual(2)
  expect(listNode.next?.next?.val).toEqual(3)
})
test('parse []', () => {
  const listNode = ListNode.parse([])
  expect(listNode).toEqual(null)
})