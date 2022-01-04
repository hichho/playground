const useQuery = <T>(): null | T => {
    let query: null | T = null;
    let hash: string = window.location.hash;
    if (hash.indexOf('?') !== -1) {
        let result: any = {};
        hash.split('?')[1].split('&').reduce((prev, curr) => {
            const [key, value] = curr.split('=')
            prev[key] = decodeURIComponent(value)
            return prev;
        }, result);
        query = result;
    }
    return query as T;
}
export default useQuery;
