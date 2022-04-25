interface IObj {
    [index: string]: any;
}

const useQuery = (): null | object => {
    let query: null | IObj = null;
    let hash: string = window.location.hash;
    if (hash.indexOf('?') !== -1) {
        let result: IObj = {};
        hash.split('?')[1].split('&').reduce((prev, curr) => {
            const [key, value] = curr.split('=')
            prev[key] = decodeURIComponent(value)
            return prev;
        }, result);
        query = result;
    }
    return query;
}
export default useQuery;
