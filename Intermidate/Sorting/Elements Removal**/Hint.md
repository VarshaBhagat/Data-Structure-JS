Let’s find the count of how many times an element will contribute to the answer.

Remove any element from the array. The cost of this operation is equal to the sum of array elements irrespective of which element gets removed.

If we remove another element from the array, the cost of this operation will be ( cost of the previous operation - the element which gets removed in the last operation.)

So, we can easily observe that it is wise to remove the highest element first to make the total cost minimum, and elements also follow a pattern.

Element removed first will be added 1 time to the answer.
Element removed second will be added 2 times to the answer.
Element removed third will be added 3 times to the answer.
.
.
.
So on.

We can easily find the total cost in one single loop.

Time Complexity: O(N)
Space Complexity: O(1)