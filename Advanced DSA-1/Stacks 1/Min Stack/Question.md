()
getMin()
top()
Input 2:
getMin()
pop()
top()

Example Output

Output 1:
-2 1 2
Output 2:
-1 -1

Example Explanation

Explanation 1:
Let the initial stack be : []

1. push(1) : [1]
2. push(2) : [1, 2]
3. push(-2) : [1, 2, -2]
4. getMin() : Returns -2 as the minimum element in the stack is -2.
5. pop() : Return -2 as -2 is the topmost element in the stack.
6. getMin() : Returns 1 as the minimum element in stack is 1.
7. top() : Return 2 as 2 is the topmost element in the stack.
   Explanation 2:
   Let the initial stack be : []
8. getMin() : Returns -1 as the stack is empty.
9. pop() : Returns nothing as the stack is empty.
10. top() : Returns -1 as the stack is empty.
