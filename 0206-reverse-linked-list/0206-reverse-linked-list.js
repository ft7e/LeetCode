/**
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
var reverseList = function(head) {
   let previousNode = null;
   let currentNode = head;
   let newNode = null;
    while(currentNode)
    {
        newNode =  new ListNode(currentNode.val);
        newNode.next = previousNode;
        previousNode = newNode;
        currentNode = currentNode.next;
    }
        
    head = previousNode;
    return newNode;
};