const object = ( array, list  ) => {
	let newObj = {};
	for (let index = 0; index < array.length; index++)
		newObj[array[index]] = list[index];
		

	return newObj
}

export { object }
