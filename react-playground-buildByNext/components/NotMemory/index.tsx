const NotMemory = (props: any) => {
    let start = 0;
    while (start < props.count) {
        if (start % 500 === 0) {
            console.log('not-memo')
        }
        start++;
    }
    return (<div>
        notMemo
    </div>);
}
export default NotMemory;
