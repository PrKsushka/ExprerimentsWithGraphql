function sortArrayOfObjects(arr: any[], param: string, field1: string, field2?: string) {
    if (param === 'asc') {
        return arr.sort((a, b) => {
            if (field2) {
                if (a[field1][field2] < b[field1][field2]) {
                    return -1
                }
                if (a[field1][field2] > b[field1][field2]) {
                    return 1;
                }
            } else {
                if (a[field1] < b[field1]) {
                    return -1
                }
                if (a[field1] > b[field1]) {
                    return 1;
                }
            }
            return 0;
        })
    } else if (param === 'desc') {
        return arr.sort((a, b) => {
            if (field2) {
                if (a[field1][field2] > b[field1][field2]) {
                    return -1
                }
                if (a[field1][field2] < b[field1][field2]) {
                    return 1;
                }
            } else {
                if (a[field1] > b[field1]) {
                    return -1
                }
                if (a[field1] < b[field1]) {
                    return 1;
                }
            }
            return 0;
        })
    } else {
        throw new Error('something went wrong')
    }
}

export default sortArrayOfObjects;