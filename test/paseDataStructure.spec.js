import { getDataStructure } from '#common/utils/question-handler/parseStructure.js'
import { expect, it } from 'vitest'

const mockJSDOC_multiple = `/**
* Definition for singly-linked list.
* function ListNode(val, next) {
*     this.val = (val===undefined ? 0 : val)
*     this.next = (next===undefined ? null : next)
* }
*/
/**
* @param {ListNode} list1
* @param {number} a
* @param {number} b
* @param {ListNode} list2
* @return {ListNode}
*/
var mergeInBetween = function(list1, a, b, list2) {
   console.log(list1.val,list1)
};`

const mockJSDOC_single = `/**
* Definition for singly-linked list.
* function ListNode(val, next) {
*     this.val = (val===undefined ? 0 : val)
*     this.next = (next===undefined ? null : next)
* }
*/
/**
* @param {ListNode} head
* @return {ListNode}
*/
var sortList = function(head) {

};`
const return_void = `/**
* Definition for singly-linked list.
* function ListNode(val, next) {
*     this.val = (val===undefined ? 0 : val)
*     this.next = (next===undefined ? null : next)
* }
*/
/**
* @param {ListNode} head
* @return {void} Do not return anything, modify head in-place instead.
*/
var reorderList = function(head) {

};`

const mockJSDOC_ListNodeArray = `/**
* Definition for singly-linked list.
* function ListNode(val, next) {
*     this.val = (val===undefined ? 0 : val)
*     this.next = (next===undefined ? null : next)
* }
*/
/**
* @param {ListNode[]} lists
* @return {ListNode}
*/
var mergeKLists = function(lists) {
   // console.log(lists.length, lists.val)
   // const lists_1 = new ListNode(null)
       for (let i = 0; i < lists.length; i++) {
       let node = lists[i];
       if(node) {
       console.log(node.val)

       }
       // while (node) {
       //     list.push(node.val);
       //     node = node.next;
       // }
   }


};`

const array = ['ListNode', 'number', 'number', 'ListNode']

it('获取入参的数据结构 多参 是数组', () => {
  expect(getDataStructure(mockJSDOC_multiple)).toBeInstanceOf(Array)
})
it('获取入参的数据结构 多参 匹配值', () => {
  expect(getDataStructure(mockJSDOC_multiple)).toEqual(array)
})
it('获取入参的数据结构 单参 是数组', () => {
  expect(getDataStructure(mockJSDOC_single)).toBeInstanceOf(Array)
})
it('获取入参的数据结构 单参 匹配值', () => {
  expect(getDataStructure(mockJSDOC_single)).toEqual(['ListNode'])
})

it('获取入参的数据结构 单参 ListNode[]', () => {
  expect(getDataStructure(mockJSDOC_ListNodeArray, 'param')).toEqual(['ListNode[]'])
})
it('获取返回值的数据结构 单参 匹配值', () => {
  expect(getDataStructure(mockJSDOC_single, 'return')).toEqual(['ListNode'])
})

it('获取返回值的数据结构 多参 匹配值', () => {
  expect(getDataStructure(mockJSDOC_multiple, 'return')).toEqual(['ListNode'])
})
it('获取返回值的数据结构 单参 void', () => {
  expect(getDataStructure(return_void, 'return')).toEqual(['void'])
})
