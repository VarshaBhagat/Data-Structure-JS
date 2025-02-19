If the array size is A -
Total number of subarrays are = A(A+1)/2

To find the number of subarrays with bitwise OR 0, find the subarrays with all elements equal to 0.
So, basically consider group of consecutive 0’s and their contribution in the count of subarrays.

Let’s assume the given array is - [1, 0, 0, 0, 1]
There is one group with three consecutive zeroes. Out of this group, number of subarrays with all elements equal to zero are 3*(3+1)/2 = 6.
And the 6 subarrays are -
subarray from index 1 to 1
subarray from index 1 to 2
subarray from index 1 to 3
subarray from index 2 to 2
subarray from index 2 to 3
subarray from index 3 to 3

So, if there are x consecutive zeroes, add x(x+1)/2 in the count of subarrays with all elements equal to 0.

So, finally the approach is -

count = 0 (count is representing the count of subarrays with bitwise OR 0)
zeroes = 0 (zeroes is representing the count of continuous zeroes)
iterate on all the elements of the array
if ith element is 0 -> zeroes += 1
if ith element is 1 -> count += (zeroes * (zeroes + 1)) / 2 and reset zeroes to 0
Final ans will be A(A+1)/2 - count