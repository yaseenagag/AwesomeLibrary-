Functions:

1. min 
      min_.min(list, [iteratee], [context]) 
      Returns the minimum value in list. If an iteratee function is provided, it will be used on each value to generate the criterion by which the value is ranked. Infinity is returned if list is empty, so an isEmpty guard may be required. Non-numerical values in list will be ignored.
      
      var numbers = [10, 5, 100, 2, 1000];
      _.min(numbers);
      => 2
2. max 
      _.max(list, [iteratee], [context]) 
      Returns the maximum value in list. If an iteratee function is provided, it will be used on each value to generate the criterion by which the value is ranked. -Infinity is returned if list is empty, so an isEmpty guard may be required. Non-numerical values in list will be ignored.
      
      var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
      _.max(stooges, function(stooge){ return stooge.age; });
      => {name: 'curly', age: 60};
3. map
      _.map(list, iteratee, [context]) Alias: collect 
      Produces a new array of values by mapping each value in list through a transformation function (iteratee). The iteratee is passed three arguments: the value, then the index (or key) of the iteration, and finally a reference to the entire list.
      
      _.map([1, 2, 3], function(num){ return num * 3; });
      => [3, 6, 9]
      _.map({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; });
      => [3, 6, 9]
      _.map([[1, 2], [3, 4]], _.first);
      => [1, 3]

4. each 
      _.each(list, iteratee, [context]) Alias: forEach 
      Iterates over a list of elements, yielding each in turn to an iteratee function. The iteratee is bound to the context object, if one is passed. Each invocation of iteratee is called with three arguments: (element, index, list). If list is a JavaScript object, iteratee's arguments will be (value, key, list). Returns the list for chaining.
      
      _.each([1, 2, 3], alert);
      => alerts each number in turn...
      _.each({one: 1, two: 2, three: 3}, alert);
      => alerts each number value in turn...

5. first
      _.first(array, [n]) Aliases: head, take 
      Returns the first element of an array. Passing n will return the first n elements of the array.
      
      _.first([5, 4, 3, 2, 1]);
      => 5
6. last
      _.last(array, [n]) 
      Returns the last element of an array. Passing n will return the last n elements of the array.
      
      _.last([5, 4, 3, 2, 1]);
      => 1
7. filter
      _.filter(list, predicate, [context]) Alias: select 
      Looks through each value in the list, returning an array of all the values that pass a truth test (predicate).
      
      var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
      => [2, 4, 6]
8. keys 
      _.keys(object) 
      Retrieve all the names of the object's own enumerable properties.
      
      _.keys({one: 1, two: 2, three: 3});
      => ["one", "two", "three"]
9. every 
      _.every(list, [predicate], [context]) Alias: all 
      Returns true if all of the values in the list pass the predicate truth test. Short-circuits and stops traversing the list if a false element is found.
      
      _.every([2, 4, 5], function(num) { return num % 2 == 0; });
      => false
10. initial 
      _.initial(array, [n]) 
      Returns everything but the last entry of the array. Especially useful on the arguments object. Pass n to exclude the last n elements from the result.
      
      _.initial([5, 4, 3, 2, 1]);
      => [5, 4, 3, 2]
11. reduce
      _.reduce(list, iteratee, [memo], [context]) Aliases: inject, foldl 
      Also known as inject and foldl, reduce boils down a list of values into a single value. Memo is the initial state of the reduction, and each successive step of it should be returned by iteratee. The iteratee is passed four arguments: the memo, then the value and index (or key) of the iteration, and finally a reference to the entire list.
      
      If no memo is passed to the initial invocation of reduce, the iteratee is not invoked on the first element of the list. The first element is instead passed as the memo in the invocation of the iteratee on the next element in the list.
      
      var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
      => 6
12. isNumber
      Returns true if object is a Number (including NaN).

      _.isNumber(8.4 * 5);
      => true
13. isFunction 
      _.isFunction(object) 
      Returns true if object is a Function.

      _.isFunction(alert);
      => true
14. isString
      _.isString(object) 
      Returns true if object is a String.
      
      _.isString("moe");
      => true
15. isArray
      _.isArray(object) 
      Returns true if object is an Array.
      
      (function(){ return _.isArray(arguments); })();
      => false
      _.isArray([1,2,3]);
      => true
16. isNull
      _.isNull(object) 
      Returns true if the value of object is null.
      
      _.isNull(null);
      => true
      _.isNull(undefined);
      => false
17. memoize 
      _.memoize(function, [hashFunction]) 
      Memoizes a given function by caching the computed result. Useful for speeding up slow-running computations. If passed an optional hashFunction, it will be used to compute the hash key for storing the result, based on the arguments to the original function. The default hashFunction just uses the first argument to the memoized function as the key. The cache of memoized values is available as the cache property on the returned function.
      
      var fibonacci = _.memoize(function(n) {
        return n < 2 ? n: fibonacci(n - 1) + fibonacci(n - 2);
      });
