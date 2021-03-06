Functions based off of underscorejs.org:

1. min </br>
      Paramaters => (list, [iteratee], [context]) 
      Returns the minimum value in list. If an iteratee function is provided, it will be used on each value to generate the criterion by which the value is ranked. Infinity is returned if list is empty, so an isEmpty guard may be required. Non-numerical values in list will be ignored.</br>
      Example:
      var numbers = [10, 5, 100, 2, 1000];
      _.min(numbers);
      => 2 </br>
2. max </br> 
      Paramaters => (list, [iteratee], [context]) 
      Returns the maximum value in list. If an iteratee function is provided, it will be used on each value to generate the criterion by which the value is ranked. -Infinity is returned if list is empty, so an isEmpty guard may be required. Non-numerical values in list will be ignored.</br>
      Example:
      var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
      _.max(stooges, function(stooge){ return stooge.age; });
      => {name: 'curly', age: 60}; </br>
3. map </br>
      Parameters => (list, iteratee, [context]) Aka: collect 
      Produces a new array of values by mapping each value in list through a transformation function (iteratee). The iteratee is passed three arguments: the value, then the index (or key) of the iteration, and finally a reference to the entire list.</br>
      Example:
      _.map([1, 2, 3], function(num){ return num * 3; });
      => [3, 6, 9]
      _.map({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; });
      => [3, 6, 9]
      _.map([[1, 2], [3, 4]], _.first);
      => [1, 3] </br>

4. each </br> 
      Paramaters => (list, iteratee, [context]) aka forEach 
      Iterates over a list of elements, yielding each in turn to an iteratee function. The iteratee is bound to the context object, if one is passed. Each invocation of iteratee is called with three arguments: (element, index, list). If list is a JavaScript object, iteratee's arguments will be (value, key, list). Returns the list for chaining.</br>
      Example:
      _.each([1, 2, 3], alert);
      => alerts each number in turn...
      _.each({one: 1, two: 2, three: 3}, alert);
      => alerts each number value in turn... </br>

5. first </br>
      Parameters => (array, [n]) Aka: head, take 
      Returns the first element of an array. Passing n will return the first n elements of the array.</br>
      Example:
      _.first([5, 4, 3, 2, 1]);
      => 5 </br>
6. last </br>
      Parameters => (array, [n]) 
      Returns the last element of an array. Passing n will return the last n elements of the array.</br>
      Example:
      _.last([5, 4, 3, 2, 1]);
      => 1 </br>
7. filter </br>
      Parameters => (list, predicate, [context]) Aka: select 
      Looks through each value in the list, returning an array of all the values that pass a truth test (predicate).</br>
      Example:
      var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
      => [2, 4, 6] </br>
8. keys </br>
      Parameters => (object) 
      Retrieve all the names of the object's own enumerable properties.</br>
      Example:
      _.keys({one: 1, two: 2, three: 3});
      => ["one", "two", "three"] </br>
9. every </br> 
      Parameters => (list, [predicate], [context]) Aka: all 
      Returns true if all of the values in the list pass the predicate truth test. Short-circuits and stops traversing the list if a false element is found.</br>
      Example: 
      _.every([2, 4, 5], function(num) { return num % 2 == 0; });
      => false </br>
10. initial </br> 
      Parameters => (array, [n]) 
      Returns everything but the last entry of the array. Especially useful on the arguments object. Pass n to exclude the last n elements from the result.</br>
      Example: 
      _.initial([5, 4, 3, 2, 1]);
      => [5, 4, 3, 2] </br>
11. reduce </br>
      Parameters => (list, iteratee, [memo], [context]) Aka: inject, foldl 
      Also known as inject and foldl, reduce boils down a list of values into a single value. Memo is the initial state of the reduction, and each successive step of it should be returned by iteratee. The iteratee is passed four arguments: the memo, then the value and index (or key) of the iteration, and finally a reference to the entire list.</br>
      
      If no memo is passed to the initial invocation of reduce, the iteratee is not invoked on the first element of the list. The first element is instead passed as the memo in the invocation of the iteratee on the next element in the list.</br>
      Example:
      var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
      => 6 </br>
12. isNumber </br>
      Returns true if object is a Number (including NaN).</br>
      Example: 
      _.isNumber(8.4 * 5);
      => true </br>
13. isFunction </br>
      Parameters => (object) 
      Returns true if object is a Function.</br>
      Example:
      _.isFunction(alert);
      => true </br>
14. isString </br>
      Parameters => (object) 
      Returns true if object is a String.</br>
      Example:
      _.isString("moe");
      => true </br>
15. isArray </br>
      Parameters => (object) 
      Returns true if object is an Array.</br>
      Example:
      (function(){ return _.isArray(arguments); })();
      => false
      _.isArray([1,2,3]);
      => true </br>
16. isNull </br>
      Parameters => (object) 
      Returns true if the value of object is null.</br>
      Example:
      _.isNull(null);
      => true
      _.isNull(undefined);
      => false </br>
17. memoize </br> 
      Parameters => (function, [hashFunction]) 
      Memoizes a given function by caching the computed result. Useful for speeding up slow-running computations. If passed an optional hashFunction, it will be used to compute the hash key for storing the result, based on the arguments to the original function. The default hashFunction just uses the first argument to the memoized function as the key. The cache of memoized values is available as the cache property on the returned function.</br>
      Example:
      var fibonacci = _.memoize(function(n) {
        return n < 2 ? n: fibonacci(n - 1) + fibonacci(n - 2);
      }); </br>
18. values </br>
      Parameters => (object) 
      Return all of the values of the object's own properties.</br>
      Example:
      _.values({one: 1, two: 2, three: 3});
      => [1, 2, 3] </br>

19. omit </br>
      Parameters => (object, *keys) 
      Return a copy of the object, filtered to omit the blacklisted keys (or array of keys). Alternatively accepts a predicate indicating which keys to omit.</br>
      Example: 
      _.omit({name: 'moe', age: 50, userid: 'moe1'}, 'userid');
      => {name: 'moe', age: 50}
      _.omit({name: 'moe', age: 50, userid: 'moe1'}, function(value, key, object) {
        return _.isNumber(value);
      });
      => {name: 'moe', userid: 'moe1'} </br>

20. rest </br>
      Parameters (array, [index]) Aka: tail, drop 
      Returns the rest of the elements in an array. Pass an index to return the values of the array from that index onward.</br>
      Example:
      _.rest([5, 4, 3, 2, 1]);
      => [4, 3, 2, 1] </br>

21. size </br>
      Parameters => (object)
      Returns the size of the object. Pass an object to return the size. </br>
      Example:
      _.size({one: 1, two: 2, three: 3});
      size_.size(list)  Return the number of values in the list.
      => 3 </br>

22. isUndefined </br>
      Parameters => (value) 
      Returns true if value is undefined.</br>
      Example: 
      _.isUndefined(window.missingVariable);
      => true </br>

23. isArguments </br>
      Parameters => (object) 
      Returns true if object is an Arguments object. </br>
      Example: 
      (function(){ return _.isArguments(arguments); })(1, 2, 3);
      => true
      _.isArguments([1,2,3]);
      => false </br>

24. isBoolean </br>
      Parameters => (object)
      Returns true if object is either true or false. </br>
      Example:
      _.isBoolean(null);
      => false </br> 

25. object </br>
      Parameters => (list, [values]) 
      Converts arrays into objects. Pass either a single list of [key, value] pairs, or a list of keys, and a list of values. If duplicate keys exist, the last value wins. </br>
      Example:
      _.object(['moe', 'larry', 'curly'], [30, 40, 50]);
      => {moe: 30, larry: 40, curly: 50}
      </br>
      _.object([['moe', 30], ['larry', 40], ['curly', 50]]);
      => {moe: 30, larry: 40, curly: 50}

26. reject </br>
      Parameters => (list, predicate, [context]) 
      Returns the values in list without the elements that the truth test (predicate) passes. The opposite of filter. </br>
      Example:
      var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
      => [1, 3, 5]

27.  has </br>
      Parameters => ((object, key)) 
      Does the object contain the given key? Identical to object.hasOwnProperty(key), but uses a safe reference to the hasOwnProperty function, in case it's been overridden accidentally. </br>
      Example: 
      _.has({a: 1, b: 2, c: 3}, "b");
      => true

28.   find </br>
      Parameters => (list, predicate, [context]) Aka: detect 
      Looks through each value in the list, returning the first one that passes a truth test (predicate), or undefined if no value passes the test. The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list.</br>
      Example:
      var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
      => 2

29.   findIndex </br>
      Parameters => (array, predicate, [context]) 
      Similar to _.indexOf, returns the first index where the predicate truth test passes; otherwise returns -1.</br>
      Example:
      _.findIndex([4, 6, 8, 12], isPrime);
      => -1 // not found
      _.findIndex([4, 6, 7, 12], isPrime);
      => 2
30.   some </br>
      Parameters => (list, [predicate], [context]) Aka: any 
      Returns true if any of the values in the list pass the predicate truth test. Short-circuits and stops traversing the list if a true element is found. </br>
      Example:
      _.some([null, 0, 'yes', false]);
      => true
