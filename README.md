# Service-Lane-Problem
Javascript Solution to Service Lane Problem

<h3>
Problem Statement
</h3>

Calvin is driving his favorite vehicle on the 101 freeway. He notices that the check engine light of his vehicle is on, and he wants to service it immediately to avoid any risks. Luckily, a service lane runs parallel to the highway. The length of the service lane is N units. The service lane consists of N segments of equal length and different width.

Calvin can enter to and exit from any segment. Let's call the entry segment as index i and the exit segment as index j. Assume that the exit segment lies after the entry segment (i≤j) and 0≤i. Calvin has to pass through all segments from index i to index j (both inclusive).

<h3>
Paradise Highway
</h3>

Calvin has three types of vehicles - bike, car, and truck - represented by 1, 2 and 3, respectively. These numbers also denote the width of the vehicle.

You are given an array width of length N, where width[k] represents the width of the kth segment of the service lane. It is guaranteed that while servicing he can pass through at most 1000 segments, including the entry and exit segments.

If width[k]=1, only the bike can pass through the kth segment.
If width[k]=2, the bike and the car can pass through the kth segment.
If width[k]=3, all three vehicles can pass through the kth segment.
Given the entry and exit point of Calvin's vehicle in the service lane, output the type of the largest vehicle which can pass through the service lane (including the entry and exit segments).

<h3>
Input Format
</h3>

The first line of input contains two integers, N and T, where N denotes the length of the freeway and T the number of test cases. The next line has N space-separated integers which represent the width array.

T test cases follow. Each test case contains two integers, i and j, where i is the index of the segment through which Calvin enters the service lane and j is the index of the lane segment through which he exits.
<h3>
Constraints
</h3>

2≤N≤100000 <br/> 
1≤T≤1000 <br/>
0≤i<j<N <br/>
2≤j−i+1≤min(N,1000) <br/> 
1≤width[k]≤3,where 0≤k<N <br/>

<h3>
Output Format
</h3>

For each test case, print the number that represents the largest vehicle type that can pass through the service lane.

<h3>
Note: Calvin has to pass through all segments from index i to index j (both inclusive).
</h3>
